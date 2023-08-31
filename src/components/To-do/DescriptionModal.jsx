import React, { useContext, useState } from 'react'
import ModalContainer from './ModalContainer'
import useLocalStorage from '../../custom-hooks/useLocalStorage';
import { LocalStorageContext } from '../../context/LocalStorage';
import { formatDateAndTime } from '../../utils/utils';

const DescriptionModal = ({ openModal, setOpenModal, currentTask }) => {
    const [inputvalue, setInputvalue] = useState("");
    const { setItem, getItem } = useLocalStorage();
    const [error, setError] = useState("");
    const { state } = useContext(LocalStorageContext);

    const handleAddDescription = () => {
        if(ifDescExist(inputvalue)){
            handleError("Description Already Exist");
            return 
        }
        const descObj = {
            id: Date.now().toString() + Math.floor(Math.random()).toString(),
            title: inputvalue,
            createdAt: formatDateAndTime(new Date()),
            checked: false,
        }
        currentTask.description.push(descObj);
        setItem(currentTask.id, currentTask);
        setInputvalue("")
    }

    const ifDescExist = (searchTitle) => {
        if (searchTitle) {
            const desc = currentTask.description.filter(item => item.title === searchTitle);
            return desc && desc.length > 0;
        }
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
                    <div className='modal-tile'>
                        Create New Description
                    </div>
                    <input style={{ padding: '1.2rem' }} placeholder='Description..' className='to-do-input' type="text" onChange={(e) => setInputvalue(e.target.value)} value={inputvalue} />
                    <div className='footer-button'>
                        <button className='btn button2' onClick={handleAddDescription}>Save</button>
                        <button className='btn button2' onClick={() => setOpenModal(false)}>Done</button>
                    </div>
                    <div className='modal-error'>
                        {error}
                    </div>
                </div>
            </ModalContainer>
        </>
    )
}

export default DescriptionModal
