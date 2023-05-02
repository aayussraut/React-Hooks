import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  const myFunc = React.useCallback(() => {
    console.log("in myFunc");
  }, []);

  // const myFunc = () => {
  //   console.log("in myFunc");
  // }; //function are reference type and a new reference is created everytime the component re-renders
  const IncreaseCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={IncreaseCount}>Increase Count</button>
      <Child myFunc={myFunc} />
    </div>
  );
}
const Child = React.memo(({ myFunc }) => {
  console.log("rendering child");

  return (
    <>
      {myFunc()}
      <h1>child component</h1>
      {/* <button onClick={myFunc}>test</button> */}
    </>
  );
});

Child.displayName = "Child";
