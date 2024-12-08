// context/FormContext.tsx
"use client";
import { QuestionType, FormState, Question } from "@/types/form";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

type Action =
  | { type: "SET_FORM_NAME"; payload: string }
  | { type: "ADD_QUESTION"; payload: QuestionType }
  | { type: "REMOVE_QUESTION"; payload: string };

const initialState: FormState = {
  title: "",
  questions: [],
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_FORM_NAME":
      return { ...state, title: action.payload };

    case "ADD_QUESTION":
      const newQuestion: Question = { id: uuidv4(), type: action.payload };
      if (action.payload === "select") {
        newQuestion.options = ["Option 1", "Option 2"];
      }
      return { ...state, questions: [...state.questions, newQuestion] };

    case "REMOVE_QUESTION":
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);