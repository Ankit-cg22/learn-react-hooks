
// useCallback is similar to useMemo 
// used to prevetn re-creation of compnents(even if they do not change)

import React,{useState , useCallback } from 'react'
import { withRouter } from 'react-router-dom';
import List from './List';

export default function CallbackUse() {

    const [num , setNum] = useState(1);
    const [dark , setDark ]= useState(false)

    const theme ={
        backgroundColor : dark ? "black" : "white" ,
        color : dark ? "white" : "black"
    }

    const getItems = useCallback((incrementVal) =>
    {
        return [num+incrementVal+1 , num+incrementVal+2 , num+incrementVal+3];
    },[num])


    // difference between useMemo and useCallback

    /* useMemo : returns the return value of the function

        const getItems = useCallback(() =>
        {
            return [num+1 , num+2,num+3];
        },[num])
    
    =>
    getItems = [num+1 , num+2,num+3]

     // so to use getItems we call it normally -> getItems

     */


    
    /* useCallback : returns the function

     const getItems = useCallback(() =>
    {
        return [num+1 , num+2,num+3];
    },[num])

    =>

    getItems = {
        return [num+1 , num+2,num+3];
    }

    // so to use getItems we need to call it like a function -> getItems()
    // since its a function now , we can pass arguments to it ;
    // ex: instead of num+1 , num+2 ,num+3 , we can have num+x,num+ x + 1,num+ x + 2
     */

    return (
        <div>
            <h2>useCallback hook</h2>

            <input type='number' value={num} onChange = { (e) =>  setNum(parseInt(e.target.value))} />

            <div style = {theme}>
                <button onClick={()=> setDark(!dark)}>
                     Change theme
                </button>
                
                <List getItems={getItems}/>

            </div>

        </div>
    )
}
