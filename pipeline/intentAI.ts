import { model } from "@/lib/gemini";

export async function extractIntentAI(
  userPrompt: string
) {
  const prompt = `
You are an application compiler.

Extract intent from the user request.

Return ONLY valid JSON.

Schema:

{
  "appType": "string",
  "features": ["string"],
  "roles": ["string"]
}

User Request:
${userPrompt}
`;

  const result =
    await model.generateContent(prompt);

  const text =
    result.response.text();

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const intent =
    JSON.parse(cleaned);

  const promptLower =
    userPrompt.toLowerCase();

  // Ecommerce detection
  if (
    promptLower.includes("e-commerce") ||
    promptLower.includes("ecommerce")
  ) {
    intent.appType = "ecommerce";
  }

  // Feature enrichment
  if (
    promptLower.includes("product")
  ) {
    intent.features.push("products");
  }

  if (
    promptLower.includes("order")
  ) {
    intent.features.push("orders");
  }

  if (
    promptLower.includes("admin")
  ) {
    intent.features.push("admin_panel");
  }
console.log("Gemini failed, using fallback");
  return intent;
}