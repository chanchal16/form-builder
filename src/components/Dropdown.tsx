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
import { Button } from "./Button";

export const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className="pl-[14px] pr-4 gap-1 outline-none">
          <PlusIcon width="20" height="20" />
          Add Questions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] text-gray-1k rounded-2xl p-1 border border-gray-200">
        <DropdownMenuLabel className="bg-gray-50 py-2 px-4 rounded-lg text-gray-500 text-xs font-semibold tracking-[.04em]">
          INPUT TYPES
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-2 rounded-xl gap-2">
          <ShortAnsIcon className="!w-[20px] !h-[20px]" />
          <span className="text-sm font-medium">Short Answer</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-2 rounded-xl gap-2">
          <LongAnsIcon className="!w-[20px] !h-[20px]" />
          <span className="text-sm font-medium">Long answer</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-2 rounded-xl gap-2">
          <SelectIcon className="!w-[20px] !h-[20px]" />
          <span className="text-sm font-medium">Single select</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-2 rounded-xl gap-2">
          <UrlIcon className="!w-[20px] !h-[20px]" />
          <span className="text-sm font-medium">URL</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-2 rounded-xl gap-2">
          <HashIcon className="!w-[20px] !h-[20px]" />
          <span className="text-sm font-medium">Number</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
