import React from 'react';
import { MenuDataType } from './menuData';
import MenuItem from './MenuItem';

type Props = {
  className?: string;
  parent?: string;
  data: MenuDataType[];
  isDisplay?: boolean;
  isDisplayIcon?: boolean;
  isDisplayContent?: boolean;
  delay?: number;
  delayFactor?: number;
  isDisplaySubMenu?: boolean;
  depth?: number;
  clickCallback?: () => void;
};

const Menu: React.FC<Props> = ({
  parent = '',
  data,
  isDisplay = false,
  isDisplayIcon = false,
  isDisplayContent = false,
  className = '',
  delay = 0,
  delayFactor = 0,
  isDisplaySubMenu = false,
  depth = 0,
  clickCallback,
}) => (
  <>
    {isDisplay && (
      <ul className={`space-y-1 ${className}`}>
        {data.map((item, idx) => (
          <MenuItem
            key={idx}
            item={{ ...item, path: parent + item.path }}
            isDisplayIcon={isDisplayIcon}
            isDisplayContent={isDisplayContent}
            delay={delay + delayFactor * idx}
            delayFactor={delayFactor}
            isDisplaySubMenu={isDisplaySubMenu}
            depth={depth}
            clickCallback={clickCallback}
          />
        ))}
      </ul>
    )}
  </>
);

export default Menu;
