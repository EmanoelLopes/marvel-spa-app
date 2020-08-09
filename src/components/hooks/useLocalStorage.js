import { useState, useEffect } from 'react';

const useLocalStorage = (defaultValue, key) => {
  const [storeValue, setStoreValue] = useState(() => {
    const value = window.localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storeValue));
  }, [key, storeValue]);
  return [storeValue, setStoreValue];
};

export default useLocalStorage;

