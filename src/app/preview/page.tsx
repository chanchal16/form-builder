"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "@/contexts/FormContext";
import { QuestionType } from "@/types/form";
import { Button } from "@/components/Button";

const Preview = () => {
  const { state, isPublished } = useFormContext();
  const router = useRouter();
  const renderFormField = (question: {
    id: string;
    type: QuestionType;
    options?: string[];
  }) => {
    switch (question.type) {
      case "short":
        return (
          <input
            type="text"
            className="h-8 w-full outline-none rounded-lg py-1.5 px-2 border border-gray-200"
            readOnly
          />
        );
      case "long":
        return (
          <textarea
            className="h-20 w-full outline-none resize-none rounded-lg py-1.5 px-2 border border-gray-200"
            rows={3}
            readOnly
          ></textarea>
        );
      case "select":
        return (
          <div className=" flex flex-col gap-4 mt-3">
            {question.options?.map((option, index) => (
              <label key={index} className=" flex gap-1 items-center">
                <input
                  type="radio"
                  readOnly
                  width={18}
                  height={18}
                  name={`question-${question.id}`}
                  //   className="w-8 h-4"
                />
                <p className="text-sm font-medium">{option}</p>
              </label>
            ))}
          </div>
        );
      case "url":
        return (
          <input
            type="url"
            readOnly
            className="h-8 w-full outline-none rounded-lg py-1.5 px-2 border border-gray-200"
          />
        );
      case "number":
        return (
          <input
            type="number"
            readOnly
            className="h-8 w-full outline-none rounded-lg py-1.5 px-2 border border-gray-200"
          />
        );
      default:
        return null;
    }
  };

  const handleForm = () => {
    router.push("/form");
  };

  return (
    <div className="w-full lg:w-[640px] flex flex-col h-screen text-gray-1k border border-gray-200 mx-auto">
      <div className="w-full flex lg:w-[640px] h-14 border-b border-gray-200 justify-between items-center px-6">
        <h3 className="text-base font-semibold ">{state.title}</h3>
        <Button variant="primary" onClick={() => router.push("/")}>
          Exit Preview
        </Button>
      </div>
      <div className="p-6 flex flex-col gap-10">
        <div className=" flex flex-col gap-8">
          {!!state.questions &&
            state.questions.map((question) => (
              <div
                key={question.id}
                className="border border-gray-200 flex flex-col gap-1 p-4 rounded-2xl"
              >
                <h4 className="text-sm font-semibold">{question.text}</h4>
                {renderFormField(question)}
              </div>
            ))}
        </div>
        {isPublished && (
          <Button
            variant="primary"
            className="max-w-max py-1.5 px-4 mx-auto justify-end"
            onClick={handleForm}
          >
            Fill Form
          </Button>
        )}
      </div>
    </div>
  );
};
export default Preview;