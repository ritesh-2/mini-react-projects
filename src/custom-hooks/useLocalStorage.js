import React, { useContext } from 'react'
import { LocalStorageContext } from '../context/LocalStorage';

const useLocalStorage = () => {
    const { state, dispatch } = useContext(LocalStorageContext);

    //Sets a key value pair in local storage
    const setItem = (key, value) => {
        dispatch({ type: "SET_ITEM", key, value })
    }

    //Removes a item from local Storage
    const removeItem = (key) => {
        dispatch({ type: "REMOVE_ITEM", key })
    }

    //GET the value from  local storage
    const getItem = (key) => {
        return state[key];
    }
    return { setItem, removeItem, getItem }
}

export default useLocalStorage
