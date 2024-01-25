"use client";
import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useAppSelector } from "@/lib/hooks";
import { cn } from "@/lib/utils";

function CodeSpace() {
  const [title, setTitle] = useState("Untitled");
  const [code, setCode] = useState("");

  const state = useAppSelector((state) => state.controller);

  return (
    <main>
      <div
        className={cn(
          "h-60 rounded-xl  border-2 shadow-2xl",
          state[0].darkMode
            ? "border-gray-600/40 bg-black/75"
            : "border-gray-200/20 bg-white/75"
        )}
      >
        <header className="grid grid-cols-6 items-center gap-3 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="col-span-4 flex justify-center">
            <input
              type="textarea"
              placeholder="file name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent text-center text-sm font-medium focus:outline-none"
            />
          </div>
        </header>
        <div className="px-4 pb-4 max-h-[20rem] overflow-y-auto scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md"></div>

        <Editor
          value={code}
          onValueChange={(value) => setCode(value)}
          highlight={(code) =>
            hljs.highlight(code, { language: "plaintext" }).value
          }
          style={{
            fontFamily: "jetBrainsMono, monospace",
            fontSize: 18,
          }}
          textareaClassName="focus:outline-none "
        />
      </div>
    </main>
  );
}

export default CodeSpace;
