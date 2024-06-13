import React from 'react'

function ToDo({ data: { toDo, setToDo, toDos, setToDos } }) {
  const addTodo = ()=>{
    
    setToDos([...toDos,{id:Date.now(),text: toDo,status:false,isEdited:false}])
    setToDo('')
  }
  return (
    <div className='addInput'>
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type='text' ></input>
       
      <i onClick={()=>addTodo()}className="fa-solid fa-plus"></i>
    </div>
  )
}

export default ToDo
