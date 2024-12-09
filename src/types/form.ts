import { ReactNode } from "react";

export type QuestionType = "short" | "long" | "select" | "number" | "url";

export interface Question {
  id: string;
  type: QuestionType;
  text?: string;
  helperText?: string;
  required?: boolean;
  options?: string[];
}

export type ValidationError = {
  id: string;
  message: string;
};

export type SavedFormData = {
  id: string;
  title: string;
  questions: Question[];
  createdAt: string;
};

export type FormState = {
  title: string;
  questions: Question[];
  savedForms: SavedFormData[];
};

export type IDropdownMenuItem = {
  type: QuestionType;
  label: string;
  icon: ReactNode;
};