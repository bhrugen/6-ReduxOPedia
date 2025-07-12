import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  decrementMultipler,
  incrementMultipler,
} from "../redux/slice/counterSlice";
import { useState } from "react";
function Counter() {
  const [multiplier, setMultiplier] = useState(10);
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  return (
    <div className="m-4 row border text-center">
      <h1 className="text-warning pt-3">Counter App</h1>
      <hr />
      <span className="col-4 offset-4 badge bg-secondary fs-1 p-3 mb-3">
        {count}
      </span>
      <div className="pb-2 col-6">
        <div className="border p-2">
          <p className="text-success h3">Basic Counter</p>
          <button
            className="btn btn-danger m-2"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-success m-2"
          >
            Increment
          </button>
        </div>
      </div>
      <div className="pb-2 col-6">
        <div className="border p-2">
          <p className="text-success h3">Multiper Counter</p>
          <input
            type="text"
            value={multiplier}
            onChange={(e) => setMultiplier(e.target.value)}
            placeholder="multiplier..."
            className="form-control my-2"
          />
          <button
            className="btn btn-danger m-2"
            onClick={() => dispatch(decrementMultipler(multiplier))}
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementMultipler(multiplier))}
            className="btn btn-success m-2"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
