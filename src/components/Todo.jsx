import React, { useState } from 'react'
import TodoItem from './TodoItem';
import TodoList from './TodoList';

const Todo = () => {
    const [text,setText]=useState("");
    const [todo,setTodo]=useState([])
    const handlechange=(e)=>{
        setText(e.target.value)
    }
 
  return (
    <div className='todo'>
      <input  
      value={text}
      onChange={handlechange}
      placeholder="type todo..."
      />
      <button onClick={()=>{
          setTodo([...todo,{text:text,status:false,id:Date.now}]);
          setText("")
      }}
      >ADD</button>

      <TodoList todo={todo}/>
      {/* {todo.map((el)=>(
         <TodoItem title={el.text} status={el.status} id={el.id} />
      ))} */}
    </div>
  )
}

export default Todo
