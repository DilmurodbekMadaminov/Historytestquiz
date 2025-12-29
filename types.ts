
export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string; // id of the option (a, b, c, d)
}

export type QuizStatus = 'START' | 'SELECT_VARIANT' | 'IN_PROGRESS' | 'FINISHED';

export interface QuizRange {
  start: number;
  end: number;
  label: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: Record<number, string>;
  status: QuizStatus;
  score: number;
  selectedRange: QuizRange | null;
}
