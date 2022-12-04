/* eslint-disable react/no-unknown-property */
import Header from '@components/Header';
import SideNav from '@components/SideNav';
import { usePathsIsMatched } from '@hooks/usePath';
import React, { Suspense } from 'react';
import { useWindowSize } from 'react-use';
import Route from './Route';

function App() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const { isMatched } = usePathsIsMatched([
    '/',
    'feedback',
    'knowledge',
    'toy',
  ]);

  const EmptyCanvas = React.lazy(() => import('@components/EmptyCanvas'));

  // todo
  return (
    <div className="App relative h-auto min-h-screen bg-coconut-cream-50 text-justify text-gray-800">
      <Header isMobilc={isMobile} isTransparent={isMatched} />
      {!isMobile && <SideNav isTransparent={isMatched} />}

      {/* Loadding 圓形 裡面有一個圓長條旋轉 */}
      {/* 顧客好評 https://codesandbox.io/s/x8gvs?file=/src/App.js:2048-2058 */}
      {/* 有閒餘時間 改scroll bar css  */}
      {/* 景深效果 需要測試 */}
      <Route />

      <Suspense fallback={null}>
        <EmptyCanvas isMatched={isMatched} />
      </Suspense>
    </div>
  );
}

export default App;
