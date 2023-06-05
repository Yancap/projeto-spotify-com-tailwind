import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface CardProps {
    type: "music" | "podcast";
    title: string;
    description: string;
}

export const Card = ({type, title, description}: CardProps) => {
  return (
    <div className='flex flex-col rounded-lg h-72 w-52 bg-zinc-900 p-4 cursor-pointer transition-colors duration-500 hover:bg-zinc-800/60 group'>
        <div className='w-full h-3/4 bg-yellow-400 rounded-lg shadow-lg shadow-zinc-950/60 relative'>
            <img src="" alt="" />
            {type === "music" && 
            <div className='invisible  box-content bg-green-500 rounded-full grid place-content-center p-3.5 w-min  shadow-md shadow-zinc-700/50 transition-all absolute bottom-0 right-1.5 group-hover:visible group-hover:bottom-1.5'>
                <FontAwesomeIcon icon={faPlay} className='text-black h-5 w-5'/>
            </div>
            }
        </div>
        <div className='h-2/5 flex flex-col justify-evenly'>
            <h4 className='text-zinc-200 font-bold'>
                {title}
            </h4>
            <p className='text-zinc-500 text-sm font-medium line-clamp-2'>
                {description}
            </p>
        </div>
    </div>
  )
}
