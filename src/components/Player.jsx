import { useState } from "react";

function Player({ pseudo }) {
  const [move, setMove] = useState("pierre");

  return (
    <>
      <h1>{pseudo}</h1>
      <select value={move} onChange={(event) => setMove(event.target.value)}>
        <option>pierre</option>
        <option>feuille</option>
        <option>ciseaux</option>
      </select>
    </>
  );
}

export default Player;
