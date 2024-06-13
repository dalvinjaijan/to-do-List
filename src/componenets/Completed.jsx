import React from 'react'

function Completed({toDos}) {
  return (
    <div c>
     <h4>Completed</h4> 
        {toDos.map((obj)=>{
            if(obj.status){
                return (<p>{obj.text}</p>)
            }
            return null
        })}
      </div>
  )
}

export default Completed
