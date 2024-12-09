// context/FormContext.tsx
"use client";
import { QuestionType, FormState, Question, SavedFormData } from "@/types/form";
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useMemo,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

type Action =
  | { type: "SET_FORM_NAME"; payload: string }
  | { type: "ADD_QUESTION"; payload: QuestionType }
  | { type: "REMOVE_QUESTION"; payload: string }
  | { type: "ADD_OPTION"; payload: string }
  | {
      type: "UPDATE_OPTION";
      payload: { id: string; index: number; value: string };
    }
  | {
      type: "UPDATE_QUESTION_TYPE";
      payload: { id: string; type: QuestionType };
    }
  | {
      type: "UPDATE_QUESTION_TEXT";
      payload: { id: string; text: string };
    }
  | {
      type: "UPDATE_HELPER_TEXT";
      payload: { id: string; helpText: string };
    }
  | { type: "SAVE_FORM"; payload: SavedFormData }
  | { type: "RESET_FORM" }
  | { type: "SET_SAVED_FORMS"; payload: SavedFormData[] };

const initialState: FormState = {
  title: "",
  questions: [],
  savedForms: [],
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_FORM_NAME":
      return { ...state, title: action.payload };

    case "UPDATE_QUESTION_TEXT":
      return {
        ...state,
        questions: state.questions.map((question) => {
          if (question.id === action.payload.id) {
            return {
              ...question,
              text: action.payload.text,
            };
          }
          return question;
        }),
      };

    case "UPDATE_HELPER_TEXT":
      return {
        ...state,
        questions: state.questions.map((question) => {
          if (question.id === action.payload.id) {
            return {
              ...question,
              helperText: action.payload.helpText,
            };
          }
          return question;
        }),
      };

    case "ADD_QUESTION":
      const newQuestion: Question = { id: uuidv4(), type: action.payload };
      if (action.payload === "select") {
        newQuestion.options = ["", ""];
      }
      return { ...state, questions: [...state.questions, newQuestion] };

    case "REMOVE_QUESTION":
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.payload
        ),
      };

    case "ADD_OPTION":
      return {
        ...state,
        questions: state.questions.map((q) =>
          q.id === action.payload
            ? { ...q, options: [...(q.options || []), ""] }
            : q
        ),
      };

    case "UPDATE_OPTION":
      return {
        ...state,
        questions: state.questions.map((q) =>
          q.id === action.payload.id
            ? {
                ...q,
                options: q.options?.map((opt, i) =>
                  i === action.payload.index ? action.payload.value : opt
                ),
              }
            : q
        ),
      };
    case "UPDATE_QUESTION_TYPE":
      return {
        ...state,
        questions: state.questions.map((q) =>
          q.id === action.payload.id
            ? action.payload.type === "select"
              ? { ...q, type: action.payload.type, options: ["", ""] }
              : { ...q, type: action.payload.type }
            : q
        ),
      };

    case "SAVE_FORM":
      return {
        ...state,
        savedForms: [...state.savedForms, action.payload],
      };
    case "RESET_FORM":
      return {
        ...state,
        title: "",
        questions: [],
      };
    case "SET_SAVED_FORMS":
      return { ...state, savedForms: action.payload };
    default:
      return state;
  }
};

const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<Action>;
  saveFormToLocalStorage: () => void;
  isPublished: boolean;
}>({
  state: initialState,
  dispatch: () => {},
  saveFormToLocalStorage: () => {},
  isPublished: false,
});

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const saveFormToLocalStorage = () => {
    const formData: SavedFormData = {
      id: uuidv4(),
      title: state.title,
      questions: state.questions,
      createdAt: new Date().toISOString(),
    };

    try {
      const existingForms = JSON.parse(
        localStorage.getItem("savedForms") ?? "[]"
      );
      const updatedForms = [...existingForms, formData];
      localStorage.setItem("savedForms", JSON.stringify(updatedForms));
      dispatch({ type: "SET_SAVED_FORMS", payload: updatedForms });
      dispatch({ type: "SAVE_FORM", payload: formData });
      setIsPublished((prev: boolean) => !prev);
    } catch (error) {
      console.error("Error saving form to local storage:", error);
    }
  };
  const contextValue = useMemo(
    () => ({ state, dispatch, saveFormToLocalStorage, isPublished }),
    [state, dispatch]
  );
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);