import Loadding from '@components/Loadding';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import AvocadoCard from './components/AvocadoCard';
import AvocadoModel from './components/AvocadoModel';
import AvocadoRipe from './components/AvocadoRipe';
import AvocadoSeason from './components/AvocadoSeason';
import AvocadoType from './components/AvocadoType';

const Index = () => {
  const [displayIngredients, setDisplayIngredients] = useState(-1);

  const changeDisplayIngredients = (idx: number) => {
    setDisplayIngredients(idx);
  };

  const handleCloseDisplayIngredients = () => {
    setDisplayIngredients(-1);
  };

  return (
    <>
      {/* 3D酪梨 */}
      <div className="relative h-[600px] sm:h-[800px]">
        <Suspense fallback={<Loadding />}>
          <Canvas shadows>
            <AvocadoModel changeDisplayIngredients={changeDisplayIngredients} />
          </Canvas>
        </Suspense>
      </div>
      {displayIngredients !== -1 && (
        <AvocadoCard
          idx={displayIngredients}
          handleCloseDisplayIngredients={handleCloseDisplayIngredients}
        />
      )}

      <div className="relative mt-10 before:absolute before:top-6 before:left-0 before:w-full before:border-t-2 before:border-gray-800 md:mt-16">
        <h3 className="relative z-10 ml-4 inline-block rounded-md bg-cactus-500 py-2 px-4 text-xl font-medium text-slate-100">
          酪梨種類
        </h3>
      </div>
      <AvocadoType className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8" />

      <div className="relative mt-10 before:absolute before:top-6 before:left-0 before:w-full before:border-t-2 before:border-gray-800 md:mt-16">
        <h3 className="relative z-10 ml-4 inline-block rounded-md bg-cactus-500 py-2 px-4 text-xl font-medium text-slate-100">
          酪梨產季
        </h3>
      </div>
      <AvocadoSeason className="mt-8 space-y-8 md:mt-6" />

      <div className="relative mt-10 before:absolute before:top-6 before:left-0 before:w-full before:border-t-2 before:border-gray-800 md:mt-16">
        <h3 className="relative z-10 ml-4 inline-block rounded-md bg-cactus-500 py-2 px-4 text-xl font-medium text-slate-100">
          判斷黑美人酪梨成熟
        </h3>
      </div>
      <AvocadoRipe className="mt-6 flex items-center justify-center pb-24" />
    </>
  );
};

export default Index;
