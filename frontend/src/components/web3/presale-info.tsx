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
import { cn } from '@/utils/cn'
import { BN } from '@polkadot/util';
import { formatBalance } from './formatBalance'


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
  const twitterHref = 'https://twitter.com/OfficePartyNFT'
  const discordHref = 'https://discord.gg/uQ4BFH4KG7'
  const telegramHref = 'https://t.me/OfficeParty'
  const internetHref = 'https://op2.app'

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
    if (!api || !contract) return

    try {
      const soldResult = await contractQuery(api, '', contract, 'get_tokens_sold');
      const totalResult = await contractQuery(api, '', contract, 'get_total_presale_tokens');
      
      let soldOutput, totalOutput;
      if (soldResult.output) {
        
        try {
          const hexString = soldResult.output.toString();
          const formattedHexString = hexString.slice(9, -2); 
          const soldValue = new BN(formattedHexString, 16);
          soldOutput = formatBalance(api, soldValue, { withUnit: false }).replace(/,/g, '');

        } catch (error) {
          console.error("Error parsing sold result:", error);
          soldOutput = 'Error';
        }
      } else {
        soldOutput = 'Unavailable';
      }
      
      if (totalResult.output) {
        const hexString = totalResult.output.toString(); // Get the full string
        const formattedHexString = hexString.slice(9, -2); // Adjust slicing as needed
        const totalValue = new BN(formattedHexString, 16); // Convert to BN
        totalOutput = formatBalance(api, totalValue, { withUnit: false }).replace(/,/g, ''); // Remove commas
       
      } else {
        totalOutput = 'Unavailable';
      }
    setTokensSold(soldOutput);
    setTotalPresaleTokens(totalOutput);
} catch (error) {
    console.error('Error fetching token data:', error);
    setTokensSold('Error');
    setTotalPresaleTokens('Error');
}
  }, [api, contract]) 


  useEffect(() => {
    fetchTokenData() 

    const intervalId = setInterval(() => {
      fetchTokenData()
    }, 10000) 

    return () => clearInterval(intervalId) 
  }, [fetchTokenData])


  useEffect(() => {
    const tokensSoldNumber = parseFloat(tokensSold)
    const totalPresaleTokensNumber = parseFloat(totalPresaleTokens)
    const originalTotalPresaleTokens = tokensSoldNumber + totalPresaleTokensNumber
    const progressPercentage = originalTotalPresaleTokens > 0 ? (tokensSoldNumber / originalTotalPresaleTokens) * 100 : 0

    setTimeout(() => {
      setProgressWidth(progressPercentage)
    }, 500)
  }, [tokensSold, totalPresaleTokens])

  return (
    <>
      <div className="flex max-w-[22rem] grow flex-col gap-4">
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
                  {Math.round(progressWidth)}%
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
        </Card>

        
        <Card>
        <h2 className="text-center font-mono text-gray-400 mt-4">Socials</h2>
          <CardContent className="pb-5 pt-6">
            <div className="text-sm leading-7">
            
            <div className="flex select-none space-x-2">
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
        </div>
            </div>
          </CardContent>
        </Card>
         
      </div>

    </>
  )
}
