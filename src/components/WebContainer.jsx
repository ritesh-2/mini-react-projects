import React from 'react'
// import calculatorImg from "../assets/calculator.jpg";
// import tictactoeImg from "../assets/tictactoe.jpg";
// import counterImg from "../assets/counter.jpg";
// import magicMatchImg from "../assets/magicmatch.jpg";
// import todoImg from "../assets/todo.jpg";
// import githunterImg from "../assets/githunter.jpg";
import { useNavigate } from 'react-router-dom';
import { MY_APPS } from '../confgs/appConfig';

const WebContainerBox = ({ app }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(app.APP_NAME)
        navigate(app.PATH)
    }

    return (
        <div className="card">
            <img onClick={handleClick} src={app.APP_IMG} alt="Card Image" />
            <div className="caption">{app.APP_NAME}</div>
        </div>
    )
}

const WebContainer = () => {
    return (
        <div className='webContainer'>
            {MY_APPS.map((app) => (
                <WebContainerBox key={app.APP_ID} app={app} />
            ))}

        </div>
    )
}

export default WebContainer
