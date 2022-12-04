/* eslint-disable react/no-unknown-property */
import Loadding from '@components/Loadding';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { Suspense, useImperativeHandle } from 'react';
import * as THREE from 'three';
import { Model } from './Model';

type Ref = {
  SceneToJpg: () => Promise<string>;
};

type Props = {
  skinColor: string;
  pulpColor: string;
  seedColor: string;
  handIdx: number;
  handColor: string;
  footIdx: number;
  footColor: string;
};

const Scene: React.ForwardRefRenderFunction<Ref, Props> = (
  { skinColor, pulpColor, seedColor, handIdx, handColor, footIdx, footColor },
  ref
) => {
  const { gl, scene, camera } = useThree();

  useImperativeHandle(
    ref,
    () => ({
      async SceneToJpg() {
        const canvas = document.createElement('canvas');

        canvas.width = gl.domElement.width;
        canvas.height = gl.domElement.height;
        gl.render(scene, camera);

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(gl.domElement, 0, 0);
          ctx.font = '500 24px "Noto Sans TC"';
          ctx.fillText('出於段王爺的果園', 30, 20);
          const dataUrl = canvas.toDataURL('image/jpeg');
          return dataUrl;
        }

        return '';
      },
    }),
    []
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.5, 10]} />
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2.5}
        enableZoom={false}
      />
      <spotLight
        position={[0, 70, 18]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />

      <ambientLight args={['#cccccc', 0.2]} />

      <Suspense fallback={<Loadding isCanvas />}>
        <Model
          position={[0, -2, 0]}
          skinColor={skinColor}
          pulpColor={pulpColor}
          seedColor={seedColor}
          handIdx={handIdx}
          handColor={handColor}
          footIdx={footIdx}
          footColor={footColor}
        />
      </Suspense>

      <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[150, 150]} />
        <meshStandardMaterial color={'#ffccaa'} />
      </mesh>

      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial color={'#e4e28e'} side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
};

export default React.forwardRef(Scene);
