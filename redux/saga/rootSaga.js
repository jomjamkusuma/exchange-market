import { all, call } from "redux-saga/effects";
import { loadTickerSaga } from "./ticker";

function* rootSaga() {
  yield all([call(loadTickerSaga)]);
}

export default rootSaga;
