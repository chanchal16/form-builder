import React from "react";
import { useFormContext } from "@/contexts/FormContext";
import { Question, QuestionType } from "@/types/form";
import { PlusIcon } from "./Icon";

export const InputFields = ({ question }: any) => {
  const { dispatch } = useFormContext();
  const handleOptionChange = (
    question: Question,
    index: number,
    value: string
  ) => {
    dispatch({
      type: "UPDATE_OPTION",
      payload: { id: question.id, index, value },
    });
  };

  const renderField = (question: {
    id: string;
    type: QuestionType;
    options?: string[];
  }) => {
    switch (question.type) {
      case "short":
        return (
          <input
            type="text"
            className="h-8 w-full rounded-lg py-1.5 px-2 bg-gray-100 border border-gray-200"
            disabled
          />
        );
      case "long":
        return (
          <textarea
            className="h-20 w-full resize-none rounded-lg py-1.5 px-2 bg-gray-100 border border-gray-200"
            rows={3}
            disabled
          ></textarea>
        );
      case "select":
        return (
          <div className=" flex flex-col gap-2">
            {question.options?.map((option, index) => (
              <label key={index} className=" flex gap-2 items-center">
                <input
                  type="radio"
                  disabled
                  name={`question-${question.id}`}
                  className="w-8 h-4"
                />
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  className="w-full h-8 border border-gray-300 rounded-md p-2 outline-none"
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(question, index, e.target.value)
                  }
                />
                {index === question?.options?.length - 1 && (
                  <button
                    className="flex items-center text-gray-1k hover:text-gray-700"
                    onClick={(e) =>
                      dispatch({ type: "ADD_OPTION", payload: question.id })
                    }
                  >
                    <PlusIcon className="w-6 h-6 mr-2" />
                  </button>
                )}
              </label>
            ))}
          </div>
        );
      case "url":
        return (
          <input
            type="url"
            disabled
            className="h-8 w-full rounded-lg py-1.5 px-2 bg-gray-100 border border-gray-200"
          />
        );
      case "number":
        return (
          <input
            type="number"
            disabled
            className="h-8 w-full rounded-lg py-1.5 px-2 bg-gray-100 border border-gray-200"
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderField(question)}</div>;
};
