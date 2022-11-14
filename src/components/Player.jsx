function Player({ pseudo, move, setMove, score }) {
  return (
    <details>
      <summary>
        <h1>{pseudo}</h1>
        <p>{score}</p>
      </summary>
      <select value={move} onChange={(event) => setMove(event.target.value)}>
        <option>pierre</option>
        <option>feuille</option>
        <option>ciseaux</option>
      </select>
    </details>
  );
}

export default Player;
