export function generateArchitecture(intent: any) {
  const pages: string[] = [];
  const entities: string[] = [];

  // CRM Features
  if (intent.features.includes("authentication")) {
    pages.push("login");
    entities.push("users");
  }

  if (intent.features.includes("dashboard")) {
    pages.push("dashboard");
  }

  if (intent.features.includes("contacts")) {
    pages.push("contacts");
    entities.push("contacts");
  }

  if (intent.features.includes("payments")) {
    pages.push("billing");
    entities.push("subscriptions");
  }

  // Ecommerce Support
  if (intent.appType === "ecommerce") {
    pages.push(
      "products",
      "cart",
      "checkout",
      "orders",
      "admin"
    );

    entities.push(
      "products",
      "orders",
      "payments",
      "users"
    );
  }

  // Calculator Support
  if (intent.appType === "calculator") {
    pages.push("calculator");

    entities.push(
      "calculations"
    );
  }

  // Health Monitoring System
  if (intent.appType === "health") {
    pages.push(
      "dashboard",
      "patients",
      "reports"
    );

    entities.push(
      "patients",
      "health_records"
    );
  }

  // School Management System
  if (intent.appType === "school") {
    pages.push(
      "students",
      "teachers",
      "attendance"
    );

    entities.push(
      "students",
      "teachers"
    );
  }

  // Hospital Management System
  if (intent.appType === "hospital") {
    pages.push(
      "patients",
      "appointments",
      "billing"
    );

    entities.push(
      "patients",
      "doctors",
      "appointments"
    );
  }

  return {
    appType: intent.appType,
    pages,
    entities,
    roles: intent.roles,
  };
}