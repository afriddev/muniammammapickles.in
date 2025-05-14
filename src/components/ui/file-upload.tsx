/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from "@/components/ui/input";
import { LuAsterisk } from "react-icons/lu";

interface FileUplaodInterface {
  mandatory?: boolean;
  onSelectFile: (e: File) => void;
}

export default function FileUplaod({
  mandatory,
  onSelectFile,
}: FileUplaodInterface) {
  return (
    <div>
      <div className=" flex flex-col gap-2">
        <div className="space-y-2">
          <label htmlFor="file" className="font-medium mb-1  flex items-center">
            Select image{" "}
            {mandatory && (
              <span className="w-3 h-3 ">
                <LuAsterisk className="w-3  h-3  text-destructive" />
              </span>
            )}
          </label>
          <Input
            id="file"
            type="file"
            placeholder="File"
            accept="image/*"
            className="cursor-pointer "
            onChange={(e) => {
              const file = (e as any)?.target?.files[0];
              onSelectFile(file);
            }}
          />
        </div>
      </div>
    </div>
  );
}
