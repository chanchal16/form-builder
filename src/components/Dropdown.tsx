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
import { IDropdownMenuItem } from "@/types/form";

export const menuItems: IDropdownMenuItem[] = [
  { type: "short", label: "Short Answer", icon: <ShortAnsIcon /> },
  { type: "long", label: "Long Answer", icon: <LongAnsIcon /> },
  { type: "select", label: "Single Select", icon: <SelectIcon /> },
  { type: "url", label: "URL", icon: <UrlIcon /> },
  { type: "number", label: "Number", icon: <HashIcon /> },
];

export const Dropdown = () => {
  const { dispatch } = useFormContext();
  return (
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
            className={`p-2 rounded-xl cursor-pointer gap-2`}
            onClick={() =>
              dispatch({ type: "ADD_QUESTION", payload: item.type })
            }
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};