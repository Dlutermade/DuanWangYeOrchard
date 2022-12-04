import React from 'react';
import { useSpring, animated as a } from 'react-spring';

type Props = {
  title: string;
  date: { month: number; day: number };
  imgPath: string;
  content: string[];
  opened: boolean;
  onClick: React.MouseEventHandler;
};

const Card: React.FC<Props> = ({
  title,
  date,
  imgPath,
  content,
  opened,
  onClick,
}) => {
  const springs = useContentDisplay(opened);
  return (
    <div className="py-4">
      <h1 className="text-lg">
        <button
          className="hover:drop-shadow-[0_0_2px_rgba(0,0,0,0.2)]"
          onClick={onClick}
        >
          <div
            className={`inline-block h-0 w-0  border-[6px] border-transparent border-l-gray-800 duration-300 ${
              opened && 'mr-2 rotate-90'
            }`}
          ></div>
          {title}
          <span className="px-1">---</span>
          <small>
            {date.month}月{date.day}日
          </small>
        </button>
      </h1>
      <a.div style={{ ...springs }}>
        <img className="mx-auto my-4 w-80 rounded-xl" src={imgPath} alt="" />
        <div className="mx-6 space-y-3 text-justify">
          {content.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </a.div>
    </div>
  );
};

const useContentDisplay = (opened: boolean) =>
  useSpring({
    from: {
      display: 'none',
    },
    to: async (
      next: (arg0: { opacity?: number; display?: string }) => unknown
    ) => {
      if (opened) {
        await next({ display: 'block' });
        await next({ opacity: 1 });
      } else {
        await next({ opacity: 0 });
        await next({ display: 'none' });
      }
    },
    config: {
      duration: opened ? 350 : 200,
    },
  });

export default Card;
