import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import { NewsList } from './newsData';

const LatestNews = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  const handleChangeIdx: (idx: number) => React.MouseEventHandler =
    (idx) => (e) => {
      e.preventDefault();
      setOpenIdx(() => (idx === openIdx ? -1 : idx));
    };

  useEffect(() => {
    document.body.style.overflowY = 'overlay';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <div className="mx-auto w-80 rounded-xl bg-[#93c796b8] px-4 py-6 shadow-md shadow-gray-800 md:w-[600px] md:shadow-lg md:shadow-gray-800">
      <h1 className="text-center text-xl md:text-2xl">LatestNews</h1>
      <hr className="my-4 rounded-full border-t-4 border-gray-700" />
      <div className="mt-6 flex flex-col divide-y-2 divide-gray-700">
        {NewsList.map(({ title, month, day, imgPath, content }, idx) => (
          <Card
            title={title}
            date={{ month, day }}
            imgPath={imgPath}
            content={[...content]}
            opened={openIdx === idx}
            onClick={handleChangeIdx(idx)}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
