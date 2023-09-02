import React, { useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import Loader from './components/Loader';
import { BASE_URL, Fetch } from './utils/Fetch';



const FindUsers = ({ setSelectedUser, setError }) => {
    const [inputValue, setInputValue] = useState(null);
    const [users, setusers] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        //load dfefaukt users
        loadDefaultUsers()
    }, [])

    const loadDefaultUsers = async () => {
        setisLoading(true)
        let result = await Fetch(`${BASE_URL}/users`)
        if (result.success) {
            setusers({
                items: result.data
            })
        } else {
            setError(result.errorMessage)
        }
        setisLoading(false)
    }

    const loadUsers = async () => {
        if (inputValue) {
            setisLoading(true)
            let result = await Fetch(`${BASE_URL}/search/users?q=${inputValue}`)
            if (result.success) {
                setusers(result.data)
            }
            else {
                setError(result.errorMessage)
            }
            setisLoading(false)
        }
    }



    return (
        <>
            <div className='header-container'>
                <h3 className="title">GiThunter</h3>
                <SearchBox setInputValue={setInputValue} searchUser={loadUsers} placeholder={"Search Users..."} />
            </div>
            <div className='users-list-container'>
                {isLoading && <Loader />}
                {users && !isLoading &&
                    <>
                        {users.items.map((user, idx) => (
                            <div onClick={() => setSelectedUser(user)} key={idx} className='user-card'>
                                <img className='avatar-img-small' src={user.avatar_url} alt={user.login} />
                                <strong className="text-medium">@{user.login}</strong>
                            </div>
                        ))}
                    </>
                }
            </div>
        </>
    )
}


export default FindUsers
