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

  if (pathHasIndex) {
    Paths = Paths.filter((v) => v !== '/');
  }

  useEffect(() => {
    setIsMatched(
      () =>
        (pathHasIndex && pathname === '/') ||
        Paths.some(
          (path) => pathname.match(/(?<=\/)[a-zA-z]+/g)?.at(-1) === path
        )
    );
  }, [pathname]);

  return { isMatched };
};

export { usePathIsMatched, usePathsIsMatched };
