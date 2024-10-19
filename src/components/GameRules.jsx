import React from 'react'

const GameRules = () => {
    return (
        <div className='sm:h-[208px] sm:w-[794px] w-[90%] bg-red-100 rounded-sm mt-5 mb-5 p-5 font-semibold text-gray-700'>
            <h1 className='font-bold text-2xl mb-2'>How to play dice game</h1>
            <p>~ Select any number</p>
            <p>~ Click on the dice image</p>
            <p>~ After click on dice if selected number is equal to the dice number, you will get same point as dice</p>
            <p>~ If you get wrong guess then 2 points will be deducted</p>
        </div>
    )
}

export default GameRules
