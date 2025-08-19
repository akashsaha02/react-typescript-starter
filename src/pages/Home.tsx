import CommonWrapper from "../common/CommonWrapper";
import {
  decrement,
  increment,
  reset,
} from "@/store/Slices/counterSlice/counterSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

const Home = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <CommonWrapper>
      <div className="h-screen bg-website-color-lightGreen">
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <h1 className="text-2xl font-bold mb-4">Home Page</h1>
          <h2 className="text-xl font-bold">Counter: {count}</h2>
          <div className="mt-4 space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Home;
