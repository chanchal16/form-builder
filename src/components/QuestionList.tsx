import React from "react";
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { DragIcon } from "./Icon";
import { useFormContext } from "@/contexts/FormContext";
import { Question, QuestionType } from "@/types/form";
import { menuItems } from "./Dropdown";
import { InputFields } from "./InputFields";
import { Trash } from "lucide-react";

export const QuestionList = () => {
  const { state, dispatch } = useFormContext();
  const currentSelected = (ques: Question) => {
    return menuItems.find((item) => item.type === ques.type)?.icon;
  };

  const newMenuItems = menuItems.map((item) => ({
    ...item,
    icon: React.cloneElement(item.icon, {
      width: 16,
      height: 16,
      stroke: "#0D0D0D",
    }),
  }));

  return (
    <>
      {!!state.questions && (
        <div className="w-full space-y-4 pt-6">
          {state.questions.map((question) => (
            <div
              key={question.id}
              className="border border-gray-200 p-4 rounded-2xl"
            >
              <div className="flex justify-between gap-2">
                {/* ques */}
                <div className="flex flex-col gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="write a question"
                    className="text-sm text-wrap outline-none font-semibold"
                    required
                    value={question.text ?? ""}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_QUESTION_TEXT",
                        payload: { id: question.id, text: e.target.value },
                      })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Write a help text or caption (leave empty if not needed)."
                    className="text-xs text-wrap outline-none"
                    value={question.helperText ?? ""}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_HELPER_TEXT",
                        payload: { id: question.id, helpText: e.target.value },
                      })
                    }
                  />
                </div>
                {/* btns */}
                <div className="flex items-start gap-2">
                  <Select
                    onValueChange={(value) =>
                      dispatch({
                        type: "UPDATE_QUESTION_TYPE",
                        payload: {
                          id: question.id,
                          type: value as QuestionType,
                        },
                      })
                    }
                  >
                    <SelectTrigger className="h-5 w-9 border-none outline-none !focus:ring-offset-transparent p-0">
                      <SelectIcon>{currentSelected(question)}</SelectIcon>
                    </SelectTrigger>
                    <SelectContent className="">
                      {newMenuItems.map((item) => (
                        <SelectItem
                          key={item.type}
                          value={item.type}
                          className="!flex !flex-row gap-1"
                        >
                          <span className="w-4 h-4">
                            {item.icon} {item.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <button
                    className=""
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_QUESTION",
                        payload: question.id,
                      })
                    }
                  >
                    <Trash size={18} color="#959DA5" />
                  </button>

                  <DragIcon width={24} height={24} stroke="#0D0D0D" />
                </div>
              </div>
              <InputFields question={question} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};