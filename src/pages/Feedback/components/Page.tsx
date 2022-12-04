import React, { useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/three';
import { ThreeElements, useFrame, useThree } from '@react-three/fiber';
import { Image, useScroll } from '@react-three/drei';
import * as THREE from 'three';

type Props = {
  url: string;
};

const Page: React.FC<ThreeElements['group'] & Props> = ({ url, ...props }) => {
  const [hover, setHover] = useState(false);
  const { width } = useThree((state) => state.viewport);
  const ScrollData = useScroll();

  const springs = usePageSpring(
    -width * 0.2,
    props.position as [number, number, number]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  const headlePointerEnter = () => setHover(() => true);
  const headlePointerLeave = () => setHover(() => false);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.material.grayscale = THREE.MathUtils.damp(
        ref.current.material.grayscale,
        hover ? 0 : Math.max(0, 0.95 - ScrollData.delta * 150),
        2,
        delta
      );
      ref.current.material.zoom = THREE.MathUtils.damp(
        ref.current.material.zoom,
        hover ? 1.1 : 1,
        6,
        delta
      );
    }
  });

  return (
    <animated.group {...props} {...springs}>
      <Image
        ref={ref}
        position={[0, 0, 0]}
        scale={[3.5, 7.7]}
        url={url}
        onPointerEnter={headlePointerEnter}
        onPointerLeave={headlePointerLeave}
      />
    </animated.group>
  );
};

const usePageSpring = (origin: number, position: [number, number, number]) =>
  useSpring({
    from: {
      position: [origin, 0, 0] as [number, number, number],
    },
    to: {
      position: position,
    },
    config: {
      duration: 650,
    },
  });

export default Page;
