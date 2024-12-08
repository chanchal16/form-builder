import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  HashIcon,
  LongAnsIcon,
  PlusIcon,
  SelectIcon,
  ShortAnsIcon,
  UrlIcon,
} from "@/components/Icon";
import { useFormContext } from "@/contexts/FormContext";
import { IDropdownMenuItem, QuestionType } from "@/types/form";

const menuItems: IDropdownMenuItem[] = [
  { type: "short", label: "Short Answer", icon: <ShortAnsIcon /> },
  { type: "long", label: "Long Answer", icon: <LongAnsIcon /> },
  { type: "select", label: "Single Select", icon: <SelectIcon /> },
  { type: "url", label: "URL", icon: <UrlIcon /> },
  { type: "number", label: "Number", icon: <HashIcon /> },
];

export const Dropdown = () => {
  const { state, dispatch } = useFormContext();
  const selectedTypes = state.questions.map((q) => q.type);
  const isDisabled = (type: QuestionType) => selectedTypes.includes(type);

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
            placeholder="Short Answer"
            className="input-field"
          />
        );
      case "long":
        return (
          <textarea
            placeholder="Long Answer"
            className="input-field"
            rows={3}
          ></textarea>
        );
      case "select":
        return (
          <div>
            {question.options?.map((option, index) => (
              <label key={index} className="block">
                <input type="radio" name={`question-${question.id}`} /> {option}
              </label>
            ))}
          </div>
        );
      case "url":
        return <input type="url" placeholder="URL" className="input-field" />;
      case "number":
        return (
          <input type="number" placeholder="Number" className="input-field" />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {!!state.questions && (
        <div className="space-y-4">
          {state.questions.map((question) => (
            <div
              key={question.id}
              className="border border-gray-300 p-4 rounded"
            >
              <h2 className="text-sm font-semibold mb-2">
                Question Type: {question.type}
              </h2>
              {renderField(question)}
              <button
                className="text-red-500 mt-2"
                onClick={() =>
                  dispatch({ type: "REMOVE_QUESTION", payload: question.id })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger className="pl-[14px] pr-4 gap-1 text-sm font-semibold inline-flex rounded-xl py-1.5 px-4 outline-none border border-gray-200 text-gray-1k shadow-5 hover:shadow-10">
          <PlusIcon width="20" height="20" />
          Add Questions
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px] text-gray-1k rounded-2xl p-1 border border-gray-200">
          <DropdownMenuLabel className="bg-gray-50 py-2 px-4 rounded-lg text-gray-500 text-xs font-semibold tracking-[.04em]">
            INPUT TYPES
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menuItems.map((item) => (
            <DropdownMenuItem
              key={item.type}
              className={`p-2 rounded-xl gap-2 ${
                isDisabled(item.type)
                  ? "cursor-not-allowed text-gray-400"
                  : "cursor-pointer"
              }`}
              onClick={() =>
                !isDisabled(item.type) &&
                dispatch({ type: "ADD_QUESTION", payload: item.type })
              }
              disabled={isDisabled(item.type)}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};