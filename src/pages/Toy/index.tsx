import { Canvas } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import RadioGroup from './components/RadioGroup';
import Scene from './components/Scene';

const hand = ['手1', '手2', '手3'];
const foot = ['腳1', '腳2', '腳3'];

const handleChangeColor =
  (
    setChangeColor: (s: string) => void
  ): React.ChangeEventHandler<HTMLInputElement> =>
  (e) => {
    e.preventDefault();
    setChangeColor(e.target.value);
  };

const index = () => {
  const sceneRef = useRef<React.ElementRef<typeof Scene>>(null);
  const [handIdx, setHadnIdx] = useState(0);
  const [footIdx, setFootIdx] = useState(0);

  const [handColor, setHandColor] = useState('#64cb82');
  const [footColor, setFootColor] = useState('#64cb82');
  const [skinColor, setSkinColor] = useState('#74ad57');
  const [pulpColor, setPulpColor] = useState('#eddaa8');
  const [seedColor, setSeedColor] = useState('#853817');

  const handleChangeHandColor = handleChangeColor(setHandColor);

  const handleChangeFootColor = handleChangeColor(setFootColor);

  const handleChangeSkinColor = handleChangeColor(setSkinColor);

  const handleChangePulpColor = handleChangeColor(setPulpColor);

  const handleChangeSeedColor = handleChangeColor(setSeedColor);

  const handleDownloadClick: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    if (sceneRef.current) {
      const link = document.createElement('a');
      link.download = 'filename.jpg';
      link.href = await sceneRef.current.SceneToJpg();
      link.click();
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border-2 border-gray-800 bg-coconut-cream-100 shadow-lg shadow-slate-700">
      <div className="relative mt-6 h-[600px]">
        <Canvas shadows>
          <Scene
            skinColor={skinColor}
            pulpColor={pulpColor}
            seedColor={seedColor}
            handIdx={handIdx}
            handColor={handColor}
            footIdx={footIdx}
            footColor={footColor}
            ref={sceneRef}
          />
        </Canvas>
      </div>
      <div className="mt-6 pb-16 text-lg">
        <div className="flex flex-grow-0 flex-col md:flex-row">
          <label className="ml-6 mt-2 inline-block text-xl">
            <span className="mr-4">雙手的顏色</span>
            <input
              type="color"
              value={handColor}
              onChange={handleChangeHandColor}
            />
          </label>

          <label className="ml-6 mt-2 inline-block text-xl">
            <span className="mr-4">雙腳的顏色</span>
            <input
              type="color"
              value={footColor}
              onChange={handleChangeFootColor}
            />
          </label>

          <label className="ml-6 mt-2 inline-block text-xl">
            <span className="mr-4">果皮的顏色</span>
            <input
              type="color"
              value={skinColor}
              onChange={handleChangeSkinColor}
            />
          </label>

          <label className="ml-6 mt-2 inline-block text-xl">
            <span className="mr-4">果肉的顏色</span>
            <input
              type="color"
              value={pulpColor}
              onChange={handleChangePulpColor}
            />
          </label>
          <label className="ml-6 mt-2 inline-block text-xl">
            <span className="mr-4">果實的顏色</span>
            <input
              type="color"
              value={seedColor}
              onChange={handleChangeSeedColor}
            />
          </label>
        </div>

        <RadioGroup
          className="ml-6 mt-4"
          label="雙手的類型"
          option={hand}
          value={handIdx}
          changeValue={setHadnIdx}
        />
        <RadioGroup
          className="ml-6"
          label="雙腳的類型"
          option={foot}
          value={footIdx}
          changeValue={setFootIdx}
        />

        <button
          className="ml-6 mt-6 rounded-lg bg-cactus-300 px-4 py-2 text-lg md:text-xl"
          onClick={handleDownloadClick}
        >
          下載照片
        </button>
      </div>
    </div>
  );
};

export default index;
