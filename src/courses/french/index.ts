import type { Problem } from "../courses/types";

// Lightweight French lesson problems exported as data. Icons are intentionally left null
// so the rendering components can supply local SVGs if desired.
export const lessonProblems: Problem[] = [
  {
    type: "SELECT_1_OF_3",
    question: `Which one of these is "the apple"?`,
    answers: [
      { icon: null, name: "la pomme" },
      { icon: null, name: "le garçon" },
      { icon: null, name: "la femme" },
    ],
    correctAnswer: 0,
  },
  {
    type: "WRITE_IN_ENGLISH",
    question: "Le garçon",
    answerTiles: ["femme", "lait", "eau", "je", "The", "boy"],
    correctAnswer: [4, 5],
  },
];

export default {
  slug: "french",
  title: "French",
  description: "French course module (TypeScript) — units, sections and lessonProblems.",
  language: "fr",
  lessonProblems,
} as const;
