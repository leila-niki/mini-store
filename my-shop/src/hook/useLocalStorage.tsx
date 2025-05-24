import { useEffect, useState } from "react"

export function useLocalStorage <T>(key: string, initialValue:T) {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    },[key, storedValue]);

    return [storedValue, setStoredValue];
}