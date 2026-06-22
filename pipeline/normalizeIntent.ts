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

        return lower;
      }
    );

  const normalizedRoles =
    intent.roles.map(
      (role: string) =>
        role.toLowerCase()
    );

    console.log(
  "Normalized Features:",
  normalizedFeatures
);
if (
  !intent.roles ||
  intent.roles.length === 0
) {
  intent.roles = ["user"];
}
  return {
    ...intent,
    features: normalizedFeatures,
    roles: normalizedRoles,
  };
}