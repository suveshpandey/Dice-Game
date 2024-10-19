import React, { useState } from 'react'

const Rolldice = ({currentDice, rollDice, setScore, showRulesFun, showRules}) => {
    
    
    return (
        <div className=' h-[450px] w-[250px] sm:mt-0 mt-5'>
            <div className='h-[70%] w-[100%]'>
                <img src={`dice${currentDice}.png`} alt="" className='cursor-pointer ' onClick={rollDice} />
                <p className='text-center font-bold mt-3 '>Click on Dice to roll</p>
            </div>
            <div className='h-[30%] w-[100%] bg-slate-100 flex flex-col justify-center items-center '>
                <button onClick={() => setScore(0)} className='border-[2px] border-black w-[70%] rounded-sm py-[6px] font-semibold hover:bg-gray-200 transition-colors duration-300 '>Reset Score</button>
                <button onClick={showRulesFun} className='border-[2px] border-black bg-black text-white w-[70%] py-[6px] rounded-sm mt-3  transition-all duration-300 '>{showRules ? "Hide Rules" : "Show Ruels"}</button>
            </div>
        </div>
    )
}

export default Rolldice
