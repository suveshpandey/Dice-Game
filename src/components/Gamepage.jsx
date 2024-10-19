import React, {useState } from 'react'
import Rolldice from './Rolldice';
import GameRules from './GameRules';

const Gamepage = () => {
    const arrNums = [1,2,3,4,5,6];

    const [selectedNum, setSelectedNum] = useState(null);
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    function generateRandomNum(min, max){
        return Math.floor(Math.random() * (max-min) + min);
    }
    
    function rollDice(){
        if(!selectedNum){
            setError("You have not selected any number.");
            return;
        }
        setError("");

        const randomNum = generateRandomNum(1,7);
        setCurrentDice(randomNum);

        if(selectedNum  == randomNum){
            setScore(score => score + randomNum);
        }
        else{
            setScore(score => score - 2)
        }

        setSelectedNum(undefined)
    } 
    function showRulesFun(){
        setShowRules(!showRules);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className=' sm:h-[151px]  sm:w-[1280px] w-[100%] flex sm:flex-row flex-col  sm:justify-between justify-center items-center '>
                <div className='w-[135px] h-[100%] flex flex-col items-center justify-center'>
                    <h1 className='font-bold text-7xl'>{score}</h1>
                    <p className='font-semibold text-xl'>Total Score</p>
                </div>
                <div className='sm:w-[550px] w-[100%] h-[100%] sm:mt-0 mt-5 '>
                    {error && <p className='text-red-600 text-center mt-2'>{error}</p>}
                    <div className='flex w-[100%] h-[70%] items-center justify-evenly '>
                        {arrNums.map((num, i) => (
                            <NumBox key={i} number={num} selectedNum={selectedNum === num} onClick={()=>setSelectedNum(num)} ></NumBox>
                        ))}
                    </div>
                    <p className='h-[30%] justify-end text-right mr-5 font-bold text-[20px]'>Select Number</p>
                </div>
            </div>

            <Rolldice currentDice={currentDice} rollDice={rollDice} setScore={setScore} showRulesFun={showRulesFun} showRules={showRules} />
            {showRules && <GameRules />}
        </div>
    )
}
function NumBox({number, selectedNum, onClick}){
    return(
        <div onClick={onClick}  className={`border-[1px] border-slate-950 sm:h-[70px] h-[65px] sm:w-[72px] w-[65px] flex justify-center items-center font-bold text-3xl rounded-sm cursor-pointer ${selectedNum ? 'text-white bg-black transition-colors duration-300' : 'text-black bg-white'} `}>{number}</div>
    )
}

export default Gamepage
