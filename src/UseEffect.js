import React , {useState, useEffect} from 'react'

export default function EffectUse123() {
    const [content , setContent] = useState('');
    const [items , setItems] =useState([]) // to store the data received from the api


   

    // when ever value in 'content' changes , make api call
    useEffect( ()=>{
        //api call
        fetch(`https://jsonplaceholder.typicode.com/${content}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [content] )
    
    
    // useEffect( ()=>{
    //     console.log("effect called")
    // }, [content,content1] )
    // [content,content1] => array of values whose change in value runs fires the function
    // [] means only when page refreshes

    return (
        <div>
            <h1>learning useEffect hook</h1>

            <button onClick={()=> setContent('Posts')}>Posts</button>
            <button onClick={()=> setContent('Comments')}>Comments</button>
            <button onClick={()=> setContent('Users')}>Users</button>
            
           { <h3>{content}</h3>}

           {/* {items.map ( item => {
               return <pre> {JSON.stringify(item)}</pre>
           })} */}
          
        </div>
    )
}

