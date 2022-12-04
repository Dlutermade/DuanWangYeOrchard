import React from 'react';
import { useSpring, animated as a } from 'react-spring';

type Props = {
  className: string;
  isTransparent: boolean;
  delay: number;
};

const ContactInfo: React.FC<Props> = ({ className, isTransparent, delay }) => {
  const spring = useContactInfoSpring(delay);

  return (
    <a.div
      className={`rounded-2xl p-2 ${
        isTransparent ? 'bg-cactus-600/50' : 'bg-cactus-600'
      } text-center text-base ${className}`}
      style={{ ...spring }}
    >
      <h2>地址: </h2>
      <p>{import.meta.env.VITE_ADDRESS}</p>
    </a.div>
  );
};

const useContactInfoSpring = (delay: number) =>
  useSpring({
    from: {
      x: '-240px',
    },
    to: {
      x: '0',
    },
    delay: delay,
  });

export default ContactInfo;
