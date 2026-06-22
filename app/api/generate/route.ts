import { NextResponse } from "next/server";
import { generateArchitecture } from "@/pipeline/architect";
import { generateSchema } from "@/pipeline/schema";

import { validateSchema } from "@/pipeline/validator";
import { repairSchema } from "@/pipeline/repair";
import { checkAmbiguity } from "@/pipeline/clarifier";
import { metrics } from "@/evaluation/metrics";
import { extractIntentAI } from "@/pipeline/intentAI";
import { extractIntent } from "@/pipeline/intent";
import { normalizeIntent }from "@/pipeline/normalizeIntent";

export async function POST(req: Request) {

    const startTime = Date.now();

  const { prompt } = await req.json();
  metrics.totalRequests++;

const ambiguity = checkAmbiguity(prompt);

if (ambiguity.needsClarification) {
  return NextResponse.json({
    stage: "clarification-required",
    ...ambiguity,
  });
}

  let intent;

try {
  intent = await extractIntentAI(prompt);

  console.log("Before Normalize:", intent);

  intent = normalizeIntent(intent);

console.log("After Normalize:", intent);

} catch (error) {
  console.log("Gemini failed, using fallback");

  intent = extractIntent(prompt);
}

  const architecture = generateArchitecture(intent);

  let schema = generateSchema(architecture);

  const validation = validateSchema(schema);

  if (validation.valid) {
  metrics.successfulRequests++;
} else {
  metrics.failedRequests++;

  metrics.repairsTriggered++;

    schema = repairSchema(
      schema,
      validation.errors
    );
  }

  const latencyMs =
  Date.now() - startTime;

  return NextResponse.json({

    stage: "validated",
    intent,
    architecture,
    schema,
    validation,
    metrics,
    latencyMs,
  });
}