import crypto from "crypto";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
    return Response.json(
      { error: "Mailchimp is not configured." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const firstName = typeof body?.firstName === "string" ? body.firstName.trim() : "";
  const lastName = typeof body?.lastName === "string" ? body.lastName.trim() : "";
  const healthQuestion =
    typeof body?.healthQuestion === "string" ? body.healthQuestion.trim() : "";

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (!firstName || !lastName) {
    return Response.json(
      { error: "First and last name are required." },
      { status: 400 }
    );
  }

  if (healthQuestion && healthQuestion.length > 1000) {
    return Response.json(
      { error: "Please keep your message under 1000 characters." },
      { status: 400 }
    );
  }

  const subscriberHash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex");

  const response = await fetch(
    `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `anystring:${MAILCHIMP_API_KEY}`
        ).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        status: "subscribed",
        merge_fields: {
          FNAME: firstName || "Friend",
          LNAME: lastName || "Waitlist",
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    const detail =
      typeof error?.detail === "string" ? error.detail : "Unable to join.";
    if (detail.toLowerCase().includes("permanently deleted")) {
      return Response.json(
        {
          error:
            "This email was previously removed. Please use a different email or contact support.",
        },
        { status: 409 }
      );
    }
    return Response.json(
      { error: detail || "Unable to join the waitlist." },
      { status: 502 }
    );
  }

  // Store the user's "what they want to know" as a Mailchimp note so it works
  // without requiring custom merge field setup in the audience.
  if (healthQuestion) {
    await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}/notes`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `anystring:${MAILCHIMP_API_KEY}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          note: `What I want to know about my health: ${healthQuestion}`,
        }),
      }
    ).catch(() => null);
  }

  return Response.json({ success: true });
}
