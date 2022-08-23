import * as type from "../types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const tickerSlice = createSlice({
  name: "ticker",
  initialState: {
    tickerList: [],
  },
  reducers: {
    setTicker: (state, action) => {
      state.tickerList = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTicker.fulfilled, (state, action) => {
      state.tickerList = [...action.payload];
    });
  },
});

export const selectTickerBySymbol = (state, symbol) => {
  return state.ticker.tickerList.find((ticker) => ticker.symbol === symbol);
};

export const selectAllTicker = (state) => {
  return state.ticker.tickerList;
};

export const { setTicker } = tickerSlice.actions;

export const fetchTicker = createAsyncThunk("ticker/fetchTicker", async () => {
  console.log("start fetching ...", new Date());
  const response = await fetch("https://satangcorp.com/api/v3/ticker/24hr");

  return response.json();
});

export default tickerSlice.reducer;
