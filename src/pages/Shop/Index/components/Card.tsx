import { animated as a, SpringValue } from 'react-spring';
import React from 'react';
import Count from '../../components/Count';

import icons8_circled_up_right_24 from '@assets/shop/icons8-circled-up-right-24.png';
import cart01 from '@assets/shop/cart01.png';

type Props<T> = {
  title: string;
  imgPath: string;
  gram: number;
  price: number;
  count: number;
  handleChangeCount: (n: number) => React.MouseEventHandler;
  handleAddCart: React.MouseEventHandler;
  onClickOpenPopupCard: React.MouseEventHandler;
  style: { [a: string]: SpringValue<T> };
};

const Card: React.FC<Props<string>> = ({
  title,
  imgPath,
  gram,
  price,
  count,
  handleChangeCount,
  handleAddCart,
  onClickOpenPopupCard,
  style,
}) => {
  return (
    <a.div
      className="h-[408px] w-80 overflow-hidden rounded-xl bg-coconut-cream-100 text-center shadow-md shadow-gray-400/80"
      style={{ ...style }}
    >
      <button
        className="group relative mx-auto mt-8 block h-64 w-64 overflow-hidden rounded-2xl"
        onClick={onClickOpenPopupCard}
      >
        <img className="h-full w-full object-cover" src={imgPath} alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/75 to-transparent" />
        <img
          className="absolute top-1.5 right-1.5 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
          src={icons8_circled_up_right_24}
          alt=""
        />
        <p className="absolute inset-x-0 bottom-4 mx-auto text-2xl font-medium text-slate-200 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
          {title}
        </p>
      </button>

      <p className="mt-4 space-x-4 font-bold">
        <span>{gram}斤</span>
        <span>{price}元</span>
      </p>

      <Count count={count} handleChangeCount={handleChangeCount} />

      <button
        className="group mt-2 h-10 w-full space-x-3 bg-cactus-600 py-1 font-medium text-slate-200"
        onClick={handleAddCart}
      >
        <img
          className="inline h-6 w-6 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.65)]"
          src={cart01}
          alt=""
        />
        <span>加入購物車</span>
      </button>
    </a.div>
  );
};

export default Card;
