import { useState, useMemo } from "react";

import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sum = useMemo(() => {
    console.log("calculating sum");
    return num1 + num2;
  }, [num1, num2]);

  return (
    <div>
      <button onClick={() => setNum1(num1 + 1)}>Increment Number 1</button>
      <button onClick={() => setNum2(num2 + 1)}>Increment Number 2</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default App;
