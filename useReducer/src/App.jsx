import React from "react";

export default function App() {
  const initialValue = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT_COUNT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT_COUNT":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialValue);

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>
        Increase Count
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_COUNT" })}>
        Decrease Count
      </button>
    </div>
  );
}
