import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', text: 'Home' },
  { to: '/watchlist', text: 'Watchlist' },
];

export function Aside() {
  return (
    <div className="aside">
      <div className="aside__container">
        <div className="aside__links">
          {routes.map(({ to, text }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? 'aside__link aside__link--active' : 'aside__link'
              }
            >
              {text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
