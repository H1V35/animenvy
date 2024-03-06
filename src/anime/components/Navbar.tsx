import { NavLink } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import userIcon from '../../assets/userIcon.svg';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to={'/'}>
          <h1 className="navbar__title">
            <span className="navbar__title--highlighted">Anim</span>Envy
          </h1>
        </NavLink>

        <SearchBar />

        <div className="navbar__links">
          <NavLink
            to={'/profile'}
            className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
          >
            <img src={userIcon} alt="User Icon" className="navbar__link--profile" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
