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
        <div
          className={`asideItem asideItem__link ${
            isActive ? 'asideItem--active asideItem__link--active' : ''
          }`}
        >
          <div className="asideItem__image">{isActive ? iconFilled : icon}</div>
          <p className="asideItem__title">{text}</p>
        </div>
      )}
    </NavLink>
  );
}
