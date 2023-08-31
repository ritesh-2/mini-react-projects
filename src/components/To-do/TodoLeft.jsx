import React, { useContext, useEffect, useState } from 'react'
import ModalContainer from './ModalContainer';
import TaskModal from './TaskModal';
import { LocalStorageContext } from '../../context/LocalStorage';
import useLocalStorage from '../../custom-hooks/useLocalStorage';

const currenTaskStyles = {
  border: "2px solid #07C7A4"
}

const TodoLeft = ({ setCurrentTask, currentTask }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const { state, clearAll } = useContext(LocalStorageContext);
  const { removeItem } = useLocalStorage();


  useEffect(() => {
    const list = [];
    const keys = Object.keys(state);
    //convert state objects means tasks into list  of task and render
    if (state && keys.length > 0) {
      if (!currentTask) setCurrentTask(state[keys[0]]) //current task = 1st elem of list in case of null
      for (const key in state) {
        if (state[key].title) {
          list.push({ ...state[key], id: key });
        }
      }
    }
    else {
      setCurrentTask(null);
    }
    setTasks(list);

  }, [state])

  const handleRemoveTask = (task) => {
    if (task) {
      if (task.id === currentTask.id) setCurrentTask([])
      removeItem(task.id)
    }
  }

  const handleClearAll = () => {
    clearAll();
  }

  return (
    <div className='left-container'>
      <div className='left-title'>TO DO Task</div>
      <div className='left-list-container'>
        {tasks && tasks.map((task, idx) => (
          <div onClick={() => setCurrentTask(task)} style={task.id === currentTask.id ? currenTaskStyles : {}} className='left-list-items' key={task.id}>
            <div >
              <div className='todo-date'>{task.createdAt}</div>
              <div>{task.title}</div>
            </div>
            <button className='btn color-primary' onClick={() => handleRemoveTask(task)}>x</button>
          </div>
        ))}
      </div>
      <div className='left-btns'>
        <button onClick={() => setOpenModal(true)} className='btn button1 '>
          Create New Task
        </button>
        <button onClick={handleClearAll} className='btn button2 '>
          Clear All
        </button>
      </div>
      <div>
        {openModal && <TaskModal openModal={openModal} setOpenModal={setOpenModal} />}
      </div>
    </div>
  )
}

export default TodoLeft
