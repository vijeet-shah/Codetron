"use client";
import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { changeTitle } from "@/slices/controllerSlice";

function CodeSpace() {
  const [code, setCode] = useState("");

  const state = useAppSelector((state) => state.controller);
  const dispatch = useAppDispatch();

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
              value={state[0].title}
              onChange={(e) =>
                dispatch(changeTitle({ index: 0, title: e.target.value }))
              }
              className={cn(
                "bg-transparent text-center text-sm font-medium focus:outline-none",
                state[0].darkMode ? "text-gray-400" : "text-gray-900"
              )}
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
            fontSize: state[0].fontSize,
          }}
          textareaClassName="focus:outline-none "
        />
      </div>
    </main>
  );
}

export default CodeSpace;
