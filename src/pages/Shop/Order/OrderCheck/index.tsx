import React from 'react';
import OrderItem from './components/OrderItem';
import {
  useHandleChangeOrderCount,
  useOrderContext,
  useOrderSumPriceContext,
} from '../../OutletContext';

type Props = {
  handleNextSetp: React.MouseEventHandler;
};

const index: React.FC<Props> = ({ handleNextSetp }) => {
  const order = useOrderContext();
  const sumPrice = useOrderSumPriceContext();

  const handleChangeOrderCount = useHandleChangeOrderCount();

  const handleChangeCount =
    (idx: number, currCount: number) =>
    (addCount: number): React.MouseEventHandler =>
    (e) => {
      e.preventDefault();
      handleChangeOrderCount(idx, currCount + addCount);
    };

  return (
    <>
      <ul className="divide-y-2 divide-slate-700 ">
        {order.map(({ title, imgPath, remark, count, price }, idx) => (
          <OrderItem
            title={title}
            imgPath={imgPath}
            remark={remark}
            count={count}
            price={price}
            handleChangeCount={handleChangeCount(idx, count)}
            key={title}
          />
        ))}
      </ul>
      <hr className="mt-6 w-full border-t-2 border-slate-700" />
      <p className="mt-4 mr-6  pb-6 text-right text-xl">
        {sumPrice !== 0 && (
          <button
            className="mr-8 rounded-lg bg-cactus-300 p-2 duration-300 hover:bg-cactus-600 hover:text-slate-200"
            onClick={handleNextSetp}
          >
            確認
          </button>
        )}
        <span className="text-rose-600">
          總計: {sumPrice.toLocaleString()}元
        </span>
      </p>
    </>
  );
};

export default index;
