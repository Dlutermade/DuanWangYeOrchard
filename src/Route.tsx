import Loadding from '@components/Loadding';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  const Portal = React.lazy(() => import('@pages/Portal/inedx'));
  const Home = React.lazy(() => import('@pages/Home/index'));
  const LatestNews = React.lazy(() => import('@pages/LatestNews/index'));

  const Orchard = React.lazy(() => import('@pages/Orchard/index'));

  const Knowledge = React.lazy(() => import('@pages/Knowledge/index'));
  const KnowledgeIndex = React.lazy(
    () => import('@pages/Knowledge/Index/index')
  );
  const KnowledgeCookbook = React.lazy(
    () => import('@pages/Knowledge/Cookbook/index')
  );

  const Shop = React.lazy(() => import('@pages/Shop/index'));
  const ShopIndex = React.lazy(() => import('@pages/Shop/Index/index'));
  const ShopOrder = React.lazy(() => import('@pages/Shop/Order/index'));

  const Toy = React.lazy(() => import('@pages/Toy/index'));

  const Feedback = React.lazy(() => import('@pages/Feedback/index'));

  return (
    <main className="mx-auto w-full max-w-[800px] px-4 pb-16 md:pl-20 md:pr-0 lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]">
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loadding />}>
              <Portal />
            </Suspense>
          }
        />

        <Route
          path="home"
          element={
            <Suspense fallback={<Loadding />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="latestNews"
          element={
            <Suspense fallback={<Loadding />}>
              <LatestNews />
            </Suspense>
          }
        />

        <Route
          path="orchard"
          element={
            <Suspense fallback={<Loadding />}>
              <Orchard />
            </Suspense>
          }
        />

        <Route
          path="knowledge"
          element={
            <Suspense fallback={<Loadding />}>
              <Knowledge />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loadding />}>
                <KnowledgeIndex />
              </Suspense>
            }
          />
          <Route
            path="cookbook"
            element={
              <Suspense fallback={<Loadding />}>
                <KnowledgeCookbook />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="shop"
          element={
            <Suspense fallback={<Loadding />}>
              <Shop />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loadding />}>
                <ShopIndex />
              </Suspense>
            }
          />
          <Route
            path="order"
            element={
              <Suspense fallback={<Loadding />}>
                <ShopOrder />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="toy"
          element={
            <Suspense fallback={<Loadding />}>
              <Toy />
            </Suspense>
          }
        />

        <Route
          path="feedback"
          element={
            <Suspense fallback={<Loadding />}>
              <Feedback />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={<Suspense fallback={<Loadding />}>Error</Suspense>}
        />
      </Routes>
    </main>
  );
};

export default React.memo(Main);
