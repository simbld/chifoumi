function Player({ pseudo, move, setMove }) {
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
