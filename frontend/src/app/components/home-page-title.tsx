import Image from 'next/image'
import Link from 'next/link'
import { AnchorHTMLAttributes, FC, useState } from 'react'


import githubIcon from 'public/icons/github-button.svg'
import telegramIcon from 'public/icons/telegram-button.svg'
import vercelIcon from 'public/icons/vercel-button.svg'
import inkathonLogo from 'public/images/inkathon-logo.png'

import { cn } from '@/utils/cn'




export const HomePageTitle: FC = () => {
  const title = '$IOU PRESALE'
  const desc = 'Brought to you by Office Party'
  const seco = 'Mainnet Version'
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => setIsExpanded(!isExpanded);


  return (
    <>
      <div className="mt-20 flex flex-col items-center text-center font-mono">
        {/* Logo & Title */}
      
      
          <h1 className="text-[2.5rem] font-black tracking-tighter">{title}</h1>
        

        {/* Tagline & Lincks */}
        <p className="mb-0 mt-4 text-gray-400">{desc}</p>
        <p className="mb-2 mt-0 text-gray-400">{seco}</p>
        

        <div
          className={`text-container ${isExpanded ? 'expanded' : ''} flex flex-col items-center text-center font-mono overflow-hidden`}
          style={{ position: 'relative', maxWidth: '46rem', textAlign: 'justify' }}
          onClick={toggleText}
        >
          <p>
          
        $IOU, short for I Owe You, is an engaging meme token presented by Office Party, exclusively designed for the Aleph Zero ecosystem. 
        In line with the ethos of Office Party, $IOU boasts a commitment to 100% community engagement, humorously coupled with a promise of 100% zero utility. 
        <br />
        <br />
        To ensure your security, always use a burner wallet when connecting to decentralized applications (dApps) online. This practice keeps your main assets safe while you explore and enjoy the lively world of $IOU and Office Party. 
        Dive into this adventure with a light heart and a focus on community interaction. Have fun and embrace the essence of $IOU!
        
        </p>
        </div>
        


        <div className="mt-8  h-[1px] w-[5rem] max-w-46rem bg-gray-800" />
      </div>
    </>
  )
}
