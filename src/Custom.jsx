import React,{useState} from 'react'
import useLocalStorage from './useLocalStorage'
import useUpdateLogger from './useUpdateLogger'

export default function Custom() {

    const [name , setName]=useLocalStorage('name', '')
    // we will use this hook to store data in the local storage in a key value pair

    useUpdateLogger(name);
    // everytime name changes , this custom hook console logs it

    return (
        <div>
            <h1>Custom hook</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

// if we use to store useState , on refreshing the value is gone
// we will build a custom hook which will store the value in local storage
// so the input value persists even on refreshing
