import { RefObject, useEffect, useMemo, useState } from 'react';

type UseIsInViewPort = (ref: RefObject<Element>) => {
  isInViewport: boolean;
  observer: IntersectionObserver | null;
};

export const useIsInViewport: UseIsInViewPort = (ref) => {
  const [isInViewport, setIsInViewport] = useState(false);

  const observer = useMemo(() => {
    if (typeof document === 'undefined') {
      return null;
    }

    return new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      observer?.observe(ref.current);
    }

    return () => {
      observer?.disconnect();
    };
  }, [ref, observer]);

  return {
    isInViewport,
    observer,
  };
};
