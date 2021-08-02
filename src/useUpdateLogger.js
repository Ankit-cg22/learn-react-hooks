// Custom hook : console logs the value every time it is updated

import {useEffect} from 'react'

export default function useUpdateLogger(value) {
    useEffect(()=>{
        console.log(value)
    },[value])
}
