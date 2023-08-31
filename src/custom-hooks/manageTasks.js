import React, { useEffect, useState } from 'react'
export const MY_TASKS = "MY_TASKS"


const manageTasks = () => {
    const [tasks, setTasks] = useState(null);
    const [error, setError] = useState(null);

    //IntialiZe My task when mounted
    useEffect(() => {
        let myTasks = getItem(MY_TASKS)
        if (!myTasks) {
            myTasks = []
        }
        setItem(MY_TASKS, myTasks)
        setTasks(tasks);
    }, [])

    const addNewTask = (newTask) => {

    }

    return { tasks }
}

export default manageTasks
