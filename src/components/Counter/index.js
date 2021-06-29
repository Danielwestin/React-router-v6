import { useSelector, useDispatch } from "react-redux";
import { Decrement, Increment } from "../../library/actions/CounterActions";

export default function Counter() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Counter {count}
      </h1>
      <button
        className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(Decrement())}
      >
        -
      </button>
      <button
        className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(Increment())}
      >
        +
      </button>
    </>
  );
}
