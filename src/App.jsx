import { useState } from "react";
import "./App.css";

import Play from "./pages/Play";
import Rules from "./pages/Rules";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Play />
      <Rules />
    </div>
  );
}

export default App;
