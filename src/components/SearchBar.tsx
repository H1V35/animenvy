import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { SearchIcon } from '@/assets/SearchIcon';

export function SearchBar() {
  const [query, setQuery] = React.useState('');
  const [_searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (location.pathname !== '/search') navigate('/search');
    if (!query.trim()) return;

    setSearchParams({ q: query });
  };

  return (
    <div className="navbar__search">
      <form onSubmit={handleSubmit} className="navbar__search__container">
        <input
          name="query"
          type="text"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search"
          className="navbar__search--input"
        />

        <button type="submit" title="Search" className="navbar__search--button">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
