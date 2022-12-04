import React from 'react';
import Count from '../../components/Count';

import x from '@assets/shop/x.png';
import cart01 from '@assets/shop/cart01.png';

type Props = {
  isDisplay: boolean;
  title: string;
  imgPaths: string[];
  labels: string[];
  gram: number;
  price: number;
  remark: string;
  count: number;
  handleChangeCount: (n: number) => React.MouseEventHandler;
  handleAddCart: React.MouseEventHandler;
  onClickClosedPopupCard: React.MouseEventHandler;
};

const PopupCard: React.FC<Props> = ({
  isDisplay,
  title,
  imgPaths,
  labels,
  gram,
  price,
  remark,
  count,
  handleChangeCount,
  handleAddCart,
  onClickClosedPopupCard,
}) => {
  const imgIdx = 0;

  return (
    <>
      {isDisplay && (
        <div
          className="fixed inset-0 z-40 flex h-screen w-screen items-center justify-center bg-slate-900/60"
          style={{ backdropFilter: 'blur(1px)' }}
          onClick={onClickClosedPopupCard}
        >
          {/* Card */}
          <div
            className="h-[618px] w-80 overflow-hidden rounded-xl bg-coconut-cream-100 text-center shadow-md shadow-gray-900/80 md:h-[360px] md:w-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="ml-auto mr-2 mt-2 h-8 cursor-pointer"
              src={x}
              onClick={onClickClosedPopupCard}
              alt=""
            />

            <div className="flex flex-col md:mb-3 md:-mt-3 md:flex-row">
              <div className="group relative mx-auto mt-2 block h-64 w-64 overflow-hidden rounded-2xl md:ml-4">
                <img
                  className="aspect-square h-full w-full object-cover"
                  src={imgPaths[imgIdx]}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/75 to-transparent" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>

              <div className="mx-auto mt-4">
                <p className="text-2xl font-semibold text-cactus-600">
                  {title}
                </p>

                <ul className="mt-2 space-y-2">
                  {labels.map((item, idx) => (
                    <li
                      className="relative mx-auto block w-52 bg-slate-100 py-1 pl-4 before:absolute before:inset-0 before:h-8 before:w-8 before:bg-cactus-500 md:w-72"
                      key={idx}
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col items-center justify-center md:flex-row md:gap-4">
                  <div className="mt-4">
                    <p className="space-x-4 font-bold">
                      <span>{gram}斤</span>
                      <span>{price}元</span>
                    </p>
                    <p className="mt-1">{remark}</p>
                  </div>

                  <Count count={count} handleChangeCount={handleChangeCount} />
                </div>
              </div>
            </div>

            <button
              className="group mt-2 h-10 w-full space-x-3 bg-cactus-600 font-medium text-slate-200 md:mt-4"
              onClick={handleAddCart}
            >
              <img
                className="inline h-6 w-6 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.65)]"
                src={cart01}
                alt=""
              />
              <span>加入購物車</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupCard;
