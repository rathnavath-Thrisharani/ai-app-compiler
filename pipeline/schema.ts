export function generateSchema(architecture: any) {
  const database = {
    tables: architecture.entities.map((entity: string) => ({
      name: entity,
      fields: [
        {
          name: "id",
          type: "string",
        },
      ],
    })),
  };

  const api = {
    endpoints: architecture.entities.map((entity: string) => ({
      path: `/api/${entity}`,
      method: "GET",
    })),
  };

  const ui = {
    pages: architecture.pages.map((page: string) => ({
      name: page,
      components: ["header", "content"],
    })),
  };

  const auth = {
    roles: architecture.roles,
  };

  return {
    database,
    api,
    ui,
    auth,
  };
}