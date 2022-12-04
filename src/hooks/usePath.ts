import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePathIsMatched = (path: string) => {
  const { pathname } = useLocation();
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    setIsMatched(
      () => path === pathname || (path !== '/' && pathname.includes(path))
    );
  }, [pathname]);

  return { isMatched };
};

const usePathsIsMatched = (Paths: string[]) => {
  const { pathname } = useLocation();
  const [isMatched, setIsMatched] = useState(false);

  const pathnameArr = pathname.split('/');

  const pathHasIndex = Paths.some((path) => path === '/');

  useEffect(() => {
    setIsMatched(
      () =>
        (pathHasIndex && pathname === '/') ||
        Paths.some(
          (path) =>
            (pathnameArr[pathnameArr.length - 1] ||
              pathnameArr[pathnameArr.length - 2]) === path // 避免不支援Array.prototype.at
        )
    );
  }, [pathname]);

  return { isMatched };
};

export { usePathIsMatched, usePathsIsMatched };
