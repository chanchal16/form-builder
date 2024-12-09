"use client";
import  CreateForm  from "@/app/create/page";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { DraftIcon, TickMark, UpArrowIcon } from "./Icon";
import { useFormContext } from "@/contexts/FormContext";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const EmptyFormContent = () => {
  const { state, dispatch, saveFormToLocalStorage } = useFormContext();
  const router = useRouter();
  const { toast } = useToast();

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_FORM_NAME", payload: e.target.value });
  };
  const isDisabled = !state.questions.length;

  const handlePublishForm = () => {
    saveFormToLocalStorage();
    router.push("/preview");
    toast({
      description: "Form Published Successfully!!",
    });
  };

  const handlePreview = () => {
    router.push("/preview");
  };

  return (
    <div className="w-full lg:w-[640px] flex flex-col h-screen border border-gray-200 mx-auto">
      <div className="w-full flex lg:w-[640px] h-14 border-b border-gray-200 justify-between items-center px-4 sm:px-6">
        <input
          type="text"
          placeholder="Untitled form"
          className="p-2 border-none outline-none"
          onChange={changeName}
          value={state.title}
        />
        <Button
          className={`pl-4 pr-[14px] gap-1 ${
            isDisabled ? "text-gray-400" : "text-gray-1k"
          } `}
          variant="default"
          disabled={isDisabled}
          onClick={handlePreview}
        >
          Preview <UpArrowIcon stroke="#959DA5" />
        </Button>
      </div>
      <div
        className={` flex-1 flex flex-col ${
          isDisabled ? "items-center gap-4 justify-center" : "px-6"
        }`}
      >
        {!state.questions.length && (
          <>
            <Image src={"/no-data.svg"} alt="empty" width={200} height={200} />
            <p className="text-xl text-center text-gray-500">
              Your form is waiting. Add your first question.
            </p>
          </>
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
          onClick={handlePublishForm}
        >
          <TickMark />
          Publish Form
        </Button>
      </div>
    </div>
  );
};
export const EmptyForm = () => {
  return <EmptyFormContent />;
};
