import React , {useState , useMemo , useEffect} from 'react'

/**
 useMemo ->Memoization
 Cache certain values so that we do not have to re calculate them every time
 slowMult is a pure function => if we give input 'x' we get output 'y' every single time , no matter what
            -> Functions that give same output for same input every single time.
So we memoize the value of number and doubleNum call slowMult only if value of number has changed from last time

 */

export default function MemoUse() {
    const [number , setNumber] = useState(0);
    const [dark , setDark] = useState('black');

    // const doubleNum = slowMult(number);
    
    const doubleNum = useMemo( () => {
        return slowMult(number);
    } , [number])

    // const themeStyle =
    //         {
    //             backgroundColor : dark ? "black" : "white" ,
    //             color : dark ? "white" : "black"
    //         }

    
    const themeStyle = useMemo(()=>{
        return( 
            {
                backgroundColor : dark ? "black" : "white" ,
                color : dark ? "white" : "black"
            }
        )
        
    }, [dark])
    // change it only when value of dark changes. Here we themeStyle depends only on value of black.
    //  }, [dark]) -> this array is the list of dependencies.
    

    useEffect(() => {
        console.log('changing theme')
    }, [themeStyle]) 
    // we do this so that it prints 'changing theme' themeStyle is changed.
    // but it calls every time. Why ? cause every time we change something react re-renders a new copy of themeStyle.
    // So new and old themeStyles actually aren't the same. So 'changing theme' is printed. 
    // to counter it , we will memoize theme styles.

    

    return (
        <div>
            <h1>Use Memo hook</h1>

            <div><input type="number" value = {number} onChange= { (e) => setNumber(e.target.value)}/></div>
            <button onClick={()=>setDark(!dark)}>Change theme </button>
            <div style={themeStyle}>{doubleNum}</div>
        </div>
    )
}

function slowMult(num)
{
    console.log("Multiplying .....")
    for(let i=0 ;i <=1000000000 ; i++){} // to slow down the funtion
    return num*2;
}

/**
 We may think that this slowMult will only slow down the updation of the doubleNum
 But no , it slows down every single activity on the page( updating no in the input , changing theme etc)
 This is because , react app re renders itself completely when any value changes
 Re-render means it will run all the entire App() funtion ,
 So every time it re-renders , slowFuntion is called hence the delay(Even 'Multiplying....' it printed in console every time we do something for the very same reason)

This creates huge performance problems 
To handle it React has an inbuilt hook -> useMemo
 */