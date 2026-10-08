import "./SearchControls.css";
function SearchControls({ setSearchString, handleClick, buttonMessage }) {
  return (
    <div className="search-controls">
      <input
        type="text"
        placeholder="Search Products..."
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
      />

      <button onClick={handleClick}>{buttonMessage}</button>
    </div>
  );
}

export default SearchControls;
