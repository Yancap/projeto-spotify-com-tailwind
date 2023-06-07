import React from 'react'
import { Header } from './Header'
import { Content } from './Content'

export const Main = () => {
  return (
    <main className='row-span-6 bg-gradient-to-t from-zinc-900/50 from-50% to-zinc-800 to-100% rounded-lg col-span-3 overflow-hidden'>
        <Header />
        <Content /> 
    </main>
  )
}
