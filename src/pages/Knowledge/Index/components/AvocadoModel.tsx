/* eslint-disable react/no-unknown-property */
import Loadding from '@components/Loadding';
import {
  PerspectiveCamera,
  OrbitControls,
  Html,
  Environment,
} from '@react-three/drei';
import React, { Suspense } from 'react';
import * as THREE from 'three';
import Avocado from './Avocado';

type Props = {
  changeDisplayIngredients: (idx: number) => void;
};

const AvocadoModel: React.FC<Props> = ({ changeDisplayIngredients }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.5, 10]} />
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2.5}
        enableZoom={false}
      />

      <spotLight
        position={[0, 70, 0]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
      <ambientLight args={['#ffffff', 0.1]} />

      <Suspense fallback={<Loadding isCanvas />}>
        <Avocado
          position={[0, -1.5, -1]}
          changeDisplayIngredients={changeDisplayIngredients}
        />
      </Suspense>

      <Html
        center
        className="pointer-events-none flex h-[600px] w-screen items-end justify-center space-y-16 px-20 pb-16 text-center sm:h-[800px] "
        zIndexRange={[40, 0]}
      >
        <h2 className="text-xl font-medium md:text-2xl">請雙擊果實或是果肉</h2>
      </Html>

      <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[150, 150]} />
        <meshStandardMaterial color={'#ffccaa'} />
      </mesh>

      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial color={'#ffccaa'} side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
};

export default AvocadoModel;
