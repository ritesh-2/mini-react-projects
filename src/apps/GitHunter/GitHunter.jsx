import React, { useEffect, useState } from 'react'
import { MdArrowBack } from "react-icons/md";
import Notification from "../../components/git-hunter/Notification"
import FindUser from '../../components/git-hunter/FindUser';
import FindUsers from '../../components/git-hunter/FindUsers';
import "./GitHunter.css";

const GitHunter = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [error, setError] = useState(null);


    //To clear error state 
    useEffect(() => {
        let timout = setTimeout(() => {
            setError("");
        }, 3000);
        return () => { clearTimeout(timout) }
    }, [error])
    return (
        <div>
            {selectedUser && (
                <>
                    <FindUser setError={setError} user={selectedUser} />

                    <button onClick={() => setSelectedUser(null)} className='back-button'>
                        <MdArrowBack />
                    </button>
                </>
            )}
            {!selectedUser && <FindUsers setSelectedUser={setSelectedUser} setError={setError} />}
            <Notification message={error} />


        </div>
    )
}

export default GitHunter
