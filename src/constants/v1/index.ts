import { Interface } from '@ethersproject/abi'
import { ChainId } from 'quickswap-sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MATIC]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
  [ChainId.MUMBAI]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
