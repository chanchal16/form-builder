"use client";
import { CreateForm } from "@/app/create/page";
import React from "react";
import { Button } from "./Button";
import { DraftIcon, TickMark, UpArrowIcon } from "./Icon";
import { FormProvider, useFormContext } from "@/contexts/FormContext";

const EmptyFormContent = () => {
  const { state, dispatch } = useFormContext();
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_FORM_NAME", payload: e.target.value });
  };
  const isDisabled = !state.questions.length;

  return (
    <div className="max-w-[640px] flex flex-col h-screen border border-gray-200 mx-auto">
      <div className="flex max-w-[640px] h-14 border-b border-gray-200 justify-between items-center px-2">
        <input
          type="text"
          placeholder="Untitled form"
          className="p-2 border-none"
          onChange={changeName}
          value={state.title}
        />
        <Button
          className={`pl-4 pr-[14px] gap-1 ${
            isDisabled ? "text-gray-400" : "text-gray-1k"
          } `}
          variant="default"
          disabled={true}
        >
          Preview <UpArrowIcon stroke="#959DA5" />
        </Button>
      </div>
      <div className="flex-1 flex flex-col items-center gap-4 justify-center">
        {!state.questions.length && (
          <p className="text-xl text-gray-500">
            Your form is waiting. Add your first question.
          </p>
        )}
        <CreateForm />
      </div>

      <div className="flex justify-between border-t border-gray-200 py-4 px-6 bg-gray-50">
        <Button
          disabled={isDisabled}
          className={`flex items-center gap-1 ${
            isDisabled ? "opacity-50" : "opacity-100"
          }`}
          variant="default"
        >
          <DraftIcon />
          Save as Draft
        </Button>
        <Button
          disabled={isDisabled}
          className={`flex items-center gap-1 ${
            isDisabled ? "opacity-50" : "opacity-100"
          }`}
          variant="primary"
        >
          <TickMark />
          Publish Form
        </Button>
      </div>
    </div>
  );
};

export const EmptyForm = () => {
  return (
    <FormProvider>
      <EmptyFormContent />
    </FormProvider>
  );
};