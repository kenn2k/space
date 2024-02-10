import { createSlice } from "@reduxjs/toolkit";

// Используйте конкретные значения для инициализации полей объекта initialState
const initialState: HomePage = {
  copyright: "",
  date: "",
  explanation: "",
  hdurl: "",
  media_type: "",
  title: "",
};

const asyncSlice = createSlice({
  name: "daily",
  initialState,
  reducers: {},
});

export default asyncSlice.reducer;

export type HomePage = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  title: string;
};
