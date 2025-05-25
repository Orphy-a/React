import React from "react";
import useCounter from "../hooks/useCounter";

export const UseCustomhookComponent = () => {
  const [state, increaseDispatch, decreaseDispatch, resetDispatch] =
    useCounter(0);

  return (
    <div className="UseCustomhookComponent">
      <h4>UseCustomhookComponent</h4>
      <button onClick={increaseDispatch}>증가</button>
      <button onClick={decreaseDispatch}>감소</button>
      <button onClick={resetDispatch}>리셋</button>
      <p>count : {state.count}</p>
    </div>
  );
};
