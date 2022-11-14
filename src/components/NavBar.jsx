function NavBar({ setCurrentPage }) {
  return (
    <nav>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              setCurrentPage("rules");
            }}
          >
            Rules
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setCurrentPage("play");
            }}
          >
            Play
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
