import React, { useEffect, useState } from 'react'
import ModalContainer from './ModalContainer';
import DescriptionModal from './DescriptionModal';
import useLocalStorage from '../../custom-hooks/useLocalStorage';

const list = Array(7).fill("Some Random Stringg");

const TodoRight = ({ currentTask, setCurrentTask }) => {
  const [currentDescription, setCurrentDescription] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { setItem } = useLocalStorage();

  useEffect(() => {
    if (currentTask && currentTask.description) {
      setCurrentDescription(currentTask.description);
    } else {
      setCurrentDescription([]);
    }
  }, [currentTask])

  const handleRemoveDesc = (item) => {
    if (item) {
      const updatedDesc = currentTask && currentTask.description.length > 0 && currentTask.description.filter(elem => elem.id !== item.id); //remove description
      currentTask.description = updatedDesc;
      // setCurrentTask(currentTask); //updated current task to reflect chenge in description pannel
      setCurrentDescription(updatedDesc);
      setItem(currentTask.id, currentTask);
    }
  }

  const handleCheckedClick = (e, item) => {
    if (item) {
      const index = currentTask.description.findIndex(elem => elem.id === item.id);
      if (currentTask.description[index]) currentTask.description[index].checked = e.target.checked;
      setItem(currentTask.id, currentTask);
    }
  }

  return (
    <div className='left-container'>
      <div className='left-title'>Descripton</div>
      <ul className='right-list-container'>
        {currentDescription && currentDescription.map((item, idx) => (
          <div className='right-list-items' key={item.id}>
            <div>
              <div className='todo-date'>{item.createdAt}</div>
              <li >{item.title}</li>
            </div>
            <div className='desc-actions'>
              <button className='btn color-primary' onClick={() => handleRemoveDesc(item)}>X</button>
              <input checked={item.checked} onChange={(e) => handleCheckedClick(e, item)} type='checkbox' />
            </div>
          </div>
        ))}
      </ul>
      <button onClick={() => setOpenModal(true)} className='plusbuttoon btn'> + </button>
      {openModal &&
        <DescriptionModal openModal={openModal} setOpenModal={setOpenModal} currentTask={currentTask} />
      }

    </div>
  )
}

export default TodoRight
