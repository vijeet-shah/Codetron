"use client";

import { Switch } from "../ui/switch";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { turnDarkMode } from "@/slices/controllerSlice";

function DarkMode() {
  const darkMode = useAppSelector((state) => state.controller[0].darkMode);
  const dispatch = useAppDispatch();

  const handleDarkModeToggle = () => {
    // Dispatch the turnDarkMode action with the updated darkMode value
    dispatch(turnDarkMode({ index: 0, darkMode: !darkMode }));
  };

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        Dark Mode
      </label>
      <Switch
        checked={darkMode}
        onCheckedChange={handleDarkModeToggle}
        className="my-1.5"
      />
    </div>
  );
}

export default DarkMode;
