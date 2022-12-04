import {
  useNumberRangeValidator,
  useValidatorCompose,
} from '@hooks/useValidators';
import React, { useEffect, useRef, useState } from 'react';
import { useTransition } from 'react-spring';
import Card from './components/Card';
import PopupCard from './components/PopupCard';
import ProductData from '../ProductData';
import { Link } from 'react-router-dom';
import { useHandleAddOrder, useOrderSumCountContext } from '../OutletContext';

import { ReactComponent as Cart1 } from '../../../assets/img/shop/cart1.svg';
import { ReactComponent as Cart2 } from '../../../assets/img/shop/cart2.svg';
import { ReactComponent as Cart3 } from '../../../assets/img/shop/cart3.svg';
import Avocado from './components/Avocado';

const Cart = [
  <Cart1 width="6rem" height="6rem" key={0} />,
  <Cart2 width="6rem" height="6rem" key={1} />,
  <Cart3 width="6rem" height="6rem" key={2} />,
];

const index = () => {
  const [displayPopupCard, setDisplayPopupCard] = useState(false);
  const [popupCardIdx, setyPopupCardIdx] = useState(0);
  const [productsCount, setProductsCount] = useState(
    [...Array(ProductData.length)].map(() => 1)
  );
  const [cartState, setCartState] = useState(0);
  const handleAddOredr = useHandleAddOrder();

  const cartRef = useRef<HTMLAnchorElement>(null);
  const avocadoRef = useRef<React.ElementRef<typeof Avocado>>(null);

  const orderSumCount = useOrderSumCountContext();

  useEffect(() => {
    setCartState(() => (orderSumCount > 2 ? 2 : orderSumCount));
  }, []);

  const cardTransition = useCardTransition();

  const countValidator = useValidatorCompose(useNumberRangeValidator(1, 10));

  const handleClickOpenPopupCard =
    (idx: number): React.MouseEventHandler =>
    (e) => {
      e.preventDefault();
      setyPopupCardIdx(() => idx);
      setDisplayPopupCard(() => true);
    };

  const handleClickClosedPopupCard: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setDisplayPopupCard(() => false);
  };

  const handleChangeCount =
    (idx: number) =>
    (n: number): React.MouseEventHandler =>
    (e) => {
      e.preventDefault();
      setProductsCount((prev) =>
        countValidator(prev[idx] + n)
          ? [...prev.slice(0, idx), prev[idx] + n, ...prev.slice(idx + 1)]
          : prev
      );
    };

  const handleUpdataCartState = (n: number) =>
    setCartState(() => (n > 2 ? 2 : n));

  const handleAddCart =
    (idx: number, count: number): React.MouseEventHandler =>
    (e) => {
      e.preventDefault();

      handleAddOredr(idx, count);

      setProductsCount((prev) => [
        ...prev.slice(0, idx),
        1,
        ...prev.slice(idx + 1),
      ]);

      if (cartRef.current && avocadoRef.current) {
        avocadoRef.current.avocadoGotoTarget(
          e.clientX,
          e.clientY
        )(cartRef.current)(handleUpdataCartState);
      }
    };

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
      {cardTransition((springs, { title, imgPaths, price }, state) => (
        <Card
          title={title}
          imgPath={imgPaths[0]}
          gram={price.gram}
          price={price.value}
          count={productsCount[state.key]}
          handleChangeCount={handleChangeCount(state.key)}
          handleAddCart={handleAddCart(state.key, productsCount[state.key])}
          onClickOpenPopupCard={handleClickOpenPopupCard(state.key)}
          style={{ ...springs }}
          key={state.key}
        />
      ))}

      <PopupCard
        isDisplay={displayPopupCard}
        title={ProductData[popupCardIdx].title}
        labels={ProductData[popupCardIdx].labels}
        imgPaths={ProductData[popupCardIdx].imgPaths}
        gram={ProductData[popupCardIdx].price.gram}
        price={ProductData[popupCardIdx].price.value}
        remark={ProductData[popupCardIdx].remark}
        count={productsCount[popupCardIdx]}
        handleChangeCount={handleChangeCount(popupCardIdx)}
        handleAddCart={handleAddCart(popupCardIdx, productsCount[popupCardIdx])}
        onClickClosedPopupCard={handleClickClosedPopupCard}
      />

      <Avocado ref={avocadoRef} />

      <Link
        ref={cartRef}
        to="/shop/order"
        className="fixed right-1 bottom-0 scale-75 sm:right-6 sm:bottom-3 sm:scale-100"
      >
        {Cart[cartState]}
      </Link>
    </div>
  );
};

const useCardTransition = () =>
  useTransition(ProductData, {
    from: (_, idx) => ({
      x: `-${160 + 336 * idx}px`,
    }),
    enter: { x: '0%' },
    config: (_, idx) => ({
      duration: 250 + (150 * idx) / ProductData.length,
    }),
    keys: (item) => ProductData.indexOf(item),
  });

export default index;
