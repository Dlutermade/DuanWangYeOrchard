import { NavLink } from 'react-router-dom';
import React from 'react';

type Props = {
  path: string;
  children: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler;
};

const MyLink: React.FC<Props> = ({ path, children, className, onClick }) => {
  return path.startsWith('http') ? (
    <a
      href={path}
      className={className}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  ) : (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${className} ${
          isActive
            ? 'drop-shadow-[0_0px_5px_rgba(200,200,200,0.6)]'
            : 'hover:drop-shadow-[0_0px_5px_rgba(200,200,200,0.4)]'
        }`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
