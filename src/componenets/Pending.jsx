import React from 'react'

function Pending({toDos}) {
  return (
    <div className='pending'>
       <h4>Pending</h4> 
      {toDos.map((obj)=>{
        if(obj.status==false){
            return (<p>{obj.text}</p>)
        }
        return null
      })}
    </div>
  )
}

export default Pending
