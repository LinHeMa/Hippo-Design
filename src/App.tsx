import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Button from "./InputComponent/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button size='xs'/>
    </div>
  );
}

export default App;
