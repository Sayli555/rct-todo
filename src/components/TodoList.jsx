import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todo}) => {
   
  return (
    <div className='todoList'>
       {todo.map((el)=>(
         <TodoItem title={el.text} status={el.status} id={el.id} />
      ))}
    </div>
  )
}

export default TodoList
