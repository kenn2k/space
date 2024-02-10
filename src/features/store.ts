import { combineReducers, configureStore } from "@reduxjs/toolkit";
import testReducer from "./slices/asyncSlice";
const rootReducer = combineReducers({
  test: testReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
//? this type for using useSelector
export type RootState = ReturnType<typeof store.getState>;

//? type for using useDispatch
export type AppDispatch = typeof store.dispatch;
