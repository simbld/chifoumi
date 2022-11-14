import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Play from "./pages/Play";
import Rules from "./pages/Rules";

function App() {
  const [currentPage, setCurrentPage] = useState("rules");

  return (
    <div className="App">
      <NavBar setCurrentPage={setCurrentPage} />
      {currentPage === "rules" && <Rules />}
      {currentPage === "play" && <Play />}
    </div>
  );
}

export default App;
