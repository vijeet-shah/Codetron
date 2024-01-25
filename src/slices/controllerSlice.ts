import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  controller: [
    {
      code: "",
      title: "Untitled",
      theme: "hyper",
      darkMode: true,
      showBackground: true,
      language: "plaintext",
      autoDetection: false,
      fontSize: 18,
      fontStyle: "jetBrainsMono",
      padding: 64,
    },
  ],
};

export const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    turnDarkMode: (state, action) => {
      const { index, darkMode } = action.payload;
      state.controller[index].darkMode = darkMode;
    },
    changeFontSize: (state, action) => {
      const { index, fontSize } = action.payload;
      state.controller[index].fontSize = fontSize;
    },
  },
});

export const { turnDarkMode, changeFontSize } = controllerSlice.actions;

export default controllerSlice.reducer;
