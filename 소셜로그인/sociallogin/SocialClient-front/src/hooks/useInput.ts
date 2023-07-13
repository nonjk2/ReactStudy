import { ChangeEventHandler, useCallback, useState } from "react";

const useInput = (type = "default"): [string, ChangeEventHandler<HTMLInputElement>] => {
  const [value, setValue] = useState<string>("");

  const onChangeNumber = useCallback((InputValue: string) => {
    // if (InputValue.startsWith("0")) return; //숫자가 0이면 리턴
    const sliceValue = InputValue.startsWith("0") ? InputValue.slice(1) : InputValue;
    const changeValue = sliceValue.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //숫자만 나오게 리턴후 뒤에서부터 세자리마다 콤마로 리턴
    setValue(changeValue);
  }, []);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    switch (type) {
      case "default":
        return setValue(event.target.value);
      case "price":
        return onChangeNumber(event.target.value);
      default:
        return;
    }
  }, []);
  return [value, onChange];
};
export default useInput;
