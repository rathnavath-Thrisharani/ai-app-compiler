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

  if (
    lower.includes("payment") ||
    lower.includes("payments")
  ) {
    features.push("payments");
  }

  // Calculator
  if (
    lower.includes("calculator")
  ) {
    features.push("calculator");
  }

  // Health
  if (
    lower.includes("health")
  ) {
    features.push("monitoring");
  }

  // School
  if (
    lower.includes("student")
  ) {
    features.push("students");
  }

  // Hospital
  if (
    lower.includes("patient")
  ) {
    features.push("patients");
  }

  const roles: string[] = [];

  if (lower.includes("admin")) {
    roles.push("admin");
  }

  if (
    lower.includes("doctor")
  ) {
    roles.push("doctor");
  }

  if (
    lower.includes("teacher")
  ) {
    roles.push("teacher");
  }

  if (roles.length === 0) {
    roles.push("user");
  }

  return {
    appType: detectAppType(lower),
    features,
    roles,
  };
}

function detectAppType(text: string) {
  if (text.includes("crm")) {
    return "crm";
  }

  if (
    text.includes("ecommerce") ||
    text.includes("e-commerce")
  ) {
    return "ecommerce";
  }

  if (
    text.includes("calculator")
  ) {
    return "calculator";
  }

  if (
    text.includes("health")
  ) {
    return "health";
  }

  if (
    text.includes("hospital")
  ) {
    return "hospital";
  }

  if (
    text.includes("school")
  ) {
    return "school";
  }

  if (
    text.includes("inventory")
  ) {
    return "inventory";
  }

  return "generic";
}