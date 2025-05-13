import React, { useReducer } from "react";

const CountState = { count: 0 };

function countReducer(state, action) {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
  }
}

export const UserReducerComponent = () => {
  const [CountState, countDispatch] = useReducer(countReducer, CountState);

  return (
    <div>
      <p>count : {CountState.count}</p>
      <button
        onClick={() => {
          countDispatch({ type: "increase" });
        }}
      >
        증가
      </button>
    </div>
  );
};
