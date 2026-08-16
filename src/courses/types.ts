export type Select1Of3 = {
  type: "SELECT_1_OF_3";
  question: string;
  answers: { icon: any | null; name: string }[];
  correctAnswer: number;
};

export type WriteInEnglish = {
  type: "WRITE_IN_ENGLISH";
  question: string;
  answerTiles: string[];
  correctAnswer: number[];
};

export type Problem = Select1Of3 | WriteInEnglish;

export type Lesson = {
  id: string;
  title: string;
  estimatedTime?: string;
  character?: string;
  content?: string; // markdown or structured content
};

export type Section = {
  id: string;
  title: string;
  order?: number;
  lessons?: Lesson[];
};

export type Unit = {
  id: string;
  title: string;
  order?: number;
  sections?: Section[];
};

export type Course = {
  slug: string;
  title: string;
  description?: string;
  language?: string;
  units?: Unit[];
  lessonProblems?: Problem[]; // optional quick access
};
