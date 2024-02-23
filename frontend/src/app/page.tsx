'use client'

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { ContractIds } from '@/deployments/deployments'
import { ImageTrailHero } from '@/app/components/ImageTrailHero'
import { VanishText  } from '@/app/components/VanishText '
import { PresaleInfo } from '@/components/web3/presale-info'
import { Tokenomics } from '@/components/web3/tokenomics'
import { About } from '@/components/web3/about'
import { Logo } from '@/components/web3/logo'
import { BugBiteContractInteractions } from '@/components/web3/bugbite-contract-interaction'
import { HomeTopBar } from './components/home-top-bar'
import { useInkathon, useRegisteredContract } from '@scio-labs/use-inkathon'
import { Image } from 'lucide-react'
import TwitterBanner from 'public/images/Twitterbanner.png'




export default function HomePage() {
  const { error } = useInkathon()
  useEffect(() => {
    if (!error) return
    toast.error(error.message)
  }, [error])
  const { contract, address: contractAddress } = useRegisteredContract(ContractIds.bugbite)
  
  

  
  return (
    <>
      {/* Top Bar Section */}
      <div className='relative mt-2'>
        <HomeTopBar />
      </div>
      
      {/* Main Content Container */}
      <div className="mt-10 flex flex-col items-center justify-center">
        
        {/* Homepage Title Section */}
        <section className="w-full flex flex-wrap justify-center">
        <ImageTrailHero />
          <VanishText />
          
        </section>
        
        
        {/* Information Section */}
        <section className="w-full flex flex-wrap justify-center gap-4 mb-10">
       
          <Logo />
        
          <Tokenomics />
         
        </section>
        <section className="w-full flex flex-wrap justify-center gap-4 mb-10">
       
          <About />
        
      
         
        </section>
        <PresaleInfo />
        
        
      </div>
    </>
  );
}