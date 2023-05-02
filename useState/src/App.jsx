import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const IncreaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const [obj, setObj] = useState({
    name: "Rahul",
    age: 20,
    address: {
      city: "Kathmandu",
      state: "Bagmati",
    },
  });

  const handleObjChange = () => {
    setObj((prev) => {
      return {
        ...prev,
        name: "Rahul Shrestha",
        address: { ...prev.address, city: "Lalitpur" },
      };
    });
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCount}>Increase Count</button>
      {console.log(obj)}
      <button onClick={handleObjChange}>For Object</button>
    </>
  );
}

export default App;
