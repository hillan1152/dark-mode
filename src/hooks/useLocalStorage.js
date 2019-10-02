import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    if (typeof key !== 'string'){
        // throw new Error ('Invalid Params')
        console.log("string")
    }
    const [storedValue, setStoredValue] = useState( () => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setStoredValue];
}