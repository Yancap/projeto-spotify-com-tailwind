import { faBackwardStep, faCirclePause, faDesktop, faForwardStep, faListUl, faMicrophone, faPlay, faRepeat, faShuffle, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='col-span-4 p-2 flex justify-between'>
        <div></div>
        <div>
          <div className='flex items-center gap-6'>
            <FontAwesomeIcon icon={faShuffle} className='w-3 h-3 text-zinc-500 transition-all hover:text-zinc-300'/>
            <FontAwesomeIcon icon={faBackwardStep} className='w-5 h-5 text-zinc-500 transition-all hover:text-zinc-300'/>
            <FontAwesomeIcon icon={faCirclePause} className='w-9 h-9 text-zinc-300 transition-all hover:transform hover:scale-105'/>
            <FontAwesomeIcon icon={faForwardStep} className='w-5 h-5 text-zinc-500 transition-all hover:text-zinc-300'/>
            <FontAwesomeIcon icon={faRepeat} className='w-3 h-3 text-zinc-500 transition-all hover:text-zinc-300' />
          </div>
          <div className='flex'>
            
          </div>
        </div>
        <div>
            <FontAwesomeIcon icon={faMicrophone} className='w-4 h-4' />
            <FontAwesomeIcon icon={faListUl} className='w-4 h-4' />
            <FontAwesomeIcon icon={faDesktop} className='w-4 h-4' />
            <FontAwesomeIcon icon={faVolumeHigh} className='w-4 h-4' />
        </div>
    </footer>
  )
}
