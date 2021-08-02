import React from 'react'
import { useState , useEffect } from 'react'

// lets look at a complex form of useEffect

export default function UseEffectComplex() {

    const [windowWidth  , setWindowWidth ] = useState( window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect( () => {
        window.addEventListener('resize' , handleResize)

        return () => {
            window.removeEventListener('resize' , handleResize)
        }
    } , [])

    // whenever useEffect is fired , the content inside the  return( ---- ) is executed first
    // so we can use it as a cleaner
    // remove any useEffects from precious call , unsubscribe from api calls that we made in last call etc
    // also whenever our app un-mounts , the return is called
 
    return (
        <div>
            {windowWidth}
        </div>
    )
}
