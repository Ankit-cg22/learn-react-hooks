// Here we will define our custom hook
// This hook helps to store data in local storage
// We will build it similar to the useState
// we will return the variable and update funtion ,eg: var and setVar

import { useState , useEffect } from "react";

// function to retrieve saved data from local storage

function getSavedValue(key , initialValue){
    const savedValue = JSON.parse(localStorage.getItem(key));
   
    if(savedValue)return savedValue;

    //useState can also take funtions

    if( initialValue instanceof Function )return initialValue();

    return initialValue

    //if savedValue is null we return the initial value
}



export default function useLocalStorage(key , initialValue) {

    // we will use this hook to store data in the local storage in a key value pair

    const [value, setValue] = useState(()=>{
        return getSavedValue(key , initialValue) 
    })

    useEffect( () => {
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value , setValue]
}
