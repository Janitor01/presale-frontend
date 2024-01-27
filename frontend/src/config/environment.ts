/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { alephzero } from '@scio-labs/use-inkathon'
import { getSupportedChains } from './get-supported-chains'
import { getURL } from './get-url'

/**
 * Environment Variables defined in `.env.local`.
 * See `env.local.example` for documentation.
 */
export const env = {
  url: getURL(),
  isProduction: process.env.NEXT_PUBLIC_PRODUCTION_MODE === 'true',

  defaultChain: process.env.NEXT_PUBLIC_DEFAULT_CHAIN = 'alephzero',
  supportedChains: getSupportedChains(),
}
