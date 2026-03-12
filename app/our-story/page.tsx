import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Every Mouth Has a Story | Enamr Health",
  description: "Why we're building the ultimate oral care loop.",
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 sm:pt-28">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <Link
            href="/"
            className="text-sm text-white/60 transition hover:text-white/90"
          >
            ← Back to home
          </Link>
        </div>

        {/* Hero image (B&W) */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-8">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2rem] bg-white/5">
            <Image
              src="/our-story-hero-mouth.png"
              alt="Abstract mouths collage"
              fill
              priority
              className="object-cover grayscale"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* Blog article layout - Superpower style */}
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Every Mouth Has a Story
          </h1>

          <p className="mt-4 text-lg italic text-white/80">
            Why we're building the ultimate oral care loop.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/60">
            <time dateTime="2026-03-12">March 12th, 2026</time>
            <span>·</span>
            <span>The Enamr Health Team</span>
          </div>

          <hr className="mt-8 border-white/10" />

          <div className="mt-12 space-y-12">
            <section className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                The front door
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                <strong>Your mouth is the most surveilled environment in your body.</strong>{" "}
                <strong>And nobody&apos;s watching.</strong>
              </p>
              <p className="leading-relaxed text-white/85">
                Right now, billions of microbes are colonizing the surface of your teeth, negotiating truces with your immune
                system along the <strong>gum line</strong>, and sending chemical signals that ripple outward into your{" "}
                <strong>bloodstream and brain</strong>.
              </p>
              <p className="leading-relaxed text-white/85">
                Researchers have linked what happens in this tiny ecosystem to <strong>cardiovascular disease</strong>,{" "}
                <strong>diabetes</strong>, <strong>preterm birth</strong>, <strong>anxiety</strong>,{" "}
                <strong>Alzheimer&apos;s</strong>, and a list that grows longer every year. Your mouth isn&apos;t just connected
                to the rest of your body — <strong>it&apos;s the front door</strong>.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                What&apos;s broken
              </h2>
              <p className="leading-relaxed text-white/85">
                And yet the way we care for it <strong>hasn&apos;t changed in decades</strong>. You brush. You floss (sometimes).
                <strong> Twice a year</strong> you sit in a chair and someone tells you what already went wrong.
              </p>
              <p className="leading-relaxed text-white/85">
                <strong>We started Enamr because we think that&apos;s backwards.</strong>
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                The reversal
              </h2>
              <p className="leading-relaxed text-white/85">
                <em>What if your mouth could talk to you before your doctor had to?</em>
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                What Enamr is
              </h2>
              <p className="leading-relaxed text-white/85">
                <strong>Enamr is an at-home oral health platform</strong> that reads what your mouth is actually telling you. Not
                with a mirror and a guess, but with <strong>biomarker testing</strong> and <strong>AI models</strong> trained on
                real clinical data.
              </p>
              <p className="leading-relaxed text-white/85">
                We measure <strong>over 100 human and microbiome signals</strong> from your mouth, tongue, teeth, and gums, then
                translate the results into a picture you can actually understand: <strong>what&apos;s happening</strong>,{" "}
                <strong>why it matters</strong>, and <strong>what to do about it</strong>.
              </p>
              <p className="leading-relaxed text-white/85">
                Think of it as a <strong>blood panel for your mouth</strong>. Except you don&apos;t need a needle, a lab order, or
                a waiting room.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Why start here?
              </h2>
              <p className="leading-relaxed text-white/85">
                Because the mouth is <strong>biology&apos;s front door</strong>. It&apos;s the first place{" "}
                <strong>inflammation</strong> shows up, the first place <strong>dysbiosis</strong> takes hold, and one of the few
                places you can sample your <strong>microbiome</strong> without a clinical visit.
              </p>
              <p className="leading-relaxed text-white/85">
                We believe <strong>oral biomarkers</strong> are the most underused <strong>early warning system</strong> in
                preventive health. And we&apos;re building the platform to make them useful — not just once, but{" "}
                <strong>continuously</strong> with the coolest science you have never seen.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Test. Track. Treat.
              </h2>
              <p className="leading-relaxed text-white/85">
                <strong>That&apos;s the loop.</strong> You <strong>test</strong> at home. You <strong>track</strong> your biomarkers
                over time and see how they shift with your habits. And when something needs attention, we help you{" "}
                <strong>treat</strong> it with personalized guidance and intervention, powered by data that actually knows your
                mouth.
              </p>
              <p className="leading-relaxed text-white/85">
                Not a one-time snapshot. A <strong>living, learning record</strong> of your health that gets smarter the longer you
                use it.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Who we are
              </h2>
              <p className="leading-relaxed text-white/85">
                <strong>We&apos;re scientists first.</strong> Every founder on this team holds a <strong>PhD or DDS</strong> and has
                published <strong>peer-reviewed</strong> research in the oral health space.
              </p>
              <p className="leading-relaxed text-white/85">
                We didn&apos;t come from tech or wall street and go looking for a health problem to solve. We came from science and
                couldn&apos;t stop noticing one. We have spent years building expertise in the oral health space. That might make us
                one of the few startups you&apos;ll find (possibly the only one) built entirely by people who&apos;ve spent careers
                reading papers, serving patients, running experiments, and following the evidence wherever it leads.
              </p>
              <p className="leading-relaxed text-white/85">
                The <strong>oral microbiome literature</strong> has exploded in the last decade. The links between what lives in
                your mouth and what happens in the rest of your body are no longer speculative. They&apos;re <strong>published</strong>,{" "}
                <strong>replicated</strong>, and <strong>growing</strong>. What&apos;s missing is a way to put that science in
                people&apos;s hands.
              </p>
              <p className="leading-relaxed text-white/85">
                <strong>So that&apos;s what we&apos;re building.</strong>
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Where we are now
              </h2>
              <p className="leading-relaxed text-white/85">
                <strong>We&apos;re launching this summer.</strong> Our first at-home kits ship in <strong>Summer 2026</strong>, and
                we&apos;re opening <strong>early access</strong> to a limited group of users who want to be among the first to see
                what their mouth is really telling them.
              </p>
              <p className="leading-relaxed text-white/85">
                Early access members will get <strong>first priority</strong> on kits, a first look at their biomarker results, and
                a <strong>direct line</strong> to our team as we roll out new features. This is the beginning of the loop — and we
                want the people who care most about their health shaping it with us.
              </p>
              <p className="leading-relaxed text-white/85">
                <strong>Join the waitlist</strong> to lock in your spot and be the first to know when kits go live.
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
