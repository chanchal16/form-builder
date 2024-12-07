import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { UpArrowIcon } from "@/components/Icon";

export default function Home() {
  return (
    <div className=" p-4">
      <div className="max-w-[640px] flex flex-col h-screen border border-gray-200 mx-auto">
        <div className="flex max-w-[640px] h-14 border-b border-gray-200 justify-between items-center px-2">
          <input
            type="text"
            placeholder="Untitled form"
            className="p-2 border-none"
          />
          <Button
            className="pl-4 pr-[14px] gap-1 !text-gray-400"
            variant="default"
            disabled={true}
          >
            Preview <UpArrowIcon stroke="#959DA5" />
          </Button>
        </div>

        <div className="flex-1 flex flex-col items-center gap-4 justify-center ">
          <p className="text-xl text-gray-500">
            Your form is waiting. Add your first question.
          </p>
          <Dropdown />
        </div>
      </div>
    </div>
  );
}