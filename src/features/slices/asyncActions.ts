import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDailyPhoto = createAsyncThunk(
  "dailyphoto/fetchDailyPhoto",
  async () => {
    try {
      const response = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=LirPG4ppwxd5ggDpviIYbPx1aHl0j158MFgGJDZM"
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
