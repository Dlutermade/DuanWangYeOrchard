import { Html, useProgress } from '@react-three/drei';
import React from 'react';
import { useSpring, animated as a } from 'react-spring';

type Props = {
  isCanvas?: boolean;
};

const Loadding: React.FC<Props> = ({ isCanvas = false }) => {
  const spring = useLoaddingSpring();
  const { active, progress } = useProgress();

  const Container = isCanvas ? Html : React.Fragment;

  return (
    <Container>
      <a.div
        className="absolute inset-0 flex h-full w-full items-center justify-center text-center text-4xl"
        style={{ ...spring }}
      >
        <h2>Loadding {active && `${progress.toFixed(2)}`}</h2>
      </a.div>
    </Container>
  );
};

const useLoaddingSpring = () =>
  useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 200,
  });

export default Loadding;
