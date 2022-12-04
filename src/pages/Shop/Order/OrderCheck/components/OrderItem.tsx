import Count from '@pages/Shop/components/Count';
import React from 'react';

type Props = {
  title: string;
  imgPath: string;
  remark: string;
  count: number;
  price: number;
  handleChangeCount: (n: number) => React.MouseEventHandler;
};

const OrderItem: React.FC<Props> = ({
  title,
  imgPath,
  remark,
  count,
  price,
  handleChangeCount,
}) => {
  return (
    <li className="mx-2 px-4 py-4">
      <div className="flex flex-col md:flex-row">
        <img
          className="h-64 w-64 rounded-xl object-cover"
          src={imgPath}
          alt=""
        />
        <div className="mt-10 ml-4 flex flex-col md:w-[calc(100%_-_256px)]">
          <p className="text-2xl">{title}</p>
          <p className="mt-2">{remark}</p>
          <div className="mt-6 flex flex-auto flex-row items-end justify-between text-lg">
            <Count count={count} handleChangeCount={handleChangeCount} />
            <p>小計: {price.toLocaleString()}元</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
