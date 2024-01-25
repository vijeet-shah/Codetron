"use client";

import CodeSpace from "@/components/CodeSpace";
import ControlOption from "@/components/ControlOption";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="dark flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-neutral-950 text-white">
        <div className="h-80 w-1/3 flex items-center justify-center	 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
          <CodeSpace />
        </div>
        <ControlOption />
      </main>
    </Provider>
  );
}
