'use client'

import { FC, useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { ContractIds } from '@/deployments/deployments'
import { contractQuery, useInkathon, useRegisteredContract } from '@scio-labs/use-inkathon'
import { Card, CardContent } from '@/components/ui/card'
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import IOULOGO from 'public/images/IOULOGO.png'




export const Logo: FC = () => {

  return (
      <>
          <div className="flex max-w-[22rem] grow flex-col gap-4">
            <br />
            <Card>
                <CardContent className="pb-3 pt-6 grid grid-cols-2 gap-4">
                    <div className="w-full h-full flex justify-center items-center col-span-1 row-span-2">
                    {/* Content for top left */}
                    <div><Image src={IOULOGO} priority height={212} alt="Github Repository" /></div>
                    </div>
                    
                    <div className="w-full h-full flex justify-center items-center col-span-1">
                    {/* Content for top right */}
                    <div className="text-center">
                    <h2 className="text-center font-mono text-gray-400 mt-4">Market Cap</h2>
                    <br />
                    <strong>$100k</strong>
                    </div>
                    </div>
                    
                    <div className="w-full h-full flex justify-center items-center col-span-1">
                    {/* Content for bottom right */}
                    <div className="text-center mb-5">
                    <h2 className="text-center font-mono text-gray-400 mt-4">Price per $IOU</h2>
                    <br />
                    <strong >0.0001 $AZERO</strong>
                    </div>
                    </div>
                </CardContent>
            </Card>




          </div>
      </>
  );
};
export default Logo;