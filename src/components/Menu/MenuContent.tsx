import React from 'react';
import { useSpring, animated as a } from 'react-spring';

type Props = {
  content: React.ReactNode;
  renderContentClassname: (content: React.ReactNode) => string;
  depth: number;
  delay: number;
};

const MenuContent: React.FC<Props> = ({
  content,
  renderContentClassname,
  depth,
  delay,
}) => {
  const { display, opacity, x } = useMenuContentSpring(delay);

  return (
    <a.div
      className={`relative hidden overflow-hidden ${renderContentClassname(
        content
      )}`}
      style={{
        display,
        opacity,
        left: `${depth * 48}px`,
      }}
    >
      <a.p style={{ x }}>{content}</a.p>
    </a.div>
  );
};

const useMenuContentSpring = (delay: number) =>
  useSpring({
    from: {
      x: '-75%',
      opacity: 0,
      display: 'none',
    },
    to: {
      x: '0',
      opacity: 1,
      display: 'inline-block',
    },
    delay: delay,
  });

export default MenuContent;
