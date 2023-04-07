import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

type Level = {
  sb:number,
  bb:number,
  ante:number,
  duration:number
}

export default function Home() {

  const [structure, setStructure] = useState<Level[]>([])


  return (
    <>
      <Head>
        <title>Poker Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Hello, World!
      </div>
    </>
  )
}
