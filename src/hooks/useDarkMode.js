import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    
    // const handleChanges = key => {
    //     setDarkMode(key);
    // } 

    useEffect((e) => {
        
        if(darkMode === true){
            document.querySelector('body').classList.add('dark-mode');
            
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }   
    }, [darkMode])
    return [darkMode, setDarkMode];
}

export default useDarkMode;