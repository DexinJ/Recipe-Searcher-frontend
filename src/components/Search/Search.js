import Searchbar from "../Searchbar/Searchbar";
import "./Search.css";
function Search({ onSearch }) {
  return (
    <div className="search">
      <div className="search__container">
        <h2 className="search__title">What's in my fridge?</h2>
        <div className="search__explaination">
          Find the best recepies you can make with the indigrients you have
          right now.
        </div>
      </div>

      <Searchbar onSearch={onSearch} />
    </div>
  );
}

export default Search;
