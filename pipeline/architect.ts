export function generateArchitecture(intent: any) {
  const pages: string[] = [];
  const entities: string[] = [];

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
  if (
    intent.appType === "ecommerce"
  ) {
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

  return {
    appType: intent.appType,
    pages,
    entities,
    roles: intent.roles,
  };
}