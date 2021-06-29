const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  count: 0,
};

export default function CounterReducer(
  state = initialState,
  { type, payload }
) {
  let newState = { ...state };

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };

    case DECREMENT:
      newState.count -= payload;
      break;

    default:
      return state;
  }
  return newState;
}
