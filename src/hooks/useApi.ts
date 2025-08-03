import { useState, useEffect } from 'react';
import { apiClient } from '../utils/api';

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useApi = <T>(url: string, immediate: boolean = true): UseApiResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiClient.get<T>(url);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [url, immediate]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

export const usePost = <T, U = any>(url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const post = async (data: U): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiClient.post<T>(url, data);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    post,
    loading,
    error,
  };
};

export const usePut = <T, U = any>(url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const put = async (data: U): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiClient.put<T>(url, data);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    put,
    loading,
    error,
  };
};

export const useDelete = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteItem = async (): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      await apiClient.delete(url);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    delete: deleteItem,
    loading,
    error,
  };
};
