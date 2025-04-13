export interface City {
  name: string;
  country: string;
  clues: string[];
  funFacts: string[];
  trivia: string[];
}

export interface User {
  username: string;
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
}

export interface GameState {
  currentCity: City | null;
  selectedAnswer: string | null;
  isAnswered: boolean;
  isCorrect: boolean;
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
}

export interface ChallengeLink {
  username: string;
  score: number;
  link: string;
} 