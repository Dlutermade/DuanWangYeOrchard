/* eslint-disable react/no-unknown-property */
import {
  Environment,
  MeshReflectorMaterial,
  PerspectiveCamera,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import Pages from './components/Pages';

const Feedback = () => {
  return (
    <div className="absolute inset-0">
      <Canvas className="feedback" shadows>
        <PerspectiveCamera
          makeDefault
          position={[0, 1, 11]}
          rotation={[-Math.PI / 36, 0, 0]}
        />

        <ambientLight args={['#ffffff', 1]} />

        <Pages />

        <mesh
          rotation={[-Math.PI / 2, Math.PI / 2.85, 0]}
          position={[-1, -3.4, -1]}
          scale={100}
          receiveShadow
        >
          <planeGeometry args={[1, 1]} />
          <MeshReflectorMaterial
            mirror={0}
            blur={[300, 300]}
            mixStrength={1.2}
            mixContrast={1.1}
            minDepthThreshold={1.2}
            color={'#616060'}
            roughness={2}
            metalness={0.5}
            resolution={1024}
          />
        </mesh>

        <Environment background>
          <mesh scale={10}>
            <sphereGeometry args={[1, 10, 10]} />
            <meshBasicMaterial color={'#ffccaa'} side={THREE.BackSide} />
          </mesh>
        </Environment>
      </Canvas>
    </div>
  );
};

export default Feedback;
