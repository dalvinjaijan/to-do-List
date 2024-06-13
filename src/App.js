import { useState } from 'react';
import ToDo from './componenets/ToDo';
import './App.css';
import ToDoList from './componenets/ToDoList'
import Completed from './componenets/Completed';
import Pending from './componenets/Pending';
import { useRef } from 'react';

function App() {

  const refvalue=useRef('please login')


  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  const [editInput,editTodo]=useState('')
  const [value,setvalue]=useState('welcome')
  const [buttonValue,setButton]=useState('login')
  
  const buttonClick=()=>{

    setButton('logout')
  }
  
  const data={toDo,setToDo,toDos,setToDos}
  return (
    <div className="container">
      
        <div className="completed">
          <Completed toDos={toDos} />
        </div>
      <div className="task-list">
      <h3 >TODO LIST</h3>  
        <div className="pending">
          <ToDo data={data} />
          <ToDoList toDos={toDos} setToDos={setToDos} editInput={editInput} editToDo={editTodo} />
        </div>

      </div>

      <div className="right">
        <Pending toDos={toDos} />
      </div>
      <div>
        <button onClick={buttonClick}>{buttonValue}</button>
        <p ref={refvalue}>{value}</p>
      </div>
      
    </div>
  );
}

export default App;
