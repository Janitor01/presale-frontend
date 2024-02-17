'use client'

import { FC, useEffect, useState, useCallback } from 'react'

import { ContractIds } from '@/deployments/deployments'
import {
  contractQuery,
  useInkathon,
  useRegisteredContract,
} from '@scio-labs/use-inkathon'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { BN, bnToBn } from '@polkadot/util'
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
  const form = useForm<BuyTokenValues>({
    defaultValues: {
      amountToSpend: '0'
    }
  });
  
  
  const amountToSpend = watch('amountToSpend')
  

  const [pricePerToken, setPricePerToken] = useState<string>('0');

  const fetchPricePerToken = useCallback(async () => {
    if (!api || !contract) return;
  
    let priceOutput = 'Unavailable'; // Default value
    let pricePerToken = '0'; // Declare outside try...catch
  
    try {
      const priceResult = await contractQuery(api, '', contract, 'get_price');
      console.log("Price per token:", priceResult)
  
      if (priceResult.output) {
        const hexString = priceResult.output.toString();       
        const formattedHexString = hexString.slice(6, -1); 
        const pricePerTokenBigInt = Number(formattedHexString) / 1e12;
        pricePerToken = Number(pricePerTokenBigInt).toFixed(4); // Set value here
      } 
    } catch (error) {
      console.error('Error fetching price per token:', error);
      priceOutput = 'Error';
    }
  
    setPricePerToken(pricePerToken); // Update state
  }, [api, contract]);


  // useEffect for initial fetch of price per token
  useEffect(() => {
    fetchPricePerToken();
  }, [fetchPricePerToken]);

  // Calculate the amount of tokens based on the input amount and price per token
  useEffect(() => {
    if (amountToSpend) {
      const amountInAzero = parseFloat(amountToSpend);
      const numericPricePerToken = parseFloat(pricePerToken);
      const tokens = ((amountInAzero / numericPricePerToken));
      setTokenAmount(tokens.toString());
    }
  }, [amountToSpend, pricePerToken]);

  const buyTokens = async ({ amountToSpend }: BuyTokenValues) => {
    if (!activeAccount || !contract || !activeSigner || !api || !amountToSpend || tokenAmount === undefined) {
      toast.error('Wallet not connected or invalid input. Try again…');
      return;
    }
  
    setIsBuying(true);
    try {
      // Convert to strings to avoid floating point arithmetic issues
      const amountToSpendString = (parseFloat(amountToSpend) * 1e12).toString();
      const tokenAmountString = (parseFloat(tokenAmount) * 1e12).toString(); // Adjust if token also uses decimals
  
      // Convert strings to BigNumber
      const amountToSpendInSmallestUnit = new BN(amountToSpendString);
      const tokenAmountInContractUnit = new BN(tokenAmountString);
  
      await contractTxWithToast(api, activeAccount.address, contract, 'buy_token', { value: amountToSpendInSmallestUnit }, [
        tokenAmountInContractUnit,
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
                  <Input {...register('amountToSpend')} type="number" min="0" step="any"/>
                </FormControl>
              </FormItem>
              <FormItem>
                <FormLabel className="text-base">GET: $IOU</FormLabel>
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
