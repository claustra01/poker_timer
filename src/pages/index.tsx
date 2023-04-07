import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

type Level = {
  isBreak:boolean,
  sb:number,
  bb:number,
  ante:number,
  duration:number
}

export default function Home() {

  const [structure, setStructure] = useState<Level[]>([
    {isBreak:false, sb:10, bb:20, ante:20, duration:600},
    {isBreak:false, sb:20, bb:40, ante:40, duration:600},
    {isBreak:false, sb:30, bb:60, ante:60, duration:600},
    {isBreak:false, sb:40, bb:80, ante:80, duration:600},
    {isBreak:false, sb:50, bb:100, ante:100, duration:600},
    {isBreak:true, sb:0, bb:0, ante:0, duration:600},
    {isBreak:false, sb:70, bb:140, ante:140, duration:600},
    {isBreak:false, sb:100, bb:200, ante:200, duration:600},
    {isBreak:false, sb:150, bb:300, ante:300, duration:600},
    {isBreak:false, sb:200, bb:400, ante:400, duration:600},
    {isBreak:false, sb:300, bb:600, ante:600, duration:600},
    {isBreak:true, sb:0, bb:0, ante:0, duration:600},
    {isBreak:false, sb:500, bb:1000, ante:1000, duration:600},
    {isBreak:false, sb:700, bb:1400, ante:1400, duration:600},
    {isBreak:false, sb:1000, bb:2000, ante:2000, duration:600},
    {isBreak:false, sb:2500, bb:5000, ante:5000, duration:600},
    {isBreak:false, sb:5000, bb:10000, ante:10000, duration:3599}
  ])


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
