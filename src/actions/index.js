import { INCREMENT, DECREMENT } from "./typeAction";

export function plush(numberOfIncre = 1) {
  return {
    type: INCREMENT,
    payload: numberOfIncre,
  };
}

export function sub(numberOfSub = 1) {
  return {
    type: DECREMENT,
    payload: numberOfSub,
  };
}
