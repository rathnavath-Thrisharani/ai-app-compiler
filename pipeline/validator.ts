import { AppSchema } from "@/schemas/appSchema";

export function validateSchema(schema: any) {
  const errors: string[] = [];

  if (!schema.database) {
    errors.push("Missing database schema");
  }

  if (!schema.api) {
    errors.push("Missing API schema");
  }

  if (!schema.ui) {
    errors.push("Missing UI schema");
  }

  if (!schema.auth) {
    errors.push("Missing auth schema");
  }

  // Cross-layer validation

  const tableNames =
    schema.database?.tables?.map(
      (t: any) => t.name
    ) || [];

  const endpointNames =
    schema.api?.endpoints?.map(
      (e: any) =>
        e.path.replace("/api/", "")
    ) || [];

  for (const table of tableNames) {
    if (!endpointNames.includes(table)) {
      errors.push(
        `Missing API endpoint for table: ${table}`
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}