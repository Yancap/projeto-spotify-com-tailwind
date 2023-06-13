import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCaretDown, faMagnifyingGlass, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Playlist } from '../Playlist'
import Image from 'next/image'

export const Library = () => {
  return (
    <nav className='flex flex-col gap-4 bg-zinc-900/60 rounded-lg px-2 py-4 row-span-4'>
        <div className='flex justify-between items-center px-2'>
          <div className='flex gap-4 text-zinc-400 hover:text-zinc-100 cursor-pointer'>
            <Image src='/library.svg' alt='library' height={16} width={16} />
            <strong>A sua biblioteca</strong>
          </div>
          <div className='flex gap-3 items-center'>
            <FontAwesomeIcon icon={faPlus} className='h-5 w-5 p-1.5 box-content text-zinc-500 cursor-pointer hover:text-zinc-100 hover:rounded-full hover:bg-zinc-800/50 transition-all'/>    
            <FontAwesomeIcon icon={faArrowRight} className='h-5 w-5 p-1.5 box-content text-zinc-500 cursor-pointer hover:text-zinc-100 hover:rounded-full hover:bg-zinc-800/50 transition-all'/>    
          </div>
        </div>

        <div className='flex gap-3 px-2'>
            <div className='p-1 grid place-items-center box-content rounded-full transition-all bg-zinc-800/50 hover:bg-zinc-800'>
              <FontAwesomeIcon icon={faXmark} className='h-5 w-5 text-zinc-300 font-light'/>
            </div>
            <div className='px-3 py-1 grid place-items-center box-content rounded-full transition-all bg-zinc-800/50 hover:bg-zinc-800 '>
              <a href="" className='font-medium text-sm text-zinc-200'>Playlists</a>
            </div>
        </div>

        <div className='flex justify-between items-center px-2'>
          <div className='p-1 box-content'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='h-4 w-4 text-zinc-400'/>
          </div>
          <div className='flex gap-1.5 items-center'>
            <strong className='text-zinc-400 font-medium text-sm'>
              Recentes
            </strong>
            <FontAwesomeIcon icon={faCaretDown} className='h-4 w-4 text-zinc-400'/>
          </div>
        </div>

        <div className='flex flex-col'>
            <Playlist title='A minha playlist nº 1' author='Yan Gabriel'/>
            <Playlist title='A minha playlist nº 2' author='Yan Gabriel'/>
        </div>
    </nav>
  )
}
