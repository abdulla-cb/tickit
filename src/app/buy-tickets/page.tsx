'use client';
import { eventRegistryContractAddress } from 'src/constants';
import eventRegistryArtifact from '../../../onchain/out/EventRegistry.sol/EventRegistry.json';
import {useConfig, useReadContract} from 'wagmi'
const abi = [...eventRegistryArtifact.abi] as const;

export default function Page() {
  const config = useConfig();
	const {data: result} = useReadContract({config,
		abi,
		address: eventRegistryContractAddress,
		functionName: 'getEventById',
		args: ["0xe792c154426523cd95e80ea449b320ad67f135cc757dc62f96d11aed17938eea"]
	})
	console.log(result)
  return <div>
  Cool
  </div>;
}
