import "./Searchbar.css";
function Searchbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        placeholder="egg, chicken, lettuce, ..."
        name="search"
        required
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
