import { MenuData } from '@components/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import PopupMenu from './PopupMenu';

type Props = {
  isMobilc: boolean;
  isTransparent: boolean;
};

const Logo = MenuData[0];
const Menu = MenuData.slice(1);

const Header: React.FC<Props> = ({ isMobilc, isTransparent }) => {
  const spring = useHeaderSpring(isMobilc);
  const [isPopup, setIsPopup] = useState(false);

  const handleClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setIsPopup(() => true);
  };

  const handleClose = () => {
    setIsPopup(() => false);
  };

  return (
    <header className="relative mb-5 h-16">
      {isMobilc && (
        <animated.div
          className={`absolute z-50 w-full px-4 py-2 text-left text-xl ${
            isTransparent
              ? 'bg-cactus-500/50 text-gray-800 shadow-cactus-800/50'
              : 'bg-cactus-500 text-slate-100 shadow-cactus-800'
          } shadow-sm`}
          style={{ ...spring }}
        >
          <div className="relative flex">
            <Link to={Logo.path} className="inline-block flex-1">
              {Logo.content}
            </Link>

            <button className="mt-1 space-y-2" onClick={handleClick}>
              <div
                className={`h-1 w-8 ${
                  isTransparent
                    ? 'bg-gray-800 shadow-gray-900'
                    : 'bg-slate-100 shadow-slate-100'
                } shadow-sm`}
              ></div>
              <div
                className={`h-1 w-8 ${
                  isTransparent
                    ? 'bg-gray-800 shadow-gray-900'
                    : 'bg-slate-100 shadow-slate-100'
                } shadow-sm`}
              ></div>
              <div
                className={`h-1 w-8 ${
                  isTransparent
                    ? 'bg-gray-800 shadow-gray-900'
                    : 'bg-slate-100 shadow-slate-100'
                } shadow-sm`}
              ></div>
            </button>

            {isPopup && <PopupMenu menu={Menu} handleClose={handleClose} />}
          </div>
        </animated.div>
      )}
    </header>
  );
};

const useHeaderSpring = (isMobilc: boolean) =>
  useSpring({
    from: {
      y: '-100%',
    },
    to: {
      y: isMobilc ? '0%' : '-100%',
    },
    config: {
      duration: 150,
    },
  });

export default Header;
