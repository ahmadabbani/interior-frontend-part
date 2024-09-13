import { useEffect, useState } from "react";
import { fetchApi } from "./fetchApi";

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchApi.get(endPoint);
        setData(res.data.data || []);
        console.log(res.data.data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error
            : new Error("An unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endPoint]);

  return { data, loading, error };
};

export default useFetch;
