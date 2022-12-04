import React from 'react';
import AvocadoTypeData from './AvocadoTypeData';

type Props = {
  className: string;
};

const AvocadoType: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      {AvocadoTypeData.map(({ img, title, content }, idx) => (
        <div
          className="group relative h-96 w-80 overflow-hidden rounded-3xl bg-cactus-500 shadow-md shadow-gray-400/80"
          key={idx}
        >
          <img
            className="mx-auto mt-8 h-52 w-52 rounded-3xl"
            src={img}
            alt=""
          />
          <div className="relative mt-10 h-96 rounded-tl-3xl bg-coconut-cream-100 px-4 text-center duration-150 before:absolute before:right-0 before:-top-6 before:h-6 before:w-6 before:bg-[radial-gradient(circle_at_0_0,_transparent_24px,#f5edd0_25px)] hover:-mt-8">
            <h3 className="py-8 text-3xl font-medium group-hover:drop-shadow-[0_0_2px_rgba(0,0,0,0.4)]">
              {title}
            </h3>
            {content.map((item, idx) => (
              <p className="text-lg" key={idx}>
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvocadoType;
