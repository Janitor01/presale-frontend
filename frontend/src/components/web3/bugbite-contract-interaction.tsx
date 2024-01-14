'use client'

import { FC, useEffect, useState, useCallback } from 'react'

import { ContractIds } from '@/deployments/deployments'
import {
  contractQuery,
  decodeOutput,
  useInkathon,
  useRegisteredContract,
} from '@scio-labs/use-inkathon'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { contractTxWithToast } from '@/utils/contract-tx-with-toast'

type BuyTokenValues = { amountToSpend: string }

export const BugBiteContractInteractions: FC = () => {
  const { api, activeAccount, activeSigner } = useInkathon()
  const { contract, address: contractAddress } = useRegisteredContract(ContractIds.bugbite)
  const [tokenAmount, setTokenAmount] = useState<string>()
  const [isBuying, setIsBuying] = useState<boolean>(false)
  const { register, handleSubmit, watch } = useForm<BuyTokenValues>()
  const form = useForm<BuyTokenValues>()

  const amountToSpend = watch('amountToSpend')

  const [pricePerToken, setPricePerToken] = useState<string>('0');

  const fetchPricePerToken = useCallback(async () => {
    if (!api || !contract) return;

    try {
      const priceResult = await contractQuery(api, '', contract, 'get_price');


      if (priceResult.output) {
        const extractedPrice = priceResult.output.toString().slice(6, -1);
        const priceBigInt = Number(extractedPrice);
        const priceOutput = (priceBigInt / 1e12).toString();

        console.log(" Price Output:", priceOutput);

        setPricePerToken(priceOutput);
      } else {
        setPricePerToken('Unavailable');
      }
    } catch (error) {
      console.error('Error fetching price per token:', error);
      setPricePerToken('Error');
    }
  }, [api, contract]);

  // useEffect for initial fetch of price per token
  useEffect(() => {
    fetchPricePerToken();
  }, [fetchPricePerToken]);

  // Calculate the amount of tokens based on the input amount and price per token
  useEffect(() => {
    if (amountToSpend) {
      const amountInAzero = parseFloat(amountToSpend);
      const tokens = amountInAzero * parseFloat(pricePerToken); // Convert pricePerToken to number
      setTokenAmount(tokens.toString());
    }
  }, [amountToSpend, pricePerToken]);

  const buyTokens = async ({ amountToSpend }: BuyTokenValues) => {
    if (!activeAccount || !contract || !activeSigner || !api) {
        toast.error('Wallet not connected. Try again…');
        return;
    }

    setIsBuying(true);
    try {
        const spendAmountInSmallestUnit = parseFloat(amountToSpend) * 1e12; 

        const numericPricePerToken = parseFloat(pricePerToken);

        const costInAzero = spendAmountInSmallestUnit * numericPricePerToken; 

        await contractTxWithToast(api, activeAccount.address, contract, 'buy_token', { value: costInAzero }, [
            spendAmountInSmallestUnit, 
        ]);
    } catch (e) {
        console.error(e);
        toast.error('Error while trying to buy tokens. Try again…');
    } finally {
        setIsBuying(false);
    }
};




  return (
    <div className="flex max-w-[22rem] grow flex-col gap-4">
      <br />

      <Form {...form}>
        {/* Buy Tokens */}
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit(buyTokens)} className="flex flex-col gap-2">
              <FormItem>
                <FormLabel className="text-base">PAY: $AZERO</FormLabel>
                <FormControl>
                  <Input {...register('amountToSpend')} type="number" min="0" step="any" />
                </FormControl>
              </FormItem>
              <FormItem>
                <FormLabel className="text-base">GET: $BUG</FormLabel>
                <FormControl>
                  <Input value={tokenAmount} disabled={true} />
                </FormControl>
              </FormItem>
              <Button
                type="submit"
                className="bg-primary font-bold"
                disabled={isBuying}
                isLoading={isBuying}
              >
                Buy
              </Button>
            </form>
          </CardContent>
        </Card>
      </Form>

     
    </div>
  )
}
