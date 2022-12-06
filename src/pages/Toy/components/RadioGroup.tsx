import React from 'react';

type Props = {
  label: string;
  option: string[];
  className?: string;
  value: number;
  changeValue: (n: number) => void;
};

const RadioGroup: React.FC<Props> = ({
  label,
  option,
  className = '',
  value,
  changeValue,
}) => {
  return (
    <div className={`space-x-5 md:space-x-8 ${className}`}>
      <span className="text-xl">{label}</span>
      {option.map((item, idx) => (
        <label className="inline-block" key={idx}>
          <input
            className="mr-2 scale-100 duration-300 checked:scale-125"
            type="radio"
            value={idx}
            checked={value === idx}
            onChange={(e) => changeValue(Number(e.target.value))}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
