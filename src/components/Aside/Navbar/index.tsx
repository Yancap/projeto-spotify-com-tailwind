import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <nav className='bg-zinc-900/60 rounded-lg px-5 py-3 flex flex-col gap-6'>
        <a href='' className='flex gap-5'>
            <FontAwesomeIcon icon={faHouse} className='h-6 w-6'/>
            <h3 className='font-bold'>Início</h3>
        </a>
        <a href='' className='flex gap-5 hover:font-bold transition-all text-zinc-400 hover:text-zinc-100'> 
            <FontAwesomeIcon icon={faMagnifyingGlass} className='h-6 w-6'/>
            <h3 className=''>Procurar</h3>
        </a>
    </nav>
  )
}
