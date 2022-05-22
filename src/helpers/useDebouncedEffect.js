import { useEffect, useCallback } from 'react';

export const useDebouncedEffect = (effect, delay = 1000, deps = []) => {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => callback(), delay);
    return () => clearTimeout(handler);
  }, [callback, delay]);
};
