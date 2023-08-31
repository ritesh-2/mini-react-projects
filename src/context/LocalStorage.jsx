import { createContext, useEffect, useReducer, useState } from "react";

export const LocalStorageContext = createContext();

export const LocaStorageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(localStorageReducer, {});
    const [intialLoadComplete, setIntialLoadComplete] = useState(false);

    useEffect(() => {
        let data = {};
        let localStore = localStorage.getItem("TO_DO_DATA");
        if (localStore && Object.keys(localStore).length > 0) {
            data = JSON.parse(localStore);
        }
        dispatch({ type: "LOAD_DATA", data })
    }, [])
    //Saved data to local storage in state change
    useEffect(() => {
        if (state && intialLoadComplete) {
            localStorage.setItem("TO_DO_DATA", JSON.stringify(state))
        } else {
            setIntialLoadComplete(true) // added to avoid this useffect invokation on intial load
        }
    }, [state])

    const clearAll = () => {
        dispatch({ type: "CLEAR_ALL" })
        localStorage.removeItem("TO_DO_DATA")
    }

    return (
        <LocalStorageContext.Provider value={{ state, dispatch, clearAll }}>
            {children}
        </LocalStorageContext.Provider>
    )
}


function localStorageReducer(state, action) {
    switch (action.type) {
        case "SET_ITEM":
            return { ...state, [action.key]: action.value };
        case "REMOVE_ITEM":
            const newState = { ...state };
            delete newState[action.key];
            return newState;
        case "LOAD_DATA":
            return { ...action.data };
        case "CLEAR_ALL":
            return {};
        default:
            return state
    }
}