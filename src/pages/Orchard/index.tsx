import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Card from './components/Card';
import Data from './CardData';

import bg from '@assets/orchard/bg.png';
import cloud from '@assets/orchard/cloud.png';
import avacado from '@assets/orchard/avacado.png';

const Links = ['園主介紹', '果園環境', '生產流程'];

const index = () => {
  const ref = useRef<IParallax>(null);

  const handleGotoPage =
    (page: number): React.MouseEventHandler =>
    (e) => {
      e.preventDefault();
      if (ref.current) {
        ref.current.scrollTo(page);
      }
    };

  ('採收－剪蒂頭－裝保護套－裝箱秤重－寄出');

  return (
    <Parallax pages={3} ref={ref} className="inset-0 duration-300 ">
      <ParallaxLayer offset={0.5} className="-z-10" speed={0.8}>
        <img className="aspect-video w-screen object-cover" src={bg}></img>
      </ParallaxLayer>
      <ParallaxLayer offset={1.45} className="-z-10" speed={0.8}>
        <img className="aspect-video w-screen object-cover" src={bg}></img>
      </ParallaxLayer>
      <ParallaxLayer offset={2.35} className="-z-10" speed={0.8}>
        <img className="aspect-video w-screen object-cover" src={bg}></img>
      </ParallaxLayer>

      <>
        {[...Array(20)].map((_, i) => (
          <ParallaxLayer
            offset={0.2 + Math.random() / 4}
            speed={0.7 + Math.random() / 2}
            key={i}
          >
            <img
              className="relative"
              style={{
                top: Math.random() * 300,
                left: Math.random() * 2000,
                transform: `scale(${0.5 + Math.random()})`,
              }}
              src={cloud}
              alt=""
            />
          </ParallaxLayer>
        ))}
      </>

      <>
        {[...Array(5)].map((_, i) => (
          <ParallaxLayer
            offset={1 + Math.random() / 4}
            speed={0.7 + Math.random() / 2}
            key={i}
          >
            <img
              className="relative"
              style={{
                top: Math.random() * 300,
                left: Math.random() * 2000,
                transform: `
                  scale(${0.5 + Math.random()}) 
                  rotate(${(Math.random() - 0.5) * 120}deg)`,
              }}
              src={avacado}
              alt=""
            />
          </ParallaxLayer>
        ))}
      </>

      <ParallaxLayer
        sticky={{ start: 0, end: 3 }}
        className="pointer-events-none z-10"
      >
        <ul className="pointer-events-auto mx-auto flex justify-center divide-x-2 divide-gray-800 bg-coconut-cream-50 pt-24 font-medium md:pt-12 ">
          {Links.map((item, i) => (
            <li key={i}>
              <button
                className="px-4 py-2 hover:bg-gray-800 hover:text-slate-200"
                onClick={handleGotoPage(i)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </ParallaxLayer>

      <ParallaxLayer offset={0.3} speed={0.8}>
        <Card data={Data[0]} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.2} speed={0.8}>
        <Card data={Data[1]} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.25} speed={0.8}>
        <Card data={Data[2]} />
      </ParallaxLayer>
    </Parallax>
  );
};

export default index;
