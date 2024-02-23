'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import 'chart.js/auto';
import crown from 'public/images/crown.png'






export const Logo: FC = () => {

  return (
      <>
      <div className='mt-10 max-w-[22rem] font-black'>

      
           <h1 className="mb-6 max-w-4xl text-4xl font-black leading-[1.1] text-slate-200  overflow-hidden">
            TOKENOMICS <span className="text-indigo-500">$IOU</span>
          </h1>
          <h2 className='text-indigo-500 text-2xl'>Liquidity</h2>
          <h3>250,000,000</h3>
          <h2 className='text-indigo-500 text-2xl'>Presale</h2>
          <h3>300,000,000</h3>
          <h2 className='text-indigo-500 text-2xl'>Presale 2</h2>
          <h3>127,000,000</h3>
          <h2 className='text-indigo-500 text-2xl'>Airdrops</h2>
          <h3>73,000,000</h3>
          <h2 className='text-indigo-500 text-2xl'>Liquidity</h2>
          <h3>250,000,000</h3>
          </div>
         
      </>
  );
};
export default Logo;