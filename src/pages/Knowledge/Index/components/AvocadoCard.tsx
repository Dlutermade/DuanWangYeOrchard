import React from 'react';
import AvocadoCardData from './AvocadoCardData';

type Props = {
  idx: number;
  handleCloseDisplayIngredients: () => void;
};

const AvocadoCard: React.FC<Props> = ({
  idx,
  handleCloseDisplayIngredients,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center"
      onClick={handleCloseDisplayIngredients}
      style={{ backdropFilter: 'blur(3px)' }}
    >
      <div
        className="w-80 overflow-hidden rounded-xl border-2 border-gray-800 bg-coconut-cream-100 text-center shadow-lg shadow-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="mt-6 text-xl md:text-2xl">
          {AvocadoCardData[idx].title}
        </h3>

        <ul className="mt-4 space-y-2">
          {AvocadoCardData[idx].list.map((item, idx) => (
            <li
              className="relative mx-auto block w-52 bg-coconut-cream-200 py-1 pl-4 before:absolute before:inset-0 before:h-8 before:w-8 before:bg-cactus-500 md:w-72"
              key={idx}
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-4 px-4">{AvocadoCardData[idx].benefit}</p>
        <button
          className="group mt-2 h-10 w-full space-x-3 bg-cactus-600 font-medium text-slate-200 md:mt-4"
          onClick={handleCloseDisplayIngredients}
        >
          <span>返回畫面</span>
        </button>
      </div>
    </div>
  );
};

export default AvocadoCard;
