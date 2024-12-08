import { ReactNode } from "react";

export type QuestionType = "short" | "long" | "select" | "number" | "url";

export interface Question {
  id: string;
  type: QuestionType;
  label?: string;
  required?: boolean;
  options?: string[];
}

export interface FormState {
  title?: string;
  questions: Question[];
}

export type IDropdownMenuItem = {
  type: QuestionType;
  label: string;
  icon: ReactNode;
};