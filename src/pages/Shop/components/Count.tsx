import React from 'react';

type Props = {
  count: number;
  handleChangeCount: (n: number) => React.MouseEventHandler;
};

const Count: React.FC<Props> = ({ count, handleChangeCount }) => {
  return (
    <ul className="mt-2 flex justify-center gap-4 text-center">
      <li className="h-6 w-6 rounded-full bg-cactus-500 text-4xl font-semibold leading-[0.9rem] text-slate-200">
        <button
          className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.85)]"
          onClick={handleChangeCount(-1)}
        >
          -
        </button>
      </li>
      <li>{count}</li>
      <li className="h-6 w-6 rounded-full bg-cactus-500 text-2xl font-semibold leading-[1.4rem] text-slate-200">
        <button
          className="hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.85)]"
          onClick={handleChangeCount(1)}
        >
          +
        </button>
      </li>
    </ul>
  );
};

export default Count;
