import { useContext } from "react"
import React from 'react'
import { todosContext } from "./todoStore"
import todoBox from "./todoBox"


function Boxes() {
    const todos=useContext(todosContext)
  return (
    <div>
    {todos[0].map(todo =>< todoBox key={todo.id} todo={todo}/>)}
  </div>
  )
}

export default Boxes
