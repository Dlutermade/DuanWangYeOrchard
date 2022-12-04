import { Menu, MenuData } from '@components/Menu';
import React from 'react';
import { animated, useSpring } from 'react-spring';

type Props = {
  menu: typeof MenuData;
  handleClose: () => void;
};

const PopupMenu: React.FC<Props> = ({ menu, handleClose }) => {
  const spring = usePopupMenuSpring();
  const handleClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <animated.div
      className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-cactus-500 text-xl text-slate-100"
      style={{ ...spring }}
    >
      <div className="absolute top-4 right-4">
        <button className="mt-1 h-8 w-8" onClick={handleClick}>
          <div className="h-1 w-9 origin-center translate-y-1 rotate-45 bg-slate-100 shadow-sm shadow-slate-100"></div>
          <div className="h-1 w-9 origin-center -rotate-45 bg-slate-100 shadow-sm shadow-slate-100"></div>
        </button>
      </div>

      <Menu
        className="mt-auto"
        data={menu}
        isDisplay
        isDisplayIcon
        isDisplayContent
        isDisplaySubMenu
        delay={150}
        delayFactor={35}
        clickCallback={handleClose}
      />

      <div className="mt-auto mb-8">
        <h2>地址: {import.meta.env.VITE_ADDRESS}</h2>
      </div>
    </animated.div>
  );
};

const usePopupMenuSpring = () =>
  useSpring({
    from: {
      y: '-100%',
    },
    to: {
      y: '0',
    },
  });

export default PopupMenu;
