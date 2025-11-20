export const APP_NAME = "Liwisi Premium";
export const GEMINI_MODEL = "gemini-2.5-flash";

export const INITIAL_STATS = [
  { label: "Total Tokens", value: "1.2M", change: "+12.5%", trend: "up" },
  { label: "Active Sessions", value: "843", change: "+5.2%", trend: "up" },
  { label: "Avg Response", value: "450ms", change: "-12ms", trend: "down" }, // down is good for latency
  { label: "Cost Saving", value: "$2.4k", change: "+8.1%", trend: "up" },
] as const;
