import React, { useState } from 'react'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Todo({task, delTodo}) {
    const [completed, setCompleted] = useState(task.completed)
    const deleteTodo = () => {
        delTodo(task.id)
    }
    const handleTextClick = () => {
        setCompleted(!completed)
    }
  return (
    <div className={`Todo ${completed ? 'completed': ''}`}>
      <p onClick={handleTextClick}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faTrash} onClick={deleteTodo}/>
      </div>
    </div>
  )
}
