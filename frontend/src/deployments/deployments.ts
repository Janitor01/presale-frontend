import { SubstrateDeployment } from '@scio-labs/use-inkathon'
import { env } from '@/config/environment'

/**
 * Add or change your custom contract ids here
 * DOCS: https://github.com/scio-labs/inkathon#2-custom-contracts
 */
export enum ContractIds {
  bugbite = 'bugbite', // Add your contract here
}

export const getDeployments = async (): Promise<SubstrateDeployment[]> => {
  const networks = env.supportedChains
  const deployments: SubstrateDeployment[] = []
  console.log("connected network:", networks)
  
  for (const networkId of networks) {
    for (const contractId of Object.values(ContractIds)) {
      const abi = await import(`@inkathon/contracts/deployments/${contractId}/${contractId}.json`)
      const { address } = await import(
        `@inkathon/contracts/deployments/${contractId}/${networkId}.ts`
      )
      console.log("contract ID:", contractId)
      console.log("contract ID:", networkId)
      deployments.push({ contractId, networkId, abi, address })
    }
  }

  return deployments
}
