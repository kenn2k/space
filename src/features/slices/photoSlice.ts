import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IState {
  data: [] | null;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  data: [],
  loading: false,
  error: "",
};
export const fetchPhoto = createAsyncThunk(
  "dailyPhoto/fetchDailyPhoto",
  async () => {
    const response = await axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=LirPG4ppwxd5ggDpviIYbPx1aHl0j158MFgGJDZM"
    );
    return response.data;
  }
);

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPhoto.fulfilled, (state, action) => {
        state.data = action.payload.photos;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPhoto.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});
photoSlice;
export default photoSlice;
