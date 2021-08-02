// Design the Todo template

import React from 'react'
import { ACTIONS } from './App'

export default function  todo({todo , dispatch}){
    return(
        <div className="todo">
          <span style ={ { opacity : todo.completed ? 0.4 : 1 }}>
                {todo.task}
          </span>

          <button onClick ={() =>  { dispatch( { type : ACTIONS.TOGGLE_TODO , payload: { id : todo.id} })}}>
              { todo.completed ?<p> Unmark</p> : <p>Mark Done</p>}
          </button>

          <button onClick = {() => {dispatch( { type: ACTIONS.DELETE_TODO  , payload : { id : todo.id }} )}}>
              Delete
          </button>
        </div>
    )
}


// onClick ={() =>  { dispatch( { type : ACTIONS.TOGGLE_TODO , payload: { id : todo.id} })}}




// import React from 'react'
// import {ACTIONS } from './App'

// export default function todo({todo , dispatch}) {
//     return (
//         <div>
//             <span style = { {opacity : todo.complete ? 0.4 : 1}}>  
//             {/* color depending upon completed or not */}
//                 {todo.name}
//             </span>
//             <button onClick= {() => dispatch( {type : ACTIONS.TOGGLE_TODO , payload: { id: todo.id }})} >
//                 Toggle
//             </button>
//             <button onClick= {() => dispatch( {type : ACTIONS.DELETE_TODO , payload: { id: todo.id }})}>
//                 Delete
//             </button>
//         </div>
//     )
// }
