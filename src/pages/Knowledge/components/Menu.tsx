import React from 'react';
import { Link } from 'react-router-dom';

const Item = [
  {
    path: '',
    content: '酪梨知識庫',
  },
  {
    path: 'cookbook',
    content: '酪梨吃法',
  },
];

const Menu = () => {
  return (
    <nav className="mt-4 mb-6 -ml-5 sm:mt-12 sm:mb-14">
      <ul className="mx-auto flex justify-center gap-8 text-center text-xl">
        {Item.map(({ path, content }, idx) => (
          <li
            className={`relative ${
              idx !== 0
                ? 'before:absolute before:inset-0 before:-ml-4 before:w-0 before:border-l-2 before:border-l-gray-700'
                : ''
            }`}
            key={idx}
          >
            <Link
              className="inline-block rounded-lg p-2 font-medium hover:bg-gray-700 hover:text-slate-100 sm:p-4"
              to={path}
            >
              {content}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
