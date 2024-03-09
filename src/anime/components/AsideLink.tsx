import { NavLink } from 'react-router-dom';

type AsideItemProps = {
  route: {
    to: string;
    text: string;
    icon: JSX.Element;
    iconFilled: JSX.Element;
  };
};

export function AsideLink({ route: { to, text, icon, iconFilled } }: AsideItemProps) {
  return (
    <NavLink key={to} to={to}>
      {({ isActive }) => (
        <div className={`aside__item ${isActive ? 'aside__item--active' : ''}`}>
          {isActive ? iconFilled : icon}
          <p>{text}</p>
        </div>
      )}
    </NavLink>
  );
}
