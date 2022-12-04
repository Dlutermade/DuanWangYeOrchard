import React from 'react';

type Props = {
  title: string;
  img: string;
  list: string[];
};

const CardBack: React.FC<Props> = ({ title, img, list }) => {
  return (
    <div className="h-full w-80 rounded-3xl bg-cactus-300 pt-8 text-gray-800 shadow-md shadow-gray-800/80">
      <img
        className="h-36 w-80 rounded-3xl object-cover px-4"
        src={img}
        alt=""
      />
      <h3 className="py-4 text-xl font-medium">{title}食譜</h3>
      <ul className="ml-20 list-decimal text-left">
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardBack;
