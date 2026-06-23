export function normalizeIntent(intent: any) {
  const normalizedFeatures =
    intent.features.map(
      (feature: string) => {
        const lower =
          feature.toLowerCase();

        if (lower.includes("contact")) {
          return "contacts";
        }

        if (
          lower.includes("login") ||
          lower.includes("signin") ||
          lower.includes("signup")
        ) {
          return "authentication";
        }

        if (
          lower.includes("analytic")
        ) {
          return "analytics";
        }

        if (
          lower.includes("payment")
        ) {
          return "payments";
        }

        // NEW
        if (
          lower.includes("product")
        ) {
          return "products";
        }

        // NEW
        if (
          lower.includes("order")
        ) {
          return "orders";
        }

        // NEW
        if (
          lower.includes("admin")
        ) {
          return "admin_panel";
        }

        return lower;
      }
    );

  let normalizedRoles =
    intent.roles?.map(
      (role: string) =>
        role.toLowerCase()
    ) || [];

  if (
    normalizedRoles.length === 0
  ) {
    normalizedRoles = ["user"];
  }

  console.log(
    "Normalized Features:",
    normalizedFeatures
  );

  return {
    ...intent,
    features: normalizedFeatures,
    roles: normalizedRoles,
  };
}