"use client";
import { Button } from "@/components/Button";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useFormContext } from "@/contexts/FormContext";

const Success = () => {
  const { dispatch } = useFormContext();
  const router = useRouter();
  const handleBack = () => {
    dispatch({ type: "RESET_FORM" });
    router.push("/");
  };
  return (
    <div className="flex h-screen flex-col justify-center gap-7 items-center p-6">
      <Image src={"/success.svg"} width={300} height={250} alt="success" />
      <h1 className="text-3xl">Your Form was Submitted Successfully!!</h1>
      <Button variant="primary" onClick={handleBack}>
        Go Back Home
      </Button>
    </div>
  );
};
export default Success;