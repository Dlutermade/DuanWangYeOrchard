import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a } from 'react-spring';

import hero from '@assets/home/hero.png';
import arrow from '@assets/home/arrow.gif';

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const springs = useHeroSpring(hovered);

  const handelMouseEnter: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setHovered(() => true);
  };

  const handelMouseLeave: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setHovered(() => false);
  };
  return (
    <section className="Hero mt-24">
      <div className="relative h-0.5 overflow-hidden">
        <div className="absolute inset-0 h-0.5 animate-banner_top_line_left bg-gradient-to-r from-transparent to-cactus-300" />
        <div className="absolute inset-0 h-0.5 animate-banner_top_line_right bg-gradient-to-l from-transparent to-cactus-500" />
      </div>

      <Link to="/orchard">
        <div className="relative mt-10 w-full overflow-hidden">
          <div className="flex h-full w-[4000px]">
            <img
              className="h-full w-[4000px] animate-banner_img object-cover"
              src={hero}
              alt=""
            />
            <img
              className="h-full w-[4000px] animate-banner_img object-cover"
              src={hero}
              alt=""
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 ml-8 mr-4 flex flex-col items-start sm:flex-row sm:items-end sm:justify-between">
            <p className="w-48 bg-cactus-600/75 px-6 py-4 text-justify text-slate-100">
              果園位於被海岸和山脈滋養的台東。由阿嬤親手栽種。希望大家一起享用這個油亮、健康、價格公平的酪梨。
            </p>

            <div
              className="overflow-hidden"
              onMouseEnter={handelMouseEnter}
              onMouseLeave={handelMouseLeave}
            >
              <a.div className="flex items-center gap-8" style={{ ...springs }}>
                <h3
                  className={`text-2xl font-medium sm:text-3xl ${
                    hovered ? 'text-cactus-600' : 'text-gray-800'
                  }`}
                >
                  More
                </h3>
                <img className="h-24" src={arrow} alt="" />
              </a.div>

              <div className="relative h-0.5 overflow-hidden">
                <div className="absolute inset-0 h-0.5 bg-gradient-to-r from-transparent to-cactus-300" />
                <div className="absolute inset-0 h-0.5 animate-banner_top_line_right bg-gradient-to-l from-transparent to-cactus-500" />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="pb-24" />
    </section>
  );
};

const useHeroSpring = (hovered: boolean) =>
  useSpring({
    x: hovered ? '0' : '96px',
  });

export default Hero;
