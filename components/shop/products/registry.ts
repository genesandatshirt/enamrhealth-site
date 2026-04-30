export type ShopCategory = "Tests" | "Care" | "Supplements";

export type ShopIndication =
  | "Caries risk"
  | "Periodontal"
  | "Breath"
  | "Inflammation"
  | "Systemic";

export type ShopProduct = {
  id: string;
  name: string;
  category: ShopCategory;
  indications: ShopIndication[];
  description: string;
  priceLabel: string;
  statusLabel: string;
};

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "enamr-microbiome-test",
    name: "Oral Microbiome Test",
    category: "Tests",
    indications: ["Caries risk", "Periodontal", "Systemic"],
    description:
      "At-home saliva collection with structured biomarker reporting.",
    priceLabel: "Coming soon",
    statusLabel: "2026",
  },
  {
    id: "caries-risk-panel",
    name: "Caries Risk Panel",
    category: "Tests",
    indications: ["Caries risk", "Inflammation"],
    description: "Signals that map to enamel and decay risk drivers.",
    priceLabel: "Coming soon",
    statusLabel: "2026",
  },
  {
    id: "periodontal-panel",
    name: "Periodontal Health Panel",
    category: "Tests",
    indications: ["Periodontal", "Inflammation", "Systemic"],
    description: "Microbiome + inflammation markers for gum health.",
    priceLabel: "Coming soon",
    statusLabel: "2026",
  },
  {
    id: "breath-balance-rinse",
    name: "Breath Balance Rinse",
    category: "Care",
    indications: ["Breath"],
    description: "A targeted rinse designed to support a balanced ecosystem.",
    priceLabel: "Coming soon",
    statusLabel: "Coming soon",
  },
  {
    id: "gum-support-serum",
    name: "Gum Support Serum",
    category: "Care",
    indications: ["Periodontal", "Inflammation"],
    description: "A daily topical to support healthier gum signaling.",
    priceLabel: "Coming soon",
    statusLabel: "Coming soon",
  },
  {
    id: "enamel-mineral-care",
    name: "Enamel Mineral Care",
    category: "Care",
    indications: ["Caries risk"],
    description: "Mineral support for enamel resilience and sensitivity.",
    priceLabel: "Coming soon",
    statusLabel: "Coming soon",
  },
  {
    id: "probiotic-lozenge",
    name: "Microbiome Support Lozenge",
    category: "Supplements",
    indications: ["Breath", "Periodontal"],
    description: "A lozenge designed for daily oral microbiome support.",
    priceLabel: "Coming soon",
    statusLabel: "Coming soon",
  },
  {
    id: "inflammation-support",
    name: "Inflammation Support",
    category: "Supplements",
    indications: ["Inflammation", "Systemic"],
    description: "Nutrients chosen to support inflammatory balance.",
    priceLabel: "Coming soon",
    statusLabel: "Coming soon",
  },
  {
    id: "systemic-risk-insights",
    name: "Systemic Risk Insights",
    category: "Supplements",
    indications: ["Systemic"],
    description: "A preview of targeted support mapped to systemic signals.",
    priceLabel: "Coming soon",
    statusLabel: "Coming soon",
  },
];

