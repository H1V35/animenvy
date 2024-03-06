import { SearchIcon } from '../../assets/SearchIcon';

export function SearchBar() {
  return (
    <div className="navbar__search">
      <form className="navbar__search__container">
        <input name="query" placeholder="Search" className="navbar__search--input" />
        <button type="submit" className="navbar__search--button">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
