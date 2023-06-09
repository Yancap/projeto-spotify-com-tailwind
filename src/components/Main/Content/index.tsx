import React from 'react'
import './index.css'
import { Card } from '../Card'

export const Content = () => {
  return (
    <section className='scrollbar overflow-y-scroll overflow-x-hidden py-2 px-6 h-auto max-h-[calc(100%-4rem)] grid gap-10'>
        <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-2xl hover:underline hover:decoration-2 cursor-pointer'>
                Reproduzido recentemente
            </h3>
            <div className='flex gap-4'>
                <Card 
                  type='music' 
                  title='Holy Lands' 
                  description='ANGRA'
                  image='https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/04/Angra-Holy-Land-Capa.jpg'
                />
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-2xl hover:underline hover:decoration-2 cursor-pointer'>
                Experimente algo diferente
            </h3>
            <div className='flex gap-4'>
              <Card 
                    type='music' 
                    title='Top 50 - Brasil' 
                    description='A tua atualização diária
                    das faixas mais ouvidas de sua playlist'
                    image='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_default.jpg'
                />
                <Card 
                    type='music' 
                    title='Iowa' 
                    description='Slipknot'
                    image='https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/SlipknotIowaCapa.jpg/220px-SlipknotIowaCapa.jpg'
                />
                <Card 
                  type='music' 
                  title='Holy Lands' 
                  description='ANGRA'
                  image='https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/04/Angra-Holy-Land-Capa.jpg'
                />
                <Card 
                  type='music' 
                  title='Rock Classics' 
                  description='Rock legends & epic songs that continue to inspire generations'
                  image='https://www.westwoodone.com/wp-content/uploads/2022/05/ClassicRock_1000x1000.jpg'
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
                    title='Your Daily Podcasts' 
                    description=''
                    image='https://daily-mix.scdn.co/covers/your-daily-podcasts/daily-podcasts-en.jpg'
                />
                <Card 
                    type='podcast' 
                    title='Your Daily Podcasts' 
                    description=''
                    image='https://daily-mix.scdn.co/covers/your-daily-podcasts/daily-podcasts-en.jpg'
                />
                <Card 
                    type='podcast' 
                    title='Your Daily Podcasts' 
                    description=''
                    image='https://daily-mix.scdn.co/covers/your-daily-podcasts/daily-podcasts-en.jpg'
                />
                <Card 
                    type='podcast' 
                    title='Your Daily Podcasts' 
                    description=''
                    image='https://daily-mix.scdn.co/covers/your-daily-podcasts/daily-podcasts-en.jpg'
                />
            </div>
        </div>
        <footer className='h-64 grid items-center'>
          <div className='bg-zinc-700 h-px'/>
        </footer>
    </section>
  )
}
