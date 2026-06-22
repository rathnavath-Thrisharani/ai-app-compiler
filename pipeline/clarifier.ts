export function checkAmbiguity(prompt: string) {
  const lower = prompt.toLowerCase();

  const vagueKeywords = [
    "build an app",
    "build something",
    "make an application",
    "create software",
    "school system",
  ];

  for (const keyword of vagueKeywords) {
    if (lower.includes(keyword)) {
      return {
        needsClarification: true,
        questions: [
          "What type of application do you want?",
          "Who are the users?",
          "What are the main features?",
        ],
      };
    }
  }

  return {
    needsClarification: false,
    questions: [],
  };
}