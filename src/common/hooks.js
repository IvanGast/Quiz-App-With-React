import { useEffect, useRef } from 'react';

export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export function useWhenFinished(callback, { isLoading, error }) {
  const previousLoadingStatus = usePrevious(isLoading);

  useEffect(() => {
    if (previousLoadingStatus === true && isLoading === false && !error) {
      callback();
    }
  }, [callback, isLoading, error, previousLoadingStatus]);
}
