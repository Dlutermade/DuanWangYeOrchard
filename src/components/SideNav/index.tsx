import React, { useState } from 'react';
import { MenuData, Menu } from '@components/Menu';
import { useSpring, animated } from 'react-spring';
import ContactInfo from './ContactInfo';

type Props = {
  isTransparent: boolean;
};

const TopMenu = MenuData.slice(0, 1);
const MiddleMenu = MenuData.slice(1, -1);
const BottomMenu = MenuData.slice(-1);

const SideNav: React.FC<Props> = ({ isTransparent }) => {
  const [ishover, setIsHover] = useState(false);
  const factor = 35;
  const initDelay = 200;
  const spring = useSideNavSpring();

  const handleMouseEnter: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setIsHover(() => true);
  };

  const handleMouseLeave: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setIsHover(() => false);
  };

  return (
    <animated.nav
      className={`fixed inset-0 z-50 flex h-screen w-14 flex-col justify-center py-2 px-2 text-left text-2xl font-semibold ${
        isTransparent
          ? 'bg-cactus-500/50 text-gray-800 shadow-cactus-800/50'
          : 'bg-cactus-500 text-slate-100 shadow-cactus-800'
      } shadow-xl transition-all duration-200 hover:w-52 hover:px-4`}
      style={{ ...spring }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Menu
        data={TopMenu}
        className="flex-1"
        isDisplay
        isDisplayIcon={!ishover}
        isDisplayContent={ishover}
        delay={initDelay}
      />

      <Menu
        className="flex-auto"
        data={MiddleMenu}
        isDisplay
        isDisplayIcon
        isDisplayContent={ishover}
        delay={initDelay + factor * 0.9}
        delayFactor={factor}
      />

      <div className="flex h-56 flex-1 flex-col justify-end">
        {/* 聯絡資訊 */}

        {ishover && (
          <ContactInfo
            className="font-normal text-slate-100"
            isTransparent={isTransparent}
            delay={initDelay + (MiddleMenu.length + 1) * factor * 0.9}
          />
        )}

        <Menu
          data={BottomMenu}
          isDisplay
          isDisplayIcon
          isDisplayContent={ishover}
          delay={initDelay + (MiddleMenu.length + 2) * factor * 0.9}
        />
      </div>
    </animated.nav>
  );
};

const useSideNavSpring = () =>
  useSpring({
    from: {
      x: '-100%',
    },
    to: {
      x: '0',
    },
    config: {
      duration: 150,
    },
  });

export default SideNav;
