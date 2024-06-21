import { LucideCheck, LucideDollarSign, LucideOption } from "lucide-react";
import React from "react";

type Props = {};

export const Pricing = (props: Props) => {
  return (
    <div className="py-8 px-5 bg-amber-50 ">
      <div className="flex flex-col items-center justify-center gap-5 pt-10">
        <span className="text-xl">Pricing</span>
        <span className="text-3xl font-bold">ChooseYour Plan</span>
        <span className="text-xl">
          Select the perfect plan for your coding needs
        </span>
      </div>
      <div className="grid grid-cols-3 gap-20 px-10 py-20">
        <div className=" bg-amber-100 p-10">
          <div className="flex flex-col items-start justify-start gap-3 text-xl">
            <span className="font-bold">Free</span>
            <span>Access basic code editing features for free</span>
          </div>
          <div className="flex  items-center gap-1 py-20">
            <LucideDollarSign />
            <span className="text-6xl">0</span>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Syntax highlighting</span>
            </p>
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Basic code completion</span>
            </p>
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Multiple themes</span>
            </p>
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Limited storage</span>
            </p>
          </div>
          <div className="border border-black font-bold outline-none mt-10 p-2 text-center cursor-pointer hover:opacity-70 ">
            continue with free
          </div>
        </div>

        <div className=" bg-amber-100 p-10">
          <div className="flex flex-col items-start justify-start gap-3 text-xl">
            <span className="font-bold">Free</span>
            <span>Access basic code editing features for free</span>
          </div>
          <div className="flex  items-center gap-1 py-20">
            <LucideDollarSign />
            <span className="text-6xl">0</span>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Syntax highlighting</span>
            </p>
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Basic code completion</span>
            </p>
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Multiple themes</span>
            </p>
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Limited storage</span>
            </p>
          </div>
          <div className="border border-black font-bold outline-none mt-10 p-2 text-center cursor-pointer hover:opacity-70 ">
            continue with free
          </div>
        </div>

        <div className="p-10 bg-amber-100">
          <div className="flex flex-col items-start justify-start gap-3 text-xl">
            <span className="font-bold">Free</span>
            <span>Access basic code editing features for free</span>
          </div>
          <div className="flex  items-center gap-1 py-20">
            <LucideDollarSign />
            <span className="text-6xl">0</span>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Syntax highlighting</span>
            </p>
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Basic code completion</span>
            </p>
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Multiple themes</span>
            </p>
            <p className="flex items-center gap-2">
              <LucideCheck />
              <span>Limited storage</span>
            </p>
          </div>
          <div className="border border-black font-bold outline-none mt-10 p-2 text-center cursor-pointer hover:opacity-70 ">
            continue with free
          </div>
        </div>
      </div>
    </div>
  );
};
