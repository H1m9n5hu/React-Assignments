import React, { useState } from 'react';
import ToDoListImg from './ToDoList/check-list.png';
import {MdDelete} from "react-icons/md";

const ToDoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const inputHandler = () => {
    if(task.trim() !== ''){
        setTaskList([...taskList, {text: task.trim(), checked: false}]);
        setTask('');
    }
  }
  const enterPressHandler = (e)=>{
    if(e.keyCode===13){
      setTaskList([...taskList, {text: task.trim(), checked: false}]);
      setTask('');
    }
  }
  const deleteListItem = (index) => {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);
  };
  const crossOutHandler = (e) => {
    e.target.classList.toggle("checked");
  };

  return (
    <div class="app">
        <div class="todo-app">
            <h2> To Do List <img src={ToDoListImg} alt='To Do List Icon'/></h2>
            <div class="row">
                <input type="text" onChange={(e) => {setTask(e.target.value)}} value={task} onKeyDown={enterPressHandler} placeholder="Add your task"/>
                <button type='button' onClick={inputHandler}>Add</button>
            </div>
            <ul id="list-container">
                {taskList.map((item, index) => 
                    <li key={index} onClick={crossOutHandler}>
                        {item.text}
                        <span>
                            <MdDelete onClick={() => deleteListItem(index)}></MdDelete>
                        </span>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default ToDoList