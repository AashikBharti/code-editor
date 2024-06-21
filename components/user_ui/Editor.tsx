"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { LucideFile, LucideFileEdit, LucideFileX, LucideX } from "lucide-react";
import axios from "axios";

import { AiOutlineJavaScript, AiOutlinePython } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { randomUUID } from "crypto";

type Props = {};

type FileData = {
  name: string;
  content: string;
  language: string;
  extension: string;
  imageurl?: string;
};

export default function Editor({}: Props) {
  const [lines, setLines] = useState<number[]>([1]);
  const [solution, setSolution] = useState<string>("");
  const [files, setFiles] = useState<FileData[]>(() => {
    // Retrieve files from local storage or use a default value
    const savedFiles = localStorage.getItem("files");
    return savedFiles
      ? JSON.parse(savedFiles)
      : [{ name: "custom", content: "", language: "python", extension: ".py" }];
  });

  const [selectedFile, setSelectedFile] = useState<FileData>({
    name: "custom",
    content: "print('Hello world')",
    language: "python",
    extension: ".py",
  });

  const file = "custom";

  useEffect(() => {
    setLines(selectedFile.content.split("\n").map((_, i) => i + 1));
    localStorage.setItem("files", JSON.stringify(files));
  }, [selectedFile.content, files]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedFile({ ...selectedFile, content: event.target.value });
  };

  const executeCode = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: selectedFile.content,
          language: selectedFile.language,
        }),
      });

      const data = await res.json();
      setSolution(data.output);
    } catch (error) {
      console.log(error);
    }
  };

  const addFile = (event: any, file: FileData) => {
    event.preventDefault;
    setFiles([...files, file]);
  };

  return (
    <div className="relative bg-gradient-to-t from-black/50 to-black/50 bg-[#363A43] flex ">
      {/* choose the language */}

      <div className="w-96 bg-blue-950/30 flex flex-col">
        <div className="h-16 flex items-center justify-between p-5 border-b text-xl">
          <span
            className="text-white cursor-pointer border p-2 rounded-full hover:bg-blue-700/20"
            onClick={(e) =>
              addFile(e, {
                name: ("newFile" + Math.random()).substring(0, 12),
                content: "console.log('Hello world')",
                language: "javascript",
                extension: ".js",
              })
            }
          >
            <AiOutlineJavaScript />
          </span>
          <span
            className="text-white cursor-pointer border p-2 rounded-full hover:bg-blue-700/20"
            onClick={(e) =>
              addFile(e, {
                name: ("newFile" + Math.random()).substring(0, 12),
                content: "print('hello world')",
                language: "python",
                extension: ".py",
              })
            }
          >
            <AiOutlinePython />
          </span>
          <span
            className="text-white cursor-pointer border px-3 py-1 rounded-full hover:bg-blue-700/20"
            onClick={(e) =>
              addFile(e, {
                name: ("newFile" + Math.random()).substring(0, 12),
                content: "",
                language: "c",
                extension: ".c",
              })
            }
          >
            C{" "}
          </span>
          <span
            className="text-white cursor-pointer border px-3 py-2 rounded-full hover:bg-blue-700/20"
            onClick={(e) =>
              addFile(e, {
                name: ("newFile" + Math.random()).substring(0, 10),
                content: "",
                language: "cplusplus",
                extension: ".c++",
              })
            }
          >
            C++{" "}
          </span>
        </div>
        <div className="flex flex-col px-10 pt-5 gap-5">
          {files.map((file) => (
            <span
              className={`text-black cursor-pointer text-2xl  p-2 rounded-sm ${
                file.name === selectedFile.name
                  ? "bg-blue-400"
                  : "bg-blue-400/20"
              }`}
              key={file.name + Math.random()}
              onClick={() => {
                setSelectedFile(file);
              }}
            >
              {file.name}
              {file.extension}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* header  */}
        <div className="text-white h-16 bg-blue-950/30  flex  justify-between ">
          <div className="flex items-center text-xl gap-2 bg-slate-700 p-3 border-b-2 cursor-pointer">
            <LucideFile color="black" />
            <span>{file}</span>
            <LucideX />
          </div>
          <div className="flex gap-5 items-center text-xl   ">
            <span
              className="p-2 bg-blue-500 w-20 text-center text-black font-bold cursor-pointer"
              onClick={executeCode}
            >
              Run
            </span>
            <span className="p-2 hover:bg-blue-500 w-20 text-center hover:text-black font-bold cursor-pointer">
              Format
            </span>
            <span className="p-2 hover:bg-blue-500 w-20 text-center hover:text-black font-bold cursor-pointer">
              Save
            </span>
          </div>
        </div>
        {/* main editor */}
        <div className="flex ">
          <div className="flex w-full  text-white min-h-screen overflow-x-hidden overflow-scroll scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thin scrollbar-thumb-rounded ">
            <div className="flex  w-full min-h-screen gap-4 text-white  text-xl p-4">
              <div className="flex flex-col w-4">
                {lines.map((line) => (
                  <span key={line} className="">
                    {line + "  "}
                  </span>
                ))}
              </div>
              <textarea
                className="w-full min-h-screen bg-transparent focus-within:outline-none overflow-hidden resize-none"
                value={selectedFile.content}
                onChange={handleChange}
              />
            </div>
          </div>
          <pre className="text-black text-xl w-[800px] bg-white p-2">
            {solution}
          </pre>
        </div>
      </div>
    </div>
  );
}
