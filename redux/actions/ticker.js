import * as type from "../types";

export const setTicker = (ticker) => {
  type: type.SET_TICKER;
  payload: ticker;
};
