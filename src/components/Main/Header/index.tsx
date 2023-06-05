import { faChevronLeft, faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Header = () => {
  return (
    <header className='flex justify-between items-center w-full py-4 px-6 '>
        <nav className='flex gap-2 items-center'>
            <div className='box-content rounded-full bg-zinc-900 p-2'>
                <FontAwesomeIcon icon={faChevronLeft} className='h-4 w-4 text-zinc-200'/>
            </div>
            <div className='box-content rounded-full bg-zinc-900 p-2'>
               <FontAwesomeIcon icon={faChevronRight} className='h-4 w-4 text-zinc-200'/> 
            </div>
        </nav>
        <div className='box-content rounded-full bg-zinc-950 p-2'>
            <FontAwesomeIcon icon={faUser} className='h-4 w-4 text-zinc-200'/>
        </div>
    </header>
  )
}
