import { useState } from "react";

import Player from "./../components/Player";

function Play() {
  const [movePlayer1, setMovePlayer1] = useState("pierre");
  const [movePlayer2, setMovePlayer2] = useState("pierre");

  return (
    <>
      <Player pseudo="player1" move={movePlayer1} setMove={setMovePlayer1} />
      vs
      <Player pseudo="player2" move={movePlayer2} setMove={setMovePlayer2} />
    </>
  );
}

export default Play;
