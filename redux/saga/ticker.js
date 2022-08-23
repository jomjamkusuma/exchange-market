import { setTicker } from "../actions/ticker";
import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import * as type from "../types";

function* loadTickerSaga() {
  try {
    const res = yield fetch(`https://satangcorp.com/api/v3/ticker/24hr`);
    const data = yield res.json();
    console.log(
      "🚀 ~ file: ticker.js ~ line 8 ~ function*loadTickerSaga ~ data",
      data
    );
    yield takeLatest(type.SET_TICKER, setTicker(data));
  } catch (error) {
    console.log(error.message);
  }
}

export { loadTickerSaga };
