import { useForm } from "../../hooks/useForms";
import "./Searchbar.css";
function Searchbar({ onSearch }) {
  const { values, handleChange } = useForm({
    search: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(values.search);
  };

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        placeholder="egg, chicken, lettuce, ..."
        name="search"
        required
        value={values.search}
        onChange={handleChange}
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
