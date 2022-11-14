import { useState } from "react";

import Player from "./../components/Player";

function Play() {
  const [movePlayer1, setMovePlayer1] = useState("pierre");
  const [movePlayer2, setMovePlayer2] = useState("pierre");

  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);

  const resolveRound = () => {
    if (movePlayer1 === "pierre") {
      if (movePlayer2 === "feuille") {
        setScorePlayer2(scorePlayer2 + 1);
      }
      if (movePlayer2 === "ciseaux") {
        setScorePlayer1(scorePlayer1 + 1);
      }
    }
    if (movePlayer1 === "feuille") {
      if (movePlayer2 === "ciseaux") {
        setScorePlayer2(scorePlayer2 + 1);
      }
      if (movePlayer2 === "pierre") {
        setScorePlayer1(scorePlayer1 + 1);
      }
    }
    if (movePlayer1 === "ciseaux") {
      if (movePlayer2 === "pierre") {
        setScorePlayer2(scorePlayer2 + 1);
      }
      if (movePlayer2 === "feuille") {
        setScorePlayer1(scorePlayer1 + 1);
      }
    }
  };

  return (
    <>
      <Player
        pseudo="player1"
        move={movePlayer1}
        setMove={setMovePlayer1}
        score={scorePlayer1}
      />
      <button type="button" onClick={resolveRound}>
        valider
      </button>
      <Player
        pseudo="player2"
        move={movePlayer2}
        setMove={setMovePlayer2}
        score={scorePlayer2}
      />
    </>
  );
}

export default Play;
