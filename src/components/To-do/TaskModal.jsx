import React, { useContext, useState } from 'react'
import ModalContainer from './ModalContainer'
import useLocalStorage from '../../custom-hooks/useLocalStorage';
import { LocalStorageContext } from '../../context/LocalStorage';
import { formatDateAndTime } from '../../utils/utils';



const TaskModal = ({ openModal, setOpenModal }) => {
    const [inputvalue, setInputvalue] = useState("");
    const { setItem } = useLocalStorage();
    const [error, setError] = useState("");
    const { state } = useContext(LocalStorageContext);

    function ifTaskAlreadyExist(searchTitle) {
        if (searchTitle) {
            for (const key in state) {
                if (state[key].title === searchTitle) {
                    return true;
                }
            }
            return false;
        }
    }


    const handleCreateTask = () => {
        const taskExist = ifTaskAlreadyExist(inputvalue)
        if (taskExist) {
            handleError("Task Already Exist")
            setInputvalue("");
            return
        }
        const id = Date.now().toString() + Math.floor(Math.random()).toString();
        const newTask = {
            id: id,
            title: inputvalue,
            createdAt: formatDateAndTime(new Date()),
            description: []
        }
        setItem(id, newTask)
        setInputvalue("");
    }

    const handleError = (msg) => {
        setError(msg)
        setTimeout(() => {
            setError("");
        }, 2000)
    }

    return (
        <>
            <ModalContainer openModal={openModal} onClose={() => setOpenModal(false)} >
                <div className='modal-wrapper'>
                    <span className='modal-tile'>
                        Create New Task
                    </span>
                    <div className='new-task-modal-content'>
                        <input className='to-do-input' type="text" onChange={(e) => setInputvalue(e.target.value)} value={inputvalue} />
                        <button className='btn button1' onClick={handleCreateTask}>Create</button>
                        <button style={{ marginLeft: '0.5rem' }} className='btn button2' onClick={() => setOpenModal(false)}> Done</button>
                    </div>
                    <div className='modal-error'>
                        {error}
                    </div>
                </div>
            </ModalContainer>
        </>
    )
}

export default TaskModal
