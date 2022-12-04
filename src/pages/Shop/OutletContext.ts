import {
  useNumberRangeValidator,
  useValidatorCompose,
} from '@hooks/useValidators';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductData from './ProductData';

type OrderData = { productIdx: number; count: number };

const useOredrInjection = () => useState<OrderData[]>([]);

type State = ReturnType<typeof useOredrInjection>;

type OrderContextType = {
  order: State[0];
  setOrder: State[1];
};

const useOrderContext = () => {
  const { order } = useOutletContext<OrderContextType>();

  return order.map((item) => ({
    title: ProductData[item.productIdx].title,
    imgPath: ProductData[item.productIdx].imgPaths[0],
    remark: ProductData[item.productIdx].remark,
    count: item.count,
    price: ProductData[item.productIdx].price.value * item.count,
  }));
};

const useOrderSumCountContext = () => {
  const { order } = useOutletContext<OrderContextType>();

  return order.reduce((prev, curr) => prev + curr.count, 0);
};

const useOrderSumPriceContext = () => {
  const { order } = useOutletContext<OrderContextType>();

  return order.reduce(
    (prev, curr) =>
      prev + ProductData[curr.productIdx].price.value * curr.count,
    0
  );
};

const useHandleAddOrder = () => {
  const { order, setOrder } = useOutletContext<OrderContextType>();

  return (targetProductIdx: number, addCount: number) =>
    ((idx: number) =>
      setOrder((prev) =>
        idx === -1
          ? [{ productIdx: targetProductIdx, count: addCount }, ...prev]
          : [
              { ...prev[idx], count: prev[idx].count + addCount }, // 最新加入的在上面
              ...prev.slice(0, idx),
              ...prev.slice(idx + 1),
            ]
      ))(order.findIndex(({ productIdx }) => productIdx === targetProductIdx));
};

const countValidator = useValidatorCompose(
  useNumberRangeValidator(0, Infinity)
);

const useHandleChangeOrderCount = () => {
  const { setOrder } = useOutletContext<OrderContextType>();

  return (idx: number, Count: number) => {
    setOrder((prev) =>
      countValidator(Count)
        ? [
            ...prev.slice(0, idx),
            { ...prev[idx], count: Count },
            ...prev.slice(idx + 1),
          ]
        : prev
    );

    handleRemoveEmptyOrderCount(setOrder);
  };
};

const handleRemoveEmptyOrderCount = (setOrder: OrderContextType['setOrder']) =>
  setOrder((prevOrder) =>
    prevOrder.reduce(
      (prev, curr) => (curr.count === 0 ? prev : [...prev, { ...curr }]),
      [] as OrderData[]
    )
  );

const useProductOrder = () => {
  const { order } = useOutletContext<OrderContextType>();

  return order.reduce(
    (prev, curr) => ({
      product:
        prev.product + `${ProductData[curr.productIdx].title}: ${curr.count} `,
      price: prev.price + ProductData[curr.productIdx].price.value * curr.count,
    }),
    {
      product: '',
      price: 0,
    }
  );
};

const useHandleClearOrder = () => {
  const { setOrder } = useOutletContext<OrderContextType>();

  return () => setOrder([]);
};

export {
  useOredrInjection,
  useOrderContext,
  useOrderSumCountContext,
  useOrderSumPriceContext,
  useProductOrder,
  useHandleChangeOrderCount,
  useHandleAddOrder,
  useHandleClearOrder,
};
