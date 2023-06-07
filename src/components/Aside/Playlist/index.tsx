import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface PlaylistProps{
    title: string;
    author: string;
}

export const Playlist = ({title, author}: PlaylistProps) => {
  return (
    <div className='p-2  flex gap-4 rounded-md cursor-pointer hover:bg-zinc-800/30'>
        <div className='h-12 w-12 bg-zinc-800 rounded p-3.5'>
            <FontAwesomeIcon icon={faMusic} className='text-zinc-400 '/>
        </div>
        <div className='flex flex-col justify-between'>
            <strong className='font-medium'>
                {title}
            </strong>
            <i className='text-zinc-400 not-italic text-sm'>
                {author}
            </i>
        </div>
    </div>
  )
}
