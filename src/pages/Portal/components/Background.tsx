/* eslint-disable react/no-unknown-property */
import { useTexture } from '@react-three/drei';
import { useFrame, ThreeElements } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

const Background: React.FC<ThreeElements['points']> = (props) => {
  const alphaMap = useTexture('textures/round.png');
  const ref = useRef<THREE.Points>(null);
  const pointCount = 3000;
  const pointArr = useMemo(() => {
    const arr = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i++) {
      arr[i * 3 + 0] = Math.random() * 200 - 100; // [-100 ~ 100]
      arr[i * 3 + 1] = Math.random() * 200 - 100; // [-100 ~ 100]
      arr[i * 3 + 2] = Math.random() * 200 - 100; // [-100 ~ 100]
    }

    return arr;
  }, [pointCount]);

  let step = 0;
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = Math.cos(step);
      ref.current.rotation.y = Math.sin(step);

      step += delta * 0.05;
    }
  });

  return (
    <points {...props} ref={ref}>
      <bufferGeometry attach={'geometry'}>
        <bufferAttribute
          attach="attributes-position"
          array={pointArr}
          count={pointCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.5}
        depthWrite={false}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        color={'#eeeeee'}
        transparent={true}
        alphaMap={alphaMap}
      />
    </points>
  );
};

export default Background;
