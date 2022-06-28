import { useEffect, useState } from 'react';

function getSavedValue( key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  // in case the initial value is a function
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}


export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value])

  return [value, setValue];
}