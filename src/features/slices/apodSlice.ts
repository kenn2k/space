import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HomePage } from "../../types/types";

export const fetchDailyPhoto = createAsyncThunk(
  "dailyPhoto/fetchDailyPhoto",
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

interface IState {
  data: HomePage;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  data: {
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    title: "",
  },
  loading: false,
  error: "",
};

const apodSlice = createSlice({
  name: "apod",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDailyPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDailyPhoto.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(
        fetchDailyPhoto.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = true;
          state.error = action.payload;
          state.data = {} as HomePage;
        }
      );
  },
});

export default apodSlice;
