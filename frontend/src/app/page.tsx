'use client'

import { useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import { ContractIds } from '@/deployments/deployments'
import { HomePageTitle } from '@/app/components/home-page-title'
import { ChainInfo } from '@/components/web3/chain-info'
import { PresaleInfo } from '@/components/web3/presale-info'
import { Tokenomics } from '@/components/web3/tokenomics'
import { Logo } from '@/components/web3/logo'
import { BugBiteContractInteractions } from '@/components/web3/bugbite-contract-interaction'
import { HomeTopBar } from './components/home-top-bar'
import { useInkathon, useRegisteredContract } from '@scio-labs/use-inkathon'
import dynamic from 'next/dynamic';
import Draggable from "react-draggable";


const MyTimer = dynamic(() => import('@/components/web3/timer'), { ssr: false });


export default function HomePage() {
  const { error } = useInkathon()
  useEffect(() => {
    if (!error) return
    toast.error(error.message)
  }, [error])
  const { contract, address: contractAddress } = useRegisteredContract(ContractIds.bugbite)
  
  

  
  return (
    <>
    <div className='relative mt-2 '>
      <HomeTopBar />
    </div>

    <div className=" container flex grow flex-col items-center justify-center">
      {/* Title */}
      <HomePageTitle />          
          
      <div className="flex w-full flex-wrap items-start justify-center gap-4">
        {/* Greeter Read/Write Contract Interactions */}
        <Logo />         
        <BugBiteContractInteractions />          
      </div>
        
        
      <div className="flex w-full flex-wrap items-start justify-center gap-4">
        {/* Chain Metadata Information */}
        <Tokenomics />
        <PresaleInfo />        
      </div>
      
        

      {/* Contract Address */}
      <p className="text-center font-mono text-xs text-gray-600 mt-4 mb-4">
          Contract Address: <br />
          {contract ? contractAddress : 'Loading…'} 
      </p>

      <Draggable>
        <div className='mb-5'>
          <MyTimer />
        </div>
      </Draggable>
    </div>
      
    </>
  )
}
