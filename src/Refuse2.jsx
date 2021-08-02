import React,{useState,useRef , useEffect}  from 'react'

export default function Refuse2() {

    const [name , setName ] = useState('')
    const inputRef = useRef()
    // <input ref={inputRef} type="text" onChange= {e=> setName(e.target.value)} />
    // now inputRef can be used to reference to the input element

    // We want that when we click on focus , the input gets high-lighted and cursor moves to the input field and we can directly start typing

    function focusInput(){
        // general way
        /**
         const inp = document.querySelector('input')
         inp.focus()
         */

         // react way

        //  const inp = inputRef.current;
        //  inp.focus();

        /// inputRef.current = document.querySelector('input') == <input type="text">
        console.log(inputRef.current)
        inputRef.current.focus()


        // we can also update value of inp

     //>>  inputRef.current.value="I came here from ref"

        // But this does not appear in hi {name} as his I came here from ref
        // because refs do not refresh the state
        // so its advised to not use refs for these kind of actions

        // avoid manual value mangement 
        // manage values through states
    }

    return (
        <div>
            <h1>useRef hook for referencing html elements</h1>
            <h2>This is basically the biggest use of useRef</h2>
            <input ref={inputRef} type="text" onChange= {e=> setName(e.target.value)} />
            <h2>Hi {name} .</h2>
            <div>
                <button onClick={focusInput}>Focus</button>
            </div>
        </div>
    )
}

