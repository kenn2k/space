import { configureStore } from "@reduxjs/toolkit";
import apodSlice from "./slices/apodSlice";
import photoSlice from "./slices/photoSlice";

const store = configureStore({
  reducer: {
    new: apodSlice.reducer,
    photo: photoSlice.reducer,
  },
});

export default store;
//? this type for using useSelector
export type RootState = ReturnType<typeof store.getState>;

//? type for using useDispatch
export type AppDispatch = typeof store.dispatch;
