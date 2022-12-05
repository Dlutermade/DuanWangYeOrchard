import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import OwnerIntroduction from './components/OwnerIntroduction';

import bg from '@assets/orchard/bg.png';
import OrchardEnvironment from './components/OrchardEnvironment';

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

  return (
    <Parallax pages={3} ref={ref} className="inset-0 duration-300 ">
      <ParallaxLayer offset={0.8} className="-z-10" speed={-0.1}>
        <div className="relative h-screen">
          <img
            className="absolute bottom-0 aspect-video w-screen object-cover"
            src={bg}
          ></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 0, end: 3 }} className="z-10">
        <ul className="relative top-24 mx-auto flex w-96 justify-center gap-8 md:top-12">
          <li>
            <button onClick={handleGotoPage(0)}>園主介紹</button>
          </li>
          <li>
            <button onClick={handleGotoPage(1)}>果園環境</button>
          </li>
          <li>
            <button onClick={handleGotoPage(2)}>生產流程</button>
          </li>
        </ul>
      </ParallaxLayer>

      <ParallaxLayer offset={0.3} speed={0.8}>
        <OwnerIntroduction />
      </ParallaxLayer>

      <ParallaxLayer offset={1.15} speed={0.8}>
        <OrchardEnvironment />
      </ParallaxLayer>
    </Parallax>
  );
};

export default index;
