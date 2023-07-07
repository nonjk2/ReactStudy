import axios from "axios";
import { useEffect, useState } from "react";
const KaKaoconfig = {
  kakaoURL: import.meta.env.VITE_KAKAO_URL,
  kakaoKEY: import.meta.env.VITE_KAKAO_API_KEY,
};

const useSearch = (inputValue, category) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const FetchSearch = async () => {
      if (!inputValue || inputValue.trim() === "") {
        setData([]);
        return;
      }
      try {
        const response = await axios.get(
          `${KaKaoconfig.kakaoURL}/${category}`,
          {
            headers: {
              Authorization: `KakaoAK ${KaKaoconfig.kakaoKEY}`,
            },
            params: { query: inputValue },
          }
        );
        setData(response.data.documents);
      } catch (error) {
        setError(error);
      }
    };
    FetchSearch();
  }, [inputValue, category]);

  return [data, error];
};
export default useSearch;
