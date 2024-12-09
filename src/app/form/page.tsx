"use client";
import { Button } from "@/components/Button";
import { useFormContext } from "@/contexts/FormContext";
import { toast } from "@/hooks/use-toast";
import { QuestionType } from "@/types/form";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const { state } = useFormContext();
  const [responses, setResponses] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleInputChange = (id: string, value: string) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    // Validate all questions are answered
    if (Object.keys(responses).length !== state.questions.length) {
      console.error("Please complete all questions before submitting.");
      return;
    }
    const formDataToSave = {
      id: uuidv4(),
      title: state.title,
      questions: state.questions.map((question) => ({
        ...question,
        response: responses[question.id], // Add user's response to each question
      })),
    };

    try {
      const existingSubmissions = JSON.parse(
        localStorage.getItem("submittedForms") ?? "[]"
      );
      const updatedSubmissions = [...existingSubmissions, formDataToSave];
      localStorage.setItem(
        "submittedForms",
        JSON.stringify(updatedSubmissions)
      );

      router.push("/success");
    } catch (error) {
      console.error("Error saving form data:", error);
      toast({
        title: "Error saving form data",
        description: "Please try again",
      });
    }
  };

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
            value={responses[question.id] || ""}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            className="h-8 w-full outline-none rounded-lg py-1.5 px-2 border border-gray-200"
          />
        );
      case "long":
        return (
          <textarea
            className="h-20 w-full outline-none resize-none rounded-lg py-1.5 px-2 border border-gray-200"
            rows={3}
            value={responses[question.id] || ""}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          ></textarea>
        );
      case "select":
        return (
          <div className=" flex flex-col gap-4 mt-3">
            {question.options?.map((option, index) => (
              <label key={index} className=" flex gap-1 items-center">
                <input
                  type="radio"
                  width={18}
                  height={18}
                  name={`question-${question.id}`}
                  value={option}
                  checked={responses[question.id] === option}
                  onChange={(e) =>
                    handleInputChange(question.id, e.target.value)
                  }
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
            value={responses[question.id] || ""}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            className="h-8 w-full outline-none rounded-lg py-1.5 px-2 border border-gray-200"
          />
        );
      case "number":
        return (
          <input
            type="number"
            value={responses[question.id] || ""}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            className="h-8 w-full outline-none rounded-lg py-1.5 px-2 border border-gray-200"
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="w-full lg:w-[640px] flex flex-col h-screen text-gray-1k border border-gray-200 mx-auto">
      <div className="w-full flex lg:w-[640px] h-14 border-b border-gray-200 justify-between items-center px-6">
        <h3 className="text-base font-semibold ">{state.title}</h3>
      </div>
      <div className="p-6 flex flex-col gap-10">
        <div className="flex flex-col gap-8">
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
        <div className="self-end">
          <Button
            variant="primary"
            onClick={handleSubmit}
            className=" py-1.5 px-4"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Form;