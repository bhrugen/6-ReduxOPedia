import { useDispatch } from "react-redux";
import { resetDestination } from "../redux/slice/destinationSlice";
import { resetCounter } from "../redux/slice/counterSlice";

function ResetApp() {
  const dispatch = useDispatch();

  const resetCounterAndDestination = () => {
    dispatch(resetCounter());
    dispatch(resetDestination());
  };

  return (
    <div className="text-center pt-4">
      <button className="btn btn-warning" onClick={resetCounterAndDestination}>
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
