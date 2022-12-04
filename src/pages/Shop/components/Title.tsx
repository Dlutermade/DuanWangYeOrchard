import React from 'react';
import { useLocation } from 'react-router-dom';

const Title = () => {
  const { pathname } = useLocation();
  const lastPath = Array.from(pathname.matchAll(/(?<=\/)[a-z]+/g)).at(-1) || [
    '',
  ];

  return (
    <div className="mb-6 text-center text-3xl">
      <p>{lastPath[0].replace(/^./g, (s) => s.toUpperCase())}</p>
      <hr className="my-4 rounded-full border-t-4 border-gray-700" />
    </div>
  );
};

export default Title;
