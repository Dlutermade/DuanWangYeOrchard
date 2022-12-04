import React from 'react';
import AvocadoRipeData from './AvocadoRipeData';

type Props = {
  className: string;
};

const AvocadoRipe: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <ul className="mx-12 list-disc space-y-4 md:mx-10">
        {AvocadoRipeData.map(({ title, title2, content }, idx) => (
          <li key={idx}>
            <h3 className="text-xl font-medium">
              {title}
              {title2 && (
                <span className="font-semibold text-cactus-600">{title2}</span>
              )}
            </h3>
            {content.map((item, idx) => (
              <p key={idx} className="mt-1">
                {item}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvocadoRipe;
