import { Aside } from '@/components/Aside'
import { Footer } from '@/components/Footer'
import { Main } from '@/components/Main'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-4 grid-rows-6	 gap-2 p-2">
      <Aside />
      <Main />
      <Footer />
    </div>
  )
}
