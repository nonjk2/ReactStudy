import { useState, useEffect } from "react";
import { AxiosError, AxiosInstance } from "axios";

type State<T> = {
  data?: T;
  error?: Error;
  isLoading: boolean;
};

const useFetch = <T = any>(api: AxiosInstance): State<T> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("");
        setData(response.data as T);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [api]);

  return { data, error, isLoading };
};

export default useFetch;
