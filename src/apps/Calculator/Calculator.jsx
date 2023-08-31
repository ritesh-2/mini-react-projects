import React from 'react'
import Button from '../../components/calculator/Button'
import ButtonBox from '../../components/calculator/ButtonBox'
import CalcProvider from '../../context/CalcCntext'
import Screen from '../../components/calculator/Screen'
import "./Calculator.css"

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
]

const Calculator = () => {
    return (
        <div className='container'>
            <div className='wrapper'>
                <CalcProvider>
                    <Screen />
                    <ButtonBox>
                        {btnValues.flat().map((btn, i) => (
                            <Button
                                key={i}
                                value={btn}
                            />
                        ))}
                    </ButtonBox>
                </CalcProvider>
            </div>
        </div>


    )
}

export default Calculator
