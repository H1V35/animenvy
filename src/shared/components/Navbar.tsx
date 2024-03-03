import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', text: 'Home' },
  { to: '/search', text: 'Search' },
];

export function NavBar() {
  return (
    <nav>
      <ul>
        {routes.map(({ to, text }) => (
          <li>
            <NavLink to={to}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
