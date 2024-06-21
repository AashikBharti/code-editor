import { exec } from "child_process";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  const { code, language } = await req.json();

  console.log(language);

  let fileExtension = "";
  if (language === "javascript") {
    fileExtension = "js";
  } else if (language === "python") {
    fileExtension = "py";
  }

  console.log(process.cwd());
  const id = "codeid145";
  const filePath = path.join(process.cwd(), "", `${id}.${fileExtension}`);
  fs.writeFileSync(filePath, code);

  // code for command
  let command = "";
  if (language === "javascript") {
    command = `node ${filePath}`;
  } else if (language === "python") {
    command = `python3 ${filePath}`;
  }

  return new Promise((resolve, reject) => {
    exec(command, { timeout: 3000 }, (error, stdout, stderr) => {
      fs.unlinkSync(filePath); // clean up the file

      if (error) {
        resolve(NextResponse.json({ output: stderr }));
      } else {
        resolve(NextResponse.json({ output: stdout }));
      }
    });
  });
}
  