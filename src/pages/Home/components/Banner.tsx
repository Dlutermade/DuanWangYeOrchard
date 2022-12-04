import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a } from 'react-spring';

import banner from '@assets/home/banner.jpg';
import buyHover from '@assets/home/buyHover.gif';
import buyText from '@assets/home/buyText.gif';

import buy from '@assets/home/buy.gif';

const Banner = () => {
  const [hovered, setHovered] = useState(false);
  const springsText = useSpring({
    from: {
      x: '-250%',
    },
    to: {
      x: '0%',
    },
  });
  const springsImg = useSpring({
    from: {
      x: '125%',
    },
    to: {
      x: '0%',
    },
  });

  const handelMouseEnter: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setHovered(() => true);
  };

  const handelMouseLeave: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setHovered(() => false);
  };

  return (
    <section
      className="Banner ml-auto aspect-square max-w-[1100px] rounded-3xl bg-cover md:aspect-video"
      style={{ backgroundImage: `url("${banner}")` }}
    >
      <div className="flex h-full w-full flex-col items-end justify-end overflow-hidden rounded-3xl bg-gradient-to-b from-transparent to-gray-800 px-8 py-4 text-slate-100 sm:flex-row sm:justify-between">
        <a.div className="order-1 space-y-4" style={{ ...springsText }}>
          <h1 className="text-3xl font-medium sm:text-7xl">段王爺の果園</h1>
          <p className="sm:text-xl">一起享用美味的酪梨吧</p>
        </a.div>

        <Link
          className={`duration-300 sm:order-2 ${
            hovered ? 'scale-110' : 'scale-75 md:scale-90'
          }`}
          to="/shop"
        >
          <a.div
            className="flex"
            onMouseEnter={handelMouseEnter}
            onMouseLeave={handelMouseLeave}
            style={{ ...springsImg }}
          >
            <img src={buyText} alt="" />
            <img src={hovered ? buyHover : buy} alt="" />
          </a.div>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
