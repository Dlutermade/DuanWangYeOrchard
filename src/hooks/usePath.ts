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

  const pathHasIndex = Paths.some((path) => path === '/');

  useEffect(() => {
    setIsMatched(
      () =>
        (pathHasIndex && pathname === '/') ||
        Paths.some(
          (path) =>
            (pathname.split('/').at(-1) || pathname.split('/').at(-2)) === path
        )
    );
  }, [pathname]);

  return { isMatched };
};

export { usePathIsMatched, usePathsIsMatched };
