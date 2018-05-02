import { INCREMENT, DECREMENT } from "../actions/typeAction";

export function calReducer(oldState = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        data: oldState.data + action.payload,
      };
    case DECREMENT:
      return {
        data: oldState.data - action.payload,
      };
    default:
      return {
        data: oldState,
      };
  }
}
