import axios from "axios";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
import { useLocation } from "react-router-dom";
const DATA_URI = "https://api.thecatapi.com/v1/images/search";
const API_KEY =
  "live_lfQTaUxQffCm1GHkyoTZgJAnAbl3x2YPXoXeo9zIqufdrNhtFgzuOcHK0hUIFd99";
const usePageNation = (page = 1, limit = 6) => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchCat = async () => {
      setLoading(true);
      try {
        const response = await axios.get(DATA_URI, {
          headers: {
            "x-api-key": API_KEY,
          },
          params: {
            page: page,
            limit: limit,
            order: "ASC",
          },
        });
        setCats(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchCat();
  }, [page, limit]);

  return {
    cats,
    loading,
    error,
  };
};
export default usePageNation;
