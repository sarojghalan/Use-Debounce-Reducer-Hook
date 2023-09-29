import { ChangeEvent, Dispatch } from "react";
import { useReducerInputValue } from "../useReducerInputValue";
import { useDebounceValue } from "../useDebounce";

export const useDebouncedInputValue = (
  defaultValue = "",
  delay = 1000
): [string, string, Dispatch<ChangeEvent<HTMLInputElement>>] => {
  const [value, handleChange] = useReducerInputValue(defaultValue);
  const debouncedValue = useDebounceValue(value, delay);

  return [value, debouncedValue, handleChange];
};
