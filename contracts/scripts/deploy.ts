import { getDeploymentData } from '@/utils/getDeploymentData'
import { initPolkadotJs } from '@/utils/initPolkadotJs'
import { writeContractAddresses } from '@/utils/writeContractAddresses'
import { deployContract } from '@scio-labs/use-inkathon/helpers'

const main = async () => {
  const initParams = await initPolkadotJs()
  const { api, chain, account } = initParams



  // Deploy bugbite contract
  const bugbiteData = await getDeploymentData('bugbite')
  const bugbite = await deployContract(api, account, bugbiteData.abi, bugbiteData.wasm, 'default', [])

  // Write contract addresses to `{contract}/{network}.ts` file(s)
  await writeContractAddresses(chain.network, {
    
    bugbite, // Add your contract here
  })
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => process.exit(0))
