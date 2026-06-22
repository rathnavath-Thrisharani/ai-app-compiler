export function extractIntent(prompt: string) {
  const lower = prompt.toLowerCase();

  const features: string[] = [];

  if (lower.includes("login")) {
    features.push("authentication");
  }

  if (lower.includes("contacts")) {
    features.push("contacts");
  }

  if (lower.includes("dashboard")) {
    features.push("dashboard");
  }

  if (lower.includes("analytics")) {
    features.push("analytics");
  }

  if (lower.includes("payment")) {
    features.push("payments");
  }

  const roles: string[] = [];

  if (lower.includes("admin")) {
    roles.push("admin");
  }

  roles.push("user");

  return {
    appType: detectAppType(lower),
    features,
    roles,
  };
}

function detectAppType(text: string) {
  if (text.includes("crm")) return "crm";

  if (text.includes("school")) return "school";

  if (text.includes("inventory")) return "inventory";

  return "generic";
}