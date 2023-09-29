import React from "react";

export function useDebounceValue<V>(value: V, delay = 1000): V {
  const [debouncedValue, setDebounceValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

