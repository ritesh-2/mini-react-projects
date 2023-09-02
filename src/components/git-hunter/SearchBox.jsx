import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBox = ({ setInputValue, searchUser, placeholder }) => {
    return (
        <div className="search-container">
            <i><BiSearch /></i>
            <input onChange={(e) => { setInputValue(e.target.value) }} placeholder={placeholder} type="text" />
            <button onClick={searchUser} className="alien-button">Search</button>
        </div>
    )
}

export default SearchBox
