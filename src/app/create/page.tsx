"use client";
import { Dropdown } from "@/components/Dropdown";
import { QuestionList } from "@/components/QuestionList";

const CreateForm = () => {
  return (
    <>
      <QuestionList />
      <div className="mx-auto mt-6 py-2">
        <Dropdown />
      </div>
    </>
  );
};
export default CreateForm