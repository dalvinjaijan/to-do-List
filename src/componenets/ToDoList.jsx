import React from 'react'

function ToDoList({ toDos, setToDos, editInput, editToDo, }) {
  const handleDelete = (id) => {
    setToDos(prevToDos => prevToDos.filter(obj => obj.id !== id))
  }
  const edit = (id,text) => {
    editToDo(text)
    setToDos(toDos.map((obj) => {
      if (obj.id === id) {
        return {...obj,isEdited:true }
      }
      return obj
    }))
    
  }
  const handleEdit=(id)=>{
    setToDos(toDos.map((obj)=>{
      if(obj.id===id){
        return{...obj,text:editInput,isEdited:false}
      }
      return obj
    }))
  }
  return (
    <div>
      {toDos.map((obj, index) =>{
        if(obj.isEdited===false){
          return(<div className='toDoList' key={index}>
            
          <div className='left'>
            <input onChange={(e) => {
              setToDos(toDos.filter((obj2) => {
                if (obj2.id === obj.id) {
                  obj2.status = e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type='checkBox' />
            <p>{obj.text}</p>
          </div>
          <div className='right'>
            <i class="fa-solid fa-pen-to-square" onClick={()=>{edit(obj.id,obj.text)}}></i>

            <i class="fa-solid fa-trash" onClick={() => handleDelete(obj.id)}></i>
          </div>
        </div>)
        }else{
          return(<div className='addInput'> 
            <input type="text" value={editInput} onChange={(e)=>editToDo(e.target.value)} />
          <button onClick={()=>handleEdit(obj.id)}> save</button>
          </div>
           
          )

        }
        
      }
        
      )}
    </div>
  )
}

export default ToDoList