import React from 'react'
import calculatorImg from "../assets/calculator.jpg";
import tictactoeImg from "../assets/tictactoe.jpg";
import counterImg from "../assets/counter.jpg";
import magicMatchImg from "../assets/magicmatch.jpg";
import todoImg from "../assets/todo.jpg";
import { useNavigate } from 'react-router-dom';

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

    const MY_APPS = [
        {
            APP_ID: "COUNTER",
            APP_NAME: "COUNTER",
            APP_IMG: counterImg,
            PATH: "counter"
        },
        {
            APP_ID: "TICTACTOE",
            APP_NAME: "TIC TAC TOE",
            APP_IMG: tictactoeImg,
            PATH: "tictactoe"
        },
        {
            APP_ID: "CALCULATOR",
            APP_NAME: "CALCULATOR",
            APP_IMG: calculatorImg,
            PATH: "calculator"
        },
        {
            APP_ID: "MAGICMATCH",
            APP_NAME: "MAGIC MATCH",
            APP_IMG: magicMatchImg,
            PATH: "magic-match"
        },
        {
            APP_ID: "TODO",
            APP_NAME: "TODO LIST",
            APP_IMG: todoImg,
            PATH: "todo"
        },
        {
            APP_ID: "GITHUNTER",
            APP_NAME: "GIT HUNTER",
            APP_IMG: todoImg,
            PATH: "git-hunter"
        },
    ]

    return (
        <div className='webContainer'>
            {MY_APPS.map((app) => (
                <WebContainerBox key={app.APP_ID} app={app} />
            ))}

        </div>
    )
}

export default WebContainer
