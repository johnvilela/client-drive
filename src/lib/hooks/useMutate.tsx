import { useState } from 'react';

interface UseMutateParams<T> {
  method: (data: any) => Promise<T>;
}

interface UseMutateReturn<T> {
  data: T | null;
  mutate: (data: unknown) => Promise<void>;
  status: 'loading' | 'success' | 'error' | 'idle';
}

function useMutate<T>({ method }: UseMutateParams<T>): UseMutateReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<
    'loading' | 'success' | 'error' | 'idle'
  >('idle');

  const mutate = async (newData: unknown) => {
    setStatus('loading');
    try {
      const res = (await method(newData)) as T;

      setData(res);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return { data, mutate, status };
}

export default useMutate;
