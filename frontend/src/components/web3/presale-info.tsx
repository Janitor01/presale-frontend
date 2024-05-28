'use client'

import { FC, useEffect, useState, useCallback, AnchorHTMLAttributes } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ContractIds } from '@/deployments/deployments'
import { contractQuery, useInkathon, useRegisteredContract } from '@scio-labs/use-inkathon'
import { Card, CardContent } from '@/components/ui/card'
import discord from 'public/icons/discord.svg'
import telegram from 'public/icons/telegram.svg'
import twitter from 'public/icons/twitter.svg'
import internet from 'public/icons/internet.svg'
import paper from 'public/icons/paper.svg'
import { cn } from '@/utils/cn'
import { BN } from '@polkadot/util';
import { formatBalance } from './formatBalance'
import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";


interface StyledIconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
}

export const PresaleInfo: FC = () => {
  const { api } = useInkathon()
  const { contract, address: contractAddress } = useRegisteredContract(ContractIds.bugbite)
  const [tokensSold, setTokensSold] = useState<string>('0')
  const [totalPresaleTokens, setTotalPresaleTokens] = useState<string>('0')
  const [progressWidth, setProgressWidth] = useState(0)
  const twitterHref = 'https://twitter.com/ioumeme'
  const discordHref = 'https://discord.gg/uQ4BFH4KG7'
  const telegramHref = 'https://t.me/ioumeme'
  const internetHref = 'https://op2.app'
  const paperHref = 'https://docs.google.com/document/d/e/2PACX-1vRH3t1afrEHwAEYtqJJLUUv1RrMZOUzdqPOHM7ov2Gp9Iad7H6idyAZ94Dhl34u8_jEJuw1frXatPtk/pub'

  const StyledIconLink: React.FC<StyledIconLinkProps> = ({ className, children, ...rest }) => (
    <Link
      className={cn(
        'group opacity-90 transition-all hover:-translate-y-0.5 hover:opacity-100',
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  )


  const fetchTokenData = useCallback(async () => {
    if (!api || !contract) return;
  
    try {
      const soldResult = await contractQuery(api, '', contract, 'get_tokens_sold');
      const totalResult = await contractQuery(api, '', contract, 'get_total_presale_tokens');
      
      let soldOutput, totalOutput;
      if (soldResult.output) {
        
        try {
          const hexString = soldResult.output.toString();
          const formattedHexString = hexString.slice(9, -2); 
          const soldValue = new BN(formattedHexString, 16);
          // Format sold tokens with up to two decimals without trailing zeros
          soldOutput = parseFloat(formatBalance(api, soldValue, { withUnit: false }).replace(/,/g, '')).toFixed(2);
  
        } catch (error) {
          console.error("Error parsing sold result:", error);
          soldOutput = 'Error';
        }
      } else {
        soldOutput = 'Unavailable';
      }
      
      if (totalResult.output) {
        const hexString = totalResult.output.toString();
        const formattedHexString = hexString.slice(9, -2);
        const totalValue = new BN(formattedHexString, 16);
        // Format total presale tokens similarly
        totalOutput = parseFloat(formatBalance(api, totalValue, { withUnit: false }).replace(/,/g, '')).toFixed(2);
       
      } else {
        totalOutput = 'Unavailable';
      }
      // Convert back to number to remove unnecessary zeros and then to string for display
      setTokensSold(parseFloat(soldOutput).toString());
      setTotalPresaleTokens(parseFloat(totalOutput).toString());
    } catch (error) {
      console.error('Error fetching token data:', error);
      setTokensSold('Error');
      setTotalPresaleTokens('Error');
    }
  }, [api, contract]);
   


  useEffect(() => {
    fetchTokenData() 

    const intervalId = setInterval(() => {
      fetchTokenData()
    }, 10000) 

    return () => clearInterval(intervalId) 
  }, [fetchTokenData])


  useEffect(() => {
    const tokensSoldNumber = parseFloat(tokensSold);
    const totalPresaleTokensNumber = parseFloat(totalPresaleTokens);
    const progressPercentage = (tokensSoldNumber / (tokensSoldNumber + totalPresaleTokensNumber)) * 100;
  
    setTimeout(() => {
      setProgressWidth(progressPercentage);
    }, 500);
  }, [tokensSold, totalPresaleTokens]);
 

  return (

      <>
      
        {/*
        <br />
        <Card>
          <h2 className="text-center font-mono text-gray-400 mt-4">Presale Progress</h2>
          <CardContent className="pb-3 pt-6">
            <div className="text-sm leading-7">
          
              <div className="w-full bg-gray-200 rounded-full h-8 dark:bg-gray-700 overflow-hidden">
              <div
                className="bg-blue-600 h-8 rounded-full progress-bar flex items-center justify-center text-white font-bold"
                style={{ width: `${progressWidth}%`, borderRadius: '9999px' }}
              >
                {progressWidth >= 100 ? "SOLD OUT" : `${Math.round(progressWidth)}%`}
              </div>

              </div>
            </div>
            <br></br>
            <div className="text-sm leading-7">
              Tokens Sold:
              <strong className="float-right ml-6">{tokensSold}</strong>
            </div>
            <div className="text-sm leading-7">
              Remaining Tokens:
              <strong className="float-right ml-6">{totalPresaleTokens}</strong>
            </div>
            <div className="text-sm leading-7">
              Presale Tokens:
              <strong className="float-right ml-6">{parseFloat(tokensSold) + parseFloat(totalPresaleTokens)}</strong>
            </div>
            <div className="text-sm leading-7">
              Total Supply:
              <strong className="float-right ml-6">1000000000</strong>
            </div>
          </CardContent>
        </Card>*/}
        
      
        <div className="group relative mx-auto w-full mb-10 max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
          
        <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
          {/* Flex container for icons to appear side by side */}
          <h1 className="mb-6 max-w-4xl text-4xl font-black leading-[1.1] text-slate-200  overflow-hidden">
            Follow us!
          </h1>
          <div className="flex justify-center space-x-2"> {/* Adjusted for horizontal layout */}
            <StyledIconLink href={discordHref} target="_blank">
              <Image src={discord} priority height={32} alt="Discord" />
            </StyledIconLink>
            <StyledIconLink href={telegramHref} target="_blank">
              <Image src={telegram} priority height={32} alt="Telegram" />
            </StyledIconLink>
            <StyledIconLink href={twitterHref} target="_blank">
              <Image src={twitter} priority height={32} alt="X" />
            </StyledIconLink>
            <StyledIconLink href={internetHref} target="_blank">
              <Image src={internet} priority height={32} alt="Website" />
            </StyledIconLink>
            <StyledIconLink href={paperHref} target="_blank">
              <Image src={paper} priority height={32} alt="Website" />
            </StyledIconLink>
          </div>
        </div>

        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </>
  );
};