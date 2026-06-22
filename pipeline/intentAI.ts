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

  return JSON.parse(cleaned);
}