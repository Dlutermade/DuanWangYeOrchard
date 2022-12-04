import React from 'react';
import { useState } from 'react';
import Menu from './Menu';
import MenuContent from './MenuContent';
import { MenuDataType } from './menuData';
import MyLink from './MyLink';

type Props = {
  item: MenuDataType;
  isDisplayIcon: boolean;
  isDisplayContent: boolean;
  delay: number;
  delayFactor: number;
  isDisplaySubMenu: boolean;
  depth: number;
  clickCallback?: () => void;
};

const MenuItem: React.FC<Props> = ({
  item,
  isDisplayIcon,
  isDisplayContent,
  delay,
  delayFactor,
  isDisplaySubMenu,
  depth,
  clickCallback,
}) => {
  const { path, icon, hoverIcon, content, submenu } = item;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setIsHover(() => true);
  };

  const handleMouseLeave: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setIsHover(() => false);
  };

  const handleClick: React.MouseEventHandler = () => {
    if (clickCallback) {
      clickCallback();
    }
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <MyLink path={path} className="h-12" onClick={handleClick}>
        {isDisplayIcon && (isHover ? hoverIcon : icon)}

        {isDisplayContent && (
          <MenuContent
            content={content}
            renderContentClassname={function (content) {
              return typeof content === 'string' ? 'top-3' : 'h-12 pt-1';
            }}
            depth={depth}
            delay={delay}
          />
        )}
      </MyLink>

      {submenu && (
        <Menu
          parent={path}
          data={submenu}
          isDisplay={isDisplaySubMenu || isHover}
          isDisplayIcon={isDisplayIcon}
          isDisplayContent={isDisplayContent}
          delay={isDisplaySubMenu ? delay + depth * 50 : 50}
          delayFactor={delayFactor}
          isDisplaySubMenu={isDisplaySubMenu}
          depth={depth + 1}
          clickCallback={clickCallback}
        />
      )}
    </li>
  );
};

export default MenuItem;
