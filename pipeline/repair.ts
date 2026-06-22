export function repairSchema(
  schema: any,
  errors: string[]
) {

  for (const error of errors) {

    if (
      error.startsWith(
        "Missing API endpoint for table:"
      )
    ) {

      const table =
        error.split(": ")[1];

      schema.api.endpoints.push({
        path: `/api/${table}`,
        method: "GET",
      });
    }
  }

  return schema;
}