import React, { useContext } from "react";
import CounterContext from "../contexts/CounterContext";
import { ContextChildComponent } from "./ContextChildComponent";

export const ContextParentComponent = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext);

  return (
    <div className="ContextParentComponent">
      <h4>ContextParentComponent</h4>
      <p>ContextParent count : {count}</p>
      <br />
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button
        onClick={() => {
          reset(0);
        }}
      >
        리셋
      </button>
      <ContextChildComponent />
    </div>
  );
};
