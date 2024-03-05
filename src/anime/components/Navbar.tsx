import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/search', text: 'Search' },
  { to: '/watchlist', text: 'Watchlist' },
  { to: '/profile', text: 'Profile' },
];

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to={'/'}>
          <h1 className="navbar__title">
            <span className="navbar__title--highlighted">Anim</span>Envy
          </h1>
        </NavLink>

        <ul className="navbar__links">
          {routes.map(({ to, text }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
