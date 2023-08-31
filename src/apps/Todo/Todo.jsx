import React, { useContext, useEffect, useState } from 'react'
import "./Todo.css"
import TodoLeft from '../../components/To-do/TodoLeft'
import TodoRight from '../../components/To-do/TodoRight'
import { LocalStorageContext } from '../../context/LocalStorage'




const Todo = () => {
    const { state } = useContext(LocalStorageContext);
    const [currentTask, setCurrentTask] = useState(null);
    return (

        <div className='main-container'>
            <div className='app-container'>
                <div className='left-side'>
                    <TodoLeft setCurrentTask={setCurrentTask}  currentTask={currentTask} />
                </div>
                <div className='right-side'>
                    <TodoRight currentTask={currentTask} setCurrentTask={setCurrentTask} />
                </div>
            </div>
        </div >
    )
}

export default Todo
