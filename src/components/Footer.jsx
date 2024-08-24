import React, { memo } from 'react';
import Github from '../assets/github.png' 
import X from '../assets/x.jpg' 

const Footer = ()=>{


    return(
        <div className='h-64  bg-black text-white'>
            <div className='text-center m-4 p-4 font-extrabold text-2xl'>Pass<span className='text-green-300'>Sphere</span></div>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col  w-64 text-center'>
                    <p className=' text-center text-green-300 font-bold'>Attributions: </p>
                    <a className='hover:text-green-300' href="https://lordicon.com/">Lordicon.com</a>
                    <a className='hover:text-green-300' href="https://lottiefiles.com/">LottieFiles</a>
                    <a className='hover:text-green-300' href="https://www.freepik.com/">Freepik</a>
                </div>
                
                <div className='m-4  flex gap-4 justify-center items-center'>

                    <a href="https://github.com/Hriddha"><img className='h-8 w-8' src={Github} alt="Github" /></a>
                    <a href="https://x.com/HriddhaPratim"><img className='h-8 w-8' src={X} alt="X" /></a>
                </div>
                

            </div>
            
        </div>
    )

}

export default memo(Footer);