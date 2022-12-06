import React from 'react';

import { DataType } from '../CardData';

type Props = {
  data: DataType;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:gap-16">
      <div className="w-96 md:w-[450px]">
        <img className="w-screen object-cover" src={data.img}></img>
      </div>
      <div className="w-96 rounded-xl bg-white/90 px-6 py-4">
        <h1 className="mt-2 text-center text-xl">{data.title}</h1>
        <hr className="mt-4 mb-2 border-gray-800" />
        {data.contentType === 'iframe' &&
          data.content.map((item, i) =>
            item.startsWith('http') ? (
              <iframe
                className="mx-auto mt-4 mb-6 h-80 w-80"
                src={item}
                frameBorder="0"
                allowFullScreen={false}
                key={i}
              ></iframe>
            ) : (
              <p key={i}>{item}</p>
            )
          )}

        {data.contentType === 'list' &&
          data.content.map((item, i) => (
            <span
              className={`mt-2 inline-block ${i !== 0 ? 'indent-8' : ''}`}
              key={i}
            >
              {item}
            </span>
          ))}

        {data.contentType === 'process' && (
          <div className="flex flex-col items-center gap-2">
            {data.content.map((item, i) => (
              <React.Fragment key={i}>
                {i !== 0 && (
                  <div className="relative h-4 w-4 bg-gray-800 before:absolute before:-bottom-[15.3px] before:h-0 before:w-0 before:border-[8px] before:border-transparent before:border-t-gray-800" />
                )}
                <p>{item}</p>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
