import React, { useImperativeHandle, useRef } from 'react';
import { useSpring, animated as a, easings } from 'react-spring';

/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as AvocadoSvg } from '@assets/img/shop/avocado.svg';
import { useOrderSumCountContext } from '@pages/Shop/OutletContext';

type Ref = {
  avocadoGotoTarget: (
    OriginX: number,
    OriginY: number
  ) => (
    Target: HTMLAnchorElement
  ) => (updataTagetState: (n: number) => void) => void;
};

const Avocado = (_: unknown, ref: React.ForwardedRef<Ref>) => {
  const [avocadoSprings, avocadoSpringsRef] = useSpring(() => ({
    display: 'none',
    top: 0,
    left: 0,
  }));

  const OrderSumCount = useOrderSumCountContext();
  const count = useRef(0);
  count.current = OrderSumCount;

  useImperativeHandle(
    ref,
    () => ({
      avocadoGotoTarget:
        (OriginX, OriginY) => (Target) => (updataCartState) => {
          avocadoSpringsRef.set({
            display: 'block',
            top: OriginY - 25,
            left: OriginX - 25,
          });

          avocadoSpringsRef.start({
            top: Target.offsetTop + Target.clientHeight / 4,
            left: Target.offsetLeft + Target.clientWidth / 4,
            config: {
              easing: easings.easeInOutExpo,
              duration: 1500,
            },
            onRest: (animationResult, ref) => {
              if (animationResult.value.display !== 'none') {
                ref.set({
                  display: 'none',
                });
              }

              updataCartState(count.current);
            },
          });
        },
    }),
    []
  );

  return (
    <a.div className="fixed left-0 top-0 z-50" style={{ ...avocadoSprings }}>
      <AvocadoSvg width="48px" height="48px" />
    </a.div>
  );
};

export default React.forwardRef(Avocado);
