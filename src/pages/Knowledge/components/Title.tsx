import React from 'react';
import { useLocation } from 'react-router-dom';

const Title = () => {
  const { pathname } = useLocation();
  const lastPath =
    pathname.split('/').at(-1) || pathname.split('/').at(-2) || '';

  return (
    <div className="text-center text-3xl font-semibold">
      <p>{lastPath.replace(new RegExp('^.', 'g'), (s) => s.toUpperCase())}</p>
      <hr className="my-4 rounded-full border-t-4 border-gray-700" />
    </div>
  );
};

export default Title;
