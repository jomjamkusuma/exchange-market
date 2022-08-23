import { configureStore } from "@reduxjs/toolkit";
import ticker from "./reducers/ticker";

export default configureStore({
  reducer: {
    ticker: ticker,
  },
});
