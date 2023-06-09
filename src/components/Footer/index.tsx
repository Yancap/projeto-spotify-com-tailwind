import { faBackwardStep, faCirclePause, faDesktop, faForwardStep, faListUl, faMicrophone, faPlay, faRepeat, faShuffle, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='col-span-4 p-2 grid grid-cols-3'>
        <div></div>
        <div className='justify-self-center flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <FontAwesomeIcon icon={faShuffle} className='w-3 h-3 text-zinc-500 transition-all hover:text-zinc-300'/>
            <FontAwesomeIcon icon={faBackwardStep} className='w-5 h-5 text-zinc-500 transition-all hover:text-zinc-300'/>
            <FontAwesomeIcon icon={faCirclePause} className='w-9 h-9 text-zinc-300 transition-all hover:transform hover:scale-105'/>
            <FontAwesomeIcon icon={faForwardStep} className='w-5 h-5 text-zinc-500 transition-all hover:text-zinc-300'/>
            <FontAwesomeIcon icon={faRepeat} className='w-3 h-3 text-zinc-500 transition-all hover:text-zinc-300' />
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-xs text-zinc-500 font-medium'>
              0:00
            </span>
            <div className='h-1 w-[30vw] bg-zinc-700 rounded-full'>
            </div>
            <span className='text-xs text-zinc-500 font-medium'>
              0:00
            </span>
          </div>
        </div>
        <div className='justify-self-end flex items-center gap-4'>
            <FontAwesomeIcon icon={faMicrophone} className='w-4 h-4 text-zinc-500' />
            <FontAwesomeIcon icon={faListUl} className='w-4 h-4 text-zinc-500' />
            <FontAwesomeIcon icon={faDesktop} className='w-4 h-4 text-zinc-500' />
            <FontAwesomeIcon icon={faVolumeHigh} className='w-4 h-4 text-zinc-500' />
            <div className='h-1 w-20 bg-zinc-300 rounded-full'></div>
        </div>
    </footer>
  )
}
