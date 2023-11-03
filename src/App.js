import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  let [amount, setAmount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <br></br>
      <input onChange={(e) => setAmount(e.target.value)} value={amount}></input>
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        increment by amount
      </button>
      <h2>The current Data is: {new Date()}</h2>
    </>
  );
}

export default App;
