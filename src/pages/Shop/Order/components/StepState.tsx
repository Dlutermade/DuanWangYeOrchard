import React from 'react';
import { PageList, PageStateEnum } from '../PageStateEnum';

type Props = {
  step: PageStateEnum;
  className: string;
};

const StepState: React.FC<Props> = ({ step, className }) => {
  return (
    <ul
      className={`${className} flex flex-col justify-end gap-2 border-t-2 border-gray-700 pt-4 pr-8 text-xl md:flex-row md:gap-4 md:text-2xl`}
    >
      {PageList.map((item, idx) => (
        <li key={idx}>
          <span
            className={`inline-block w-11 rounded-full p-2 text-center text-slate-200 md:w-12 ${
              step === item ? 'bg-cactus-400 ' : 'bg-gray-600'
            }`}
          >
            {idx + 1}
          </span>
          <span className="ml-4">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default StepState;
