import { Canvas } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';

type Props = {
  isMatched: boolean;
};

const EmptyCanvas: React.FC<Props> = ({ isMatched }) => {
  return (
    <div className="absolute inset-0 -z-50">
      {!isMatched && (
        <Canvas
          gl={(canvas) =>
            new THREE.WebGLRenderer({ canvas, powerPreference: 'low-power' })
          }
        >
          <perspectiveCamera />
        </Canvas>
      )}
    </div>
  );
};

export default EmptyCanvas;
