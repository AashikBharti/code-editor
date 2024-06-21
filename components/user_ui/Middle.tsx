import { LucideAward, LucideCuboid, LucideDice3 } from "lucide-react";
import React from "react";

type Props = {};

function Middle({}: Props) {
  return (
    <div className="bg-orange-500/80 py-8 px-5">
      <div className="flex flex-col items-center justify-center ">
        <span className="text-5xl">Powerful Features</span>
        <span>comes from powerful websites</span>
        <span className="pt-10 text-xl font-bold">
          Experience the capabilities of our code editor codespace
        </span>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 p-10 gap-5">
        <div className="h-32 flex gap-5  bg-orange-500/40 items-center px-10">
          <LucideDice3 size={40} />
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Real-time Collaboration</span>
            <span>Work together with your team in real-time</span>
          </div>
        </div>
        <div className="h-32 flex gap-5  bg-orange-500/40 items-center px-10">
          <LucideDice3 size={40} />
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Syntax Highlighting</span>
            <span>Code highlighting for better readability</span>
          </div>
        </div>
        <div className="h-32 flex gap-5  bg-orange-500/40 items-center px-10">
          <LucideDice3 size={40} />
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Version Control</span>
            <span>Easily manage and track changes to your code</span>
          </div>
        </div>
        <div className="h-32 flex gap-5  bg-orange-500/40 items-center px-10">
          <LucideDice3 size={40} />
          <div className="flex flex-col">
            <span className="text-2xl font-bold">
              Intelligent Code Completion
            </span>
            <span>Get suggestions and autocomplete while coding</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
