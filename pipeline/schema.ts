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

        // LOGIN
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

        // CONTACTS
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

        // DASHBOARD
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

        // BILLING
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

        // ADMIN
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

        // CALCULATOR
        if (page === "calculator") {
          return {
            name: page,
            components: [
              {
                type: "input",
                label: "Number 1",
              },
              {
                type: "input",
                label: "Number 2",
              },
              {
                type: "button",
                label: "Calculate",
              },
            ],
          };
        }

        // PRODUCTS
        if (page === "products") {
          return {
            name: page,
            components: [
              {
                type: "card",
                label: "Product Catalog",
              },
              {
                type: "button",
                label: "Add Product",
              },
            ],
          };
        }

        // ORDERS
        if (page === "orders") {
          return {
            name: page,
            components: [
              {
                type: "table",
                label: "Orders",
              },
            ],
          };
        }

        // PATIENTS
        if (page === "patients") {
          return {
            name: page,
            components: [
              {
                type: "table",
                label: "Patients",
              },
              {
                type: "button",
                label: "Add Patient",
              },
            ],
          };
        }

        // REPORTS
        if (page === "reports") {
          return {
            name: page,
            components: [
              {
                type: "chart",
                label: "Health Reports",
              },
            ],
          };
        }

        // STUDENTS
        if (page === "students") {
          return {
            name: page,
            components: [
              {
                type: "table",
                label: "Students",
              },
              {
                type: "button",
                label: "Add Student",
              },
            ],
          };
        }

        // TEACHERS
        if (page === "teachers") {
          return {
            name: page,
            components: [
              {
                type: "table",
                label: "Teachers",
              },
            ],
          };
        }

        // ATTENDANCE
        if (page === "attendance") {
          return {
            name: page,
            components: [
              {
                type: "table",
                label: "Attendance",
              },
            ],
          };
        }

        // APPOINTMENTS
        if (page === "appointments") {
          return {
            name: page,
            components: [
              {
                type: "table",
                label: "Appointments",
              },
            ],
          };
        }

        // DEFAULT
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