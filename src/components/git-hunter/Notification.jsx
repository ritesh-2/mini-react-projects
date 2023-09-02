import React, { useEffect, useState } from 'react'

const Notification = ({ message }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (message) {
            setIsVisible(true);
        }
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 3000)
        return () => clearTimeout(timeout);
    }, [message])


    return isVisible ? (
        <div className={`notification ${isVisible ? 'show' : ''}`}>
            <p>{message}</p>
        </div>
    ) : null
}

export default Notification
