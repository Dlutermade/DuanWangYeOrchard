import React from 'react';
import AvocadoSeasonData from './AvocadoSeasonData';

type Props = {
  className: string;
};

const AvocadoSeason: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} `}>
      {AvocadoSeasonData.map(({ imgPath, months, isSeason }, idx) => (
        <div
          className="mx-auto flex flex-col items-center justify-center gap-4 text-center text-lg md:flex-row md:gap-8"
          key={idx}
        >
          <img
            className=" h-48 w-48 rounded-full object-cover"
            src={imgPath}
            alt=""
          />

          <div className="relative z-0 before:absolute before:top-5 before:left-2 before:-z-10 before:h-2 before:w-64 before:bg-slate-200">
            {months.map((month, idx) => (
              <span
                className={`inline-block h-12 w-12 rounded-full bg-coconut-cream-200 leading-[3rem] ${
                  idx !== 0 ? 'ml-8' : ''
                }`}
                key={idx}
              >
                {month}月
              </span>
            ))}

            <p
              className={`mx-auto mt-4 w-48 rounded-xl px-4 py-2 text-slate-200 ${
                isSeason ? 'bg-cactus-500' : 'bg-gray-500 '
              }`}
            >
              {isSeason ? '產季' : '休季'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvocadoSeason;
