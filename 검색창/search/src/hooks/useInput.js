import { useCallback, useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, onChange, setValue];
};
export default useInput;
