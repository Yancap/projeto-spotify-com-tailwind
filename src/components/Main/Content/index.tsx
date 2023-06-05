import React from 'react'
import { Card } from '../Card'

export const Content = () => {
  return (
    <section className='overflow-y-scroll py-2 px-6 h-auto max-h-[calc(100%-4rem)]  grid gap-10'>
        <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-2xl hover:underline hover:decoration-2 cursor-pointer'>
                Reproduzido recentemente
            </h3>
            <div className='flex gap-4'>
                <Card 
                  type='music' 
                  title='Top 50 - Brasil' 
                  description='A tua atualização diária
                  das faixas mais ouvidas de sua playlist'
                />
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-2xl hover:underline hover:decoration-2 cursor-pointer'>
                Reproduzido recentemente
            </h3>
            <div className='flex gap-4'>
              <Card 
                    type='music' 
                    title='Top 50 - Brasil' 
                    description='A tua atualização diária
                    das faixas mais ouvidas de sua playlist'
                />
                <Card 
                    type='music' 
                    title='Top 50 - Brasil' 
                    description='A tua atualização diária
                    das faixas mais ouvidas de sua playlist'
                />
                <Card 
                  type='music' 
                  title='Top 50 - Brasil' 
                  description='A tua atualização diária
                  das faixas mais ouvidas de sua playlist'
                />
                <Card 
                  type='music' 
                  title='Top 50 - Brasil' 
                  description='A tua atualização diária
                  das faixas mais ouvidas de sua playlist'
                />
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-2xl hover:underline hover:decoration-2 cursor-pointer'>
                Podcasts originais e exclusivo do Spotify
            </h3>
            <div className='flex gap-4'>
              <Card 
                    type='podcast' 
                    title='Top 50 - Brasil' 
                    description='A tua atualização diária
                    das faixas mais ouvidas de sua playlist'
                />
                <Card 
                  type='podcast' 
                  title='Top 50 - Brasil' 
                  description='A tua atualização diária
                  das faixas mais ouvidas de sua playlist'
                />
                <Card 
                  type='podcast' 
                  title='Top 50 - Brasil' 
                  description='A tua atualização diária
                  das faixas mais ouvidas de sua playlist'
                />
                <Card 
                  type='podcast' 
                  title='Top 50 - Brasil' 
                  description='A tua atualização diária
                  das faixas mais ouvidas de sua playlist'
                />
            </div>
        </div>
        <footer className='h-64 grid items-center'>
          <div className='bg-zinc-700 h-px'/>
        </footer>
    </section>
  )
}
