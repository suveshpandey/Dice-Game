import React from 'react'

const Homepage = ({startGame}) => {
    
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <div className='sm:w-[1182px] w-[100%] h-[522px] grid sm:grid-cols-[50%_50%] '>
                <div>
                    <img src="homepage.png" alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <div className='h-[188px] w-[528px] flex flex-col items-center justify-center '>
                        <h1 className='font-bold text-7xl'>DICE GAME</h1>
                        <button onClick={startGame} className='bg-black text-white px-10 py-2 rounded-md mt-6 font-semibold hover:bg-white hover:text-black hover:border-[2px] border-black transition-colors duration-300'>Play Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
