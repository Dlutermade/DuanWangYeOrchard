import React, { useState } from 'react';

type Props = {
  type: React.HTMLInputTypeAttribute;
  dataError: boolean;
  errorMsg: string;
  inputLabel: string;
  data: number | string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const index: React.FC<Props> = ({
  type,
  dataError,
  errorMsg,
  inputLabel,
  data,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className="mt-6">
      {dataError && (
        <p className="mb-2 rounded-lg bg-rose-500 px-4 py-2 text-lg">
          {errorMsg}
        </p>
      )}
      <label className="flex flex-col gap-2 md:flex-row">
        <p
          className={`${
            focused ? 'font-semibold text-cactus-600' : 'font-medium'
          }`}
        >
          {inputLabel}
        </p>
        <input
          className="h-8 flex-1 rounded-lg border-2 border-gray-800 outline-none focus:border-cactus-600"
          type={type}
          value={data}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default index;
