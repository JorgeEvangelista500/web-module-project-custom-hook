import { useState } from "react";

const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(()=> {
        if (localStorage.getItem(key)) {
            return(JSON.parse(localStorage.getItem(key)))
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return(initialValue);
        }

    });

    const setStoredValuer = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    }

    return[value, setStoredValuer];
}

export default useLocalStorage;