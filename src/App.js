import React , {useState, useReducer} from 'react'
import './App.css'

import Todo from './todo'

export const ACTIONS ={
  NEW_TODO : "newTodo",
  TOGGLE_TODO : "toggleTodo",
  DELETE_TODO : "deleteTodo"
}

function reducer(todos , action){
    switch( action.type )
    {
      case ACTIONS.NEW_TODO:
        return [ ...todos , newTodo(action.payload.task)]

      case ACTIONS.TOGGLE_TODO:
        // toggle the 'completed' property of the desired task
        return todos.map( todo =>{
          if( todo.id === action.payload.id ) {
            return { ...todo , completed : !todo.completed}
          }
          return todo
        })

      case ACTIONS.DELETE_TODO:
        return todos.filter( todo => todo.id  !== action.payload.id)
        // allow that 'todo' whose id != action.payload.id
        // task on whose delete button we clicked has id = action.payload.id
        // so it is not allowed( i.e deleted)

      default : return todos
    }
}

function newTodo( task )
{
  return { id: Date.now() , task : task , completed : false}
}

function App(){

  // reducer for the array of todos
  const [todos , dispatch]= useReducer( reducer , []);
  const [task , setTask] = useState('')


  function handleSubmit(e){
    e.preventDefault();
    dispatch({ type : ACTIONS.NEW_TODO , payload : { task : task }});
    setTask('');
  }

  console.log(todos)

  return(
    <div className="app">
      <h1>Todo App</h1>

      {/* form (input) */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} 
        onChange = {e => setTask(e.target.value ) }
        placeholder="Enter task.." />
      </form>

      {/* {todos.length ? <p>No tasks 😀!</p> :  } */}
      <h2>Todos :</h2>
      {todos.map( todo => {
        return <Todo key={todo.id} todo={todo} dispatch = {dispatch} />
      })}  

     
    </div>
  )
}

export default App;


















// import React , {useState , useReducer} from 'react';
// import './App.css';
// import Todo from './todo'

// export const ACTIONS ={
//   ADD_TODO : "addTodo",
//   TOGGLE_TODO : "toggleTodo" ,
//   DELETE_TODO : 'deleteTodo'
// }

// function reducer( todos , action ){
//   switch(action.type)
//   {
//     case ACTIONS.ADD_TODO:
//         return [...todos , newTodo( action.payload.name )]

//     case ACTIONS.TOGGLE_TODO:
//         return todos.map( todo => {
//           if(todo.id === action.payload.id) // the todo whose toggle button we clicked
//           {
//             return {...todo , complete : !todo.complete}
//           } 
//           return todo
//         })
//     case ACTIONS.DELETE_TODO:
//         return todos.filter( todo => todo.id !== action.payload.id)
//         // filter out those todos whose id != action.payload.id
//         // todo whose delete button is clicked its id = action.payload.id
//         // so it gets left behind( not filtered out)
//     default: return todos;
//   }
// }

// function newTodo(name){
//   return { id: Date.now() , name: name , complete : false}
// }


// function App() {
  
//   // simple todo function 
//   const [todos , dispatch] = useReducer(reducer , [])
//   const [name , setName] = useState('');

  
//   function handleSubmit(e){
//     //funtion to handle submits , when we press enter
  
//     e.preventDefault();
//     dispatch({ type : ACTIONS.ADD_TODO  , payload : {name : name }})
//     setName('') ; // set the name back to '' 
//   }
  
//   console.log(todos)

//   return (
    
//     <div className="app">
//      <h1>Todo App</h1>

//       <form onSubmit={handleSubmit}>
//         <input type="text" value ={name} onChange= { e=> setName(e.target.value)} />
        
//       </form>

//       {todos.map( todo => {
//        return  <Todo key={todo.id} todo={todo} dispatch ={dispatch} />
//       })}
//     </div>
//   );
// }

// export default App;
