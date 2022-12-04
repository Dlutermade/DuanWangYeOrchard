import React from 'react';

type Props = {
  title: string;
  img: string;
};

const CardFront: React.FC<Props> = ({ title, img }) => {
  return (
    <div className="h-full w-80 rounded-3xl bg-cactus-500 pt-8 text-slate-200 shadow-md shadow-gray-800/80">
      <img
        className="h-64 w-80 rounded-3xl object-cover px-4"
        src={img}
        alt=""
      />
      <h3 className="py-4 text-2xl font-medium">{title}</h3>
    </div>
  );
};

export default CardFront;
