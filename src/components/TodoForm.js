import React, { useState } from 'react'
import Alert from './Alert'

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState('')
    const [alert, setAlert] =useState(null)
    const [showAlert, setShowAlert] = useState(false);

    const showAlertMsg = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setShowAlert(true)

      //hide the alert after 2 secs
      setTimeout(() => {
        setShowAlert(false)
      }, 2000);
    }
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const handleClick = (e) => {
      e.preventDefault()
       if(value.trim() === ''){
        showAlertMsg(': Task cannot be empty.', 'danger');
       }else{
        addTodo(value)
       }
        setValue(' ')
    }
  return (
   <>
   {showAlert && <Alert alert={alert} />}
    <form action="" className='TodoForm'>
        <input onChange={handleChange} value={value} type="text" className='todo-input' placeholder='Enter your Task' />
        <button onClick={handleClick} className='todo-btn'>Add Task</button>
    </form>
   </>
  )
}
