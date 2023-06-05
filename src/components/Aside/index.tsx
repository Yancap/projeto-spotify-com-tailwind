import React from 'react'
import { Library } from './Library'
import { Navbar } from './Navbar'
import { Playlist } from './Playlist'

export const Aside = () => {
  return (
    <aside className='row-span-5 grid grid-rows-5 gap-2'>
        <Navbar />
        <Library />
    </aside>
  )
}
