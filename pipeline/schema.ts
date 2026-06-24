export function generateSchema(architecture: any) {
  const database = {
    tables: architecture.entities.map(
      (entity: string) => ({
        name: entity,
        fields: [
          {
            name: "id",
            type: "string",
          },
        ],
      })
    ),
  };

  const api = {
    endpoints: architecture.entities.map(
      (entity: string) => ({
        path: `/api/${entity}`,
        method: "GET",
      })
    ),
  };

  const ui = {
    pages: architecture.pages.map(
      (page: string) => {

        // LOGIN PAGE
        if (page === "login") {
          return {
            name: page,
            components: [
              {
                type: "input",
                label: "Email",
              },
              {
                type: "input",
                label: "Password",
              },
              {
                type: "button",
                label: "Login",
              },
            ],
          };
        }

        // CONTACTS PAGE
        if (page === "contacts") {
          return {
            name: page,
            components: [
              {
                type: "table",
                label: "Contacts",
              },
              {
                type: "button",
                label: "Add Contact",
              },
            ],
          };
        }

        // DASHBOARD PAGE
        if (page === "dashboard") {
          return {
            name: page,
            components: [
              {
                type: "card",
                label: "Users",
              },
              {
                type: "card",
                label: "Revenue",
              },
              {
                type: "chart",
                label: "Analytics",
              },
            ],
          };
        }

        // BILLING PAGE
        if (page === "billing") {
          return {
            name: page,
            components: [
              {
                type: "card",
                label: "Premium Plan",
              },
              {
                type: "button",
                label: "Upgrade",
              },
            ],
          };
        }

        // ADMIN PAGE
        if (page === "admin") {
          return {
            name: page,
            components: [
              {
                type: "card",
                label: "Manage Users",
              },
              {
                type: "card",
                label: "Analytics",
              },
              {
                type: "card",
                label: "Payments",
              },
              {
                type: "card",
                label: "Reports",
              },
            ],
          };
        }

        // DEFAULT PAGE
        return {
          name: page,
          components: [
            {
              type: "card",
              label: page,
            },
          ],
        };
      }
    ),
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