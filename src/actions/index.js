import { INCREMENT, DECREMENT } from "./typeAction";

export function plush(numberOfIncre = 1) {
  console.log("action: plush");
  return {
    type: INCREMENT,
    payload: numberOfIncre,
  };
}

export function sub(numberOfSub = 1) {
  console.log("action: sub");
  return {
    type: DECREMENT,
    payload: numberOfSub,
  };
}
