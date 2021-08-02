import React,{useState,useRef , useEffect}  from 'react'

export default function RefUse() {
    const [name , setName ] = useState('')

    const renderCount = useRef(1);
    // now renderCount is an object 
    // renderCount = { current : 1 };

    

    useEffect( () => {
        renderCount.current++;
    } )
    // we passed no dependencies down here , so everytime app rerenders renderCount increases

    // why useRef?
    // here if we had defined renderCount using useState we would get into trouble.
    // in the useEffect we would write , on render increase value of the state ,
    // then when we render the page value of state will change and change in value of state will re-render the page , which will again change the value of state , which will then re-render the page .........  infinite loop

    // ref persists between renders and does no cause a re-render

    // ANOTHER USE OF USEREF  : STORING OLD DATA

    const prevName = useRef('')
    useEffect( () => {
        prevName.current = name;
    }, [name])

    // every time 'name' changes we store it in the ref and then update its value
    // in this way we can maintain the previous data
    // here also if we use state for prevName it will force re-renders , which is bad

    return (
        <div>
            <h1>useRef hook</h1>
            <input type="text" onChange= {e=> setName(e.target.value)} />
            <h2>Hi {name} .</h2>
            <h2>Previous name was {prevName.current}.</h2>
            <h2>Page has been rendered {renderCount.current} times.</h2>
        </div>
    )
}

// refs are similar to states but .. 
// change in ref does not trigger a re-render of the app
// refs persist in between renders
