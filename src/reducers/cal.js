import { INCREMENT, DECREMENT } from "../actions/typeAction";

export function calReducer(oldState = 0, action) {
  switch (action.type) {
    case INCREMENT:
      console.log("reducer: INCREMENT");
      return {
        data: oldState + action.payload,
      };
    case DECREMENT:
      console.log("reducer: DECREMENT");
      return {
        data: oldState - action.payload,
      };
    default:
      console.log("reducer: DEFAULT");
      return {
        data: ":D",
      };
  }
}
