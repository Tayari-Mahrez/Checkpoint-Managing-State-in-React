import React, { useContext } from 'react'
import { todosContext } from './todoStore'
import axios from 'axios'

function todoBox({todo}) {
  const [todos,setTodos]=useContext(todosContext)
  function handleDeletetodo(){
    axios.delete("http://localhost:3000/todos/"+todo.id)
    .then(res=>setProducts(todos.filter(ele=>ele.id!==todo.id)))
  }
  return (
    <div className='todo-box'>
        <h2>{todo.title} </h2>
        <button onClick={handleDeletetodo}>delete</button>
    </div>
  )
}

export default todoBox