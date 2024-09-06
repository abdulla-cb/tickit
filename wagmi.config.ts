import { defineConfig } from '@wagmi/cli';
import { foundry, react } from '@wagmi/cli/plugins';
import reverseRegistrar from './onchain/lib/basefriends/lib/basenames/out/ReverseRegistrar.sol/ReverseRegistrar.0.8.26.json';
import l2Resolver from './onchain/lib/basefriends/lib/basenames/out/L2Resolver.sol/L2Resolver.0.8.26.json';

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'ReverseRegistrar',
      abi: reverseRegistrar.abi,
      address: '0xa0A8401ECF248a9375a0a71C4dedc263dA18dCd7',
    },
    {
      name: 'L2Resolver',
      abi: l2Resolver.abi,
      address: '0x6533C94869D28fAA8dF77cc63f9e2b2D6Cf77eBA',
    },
  ],
  plugins: [
    foundry({
      project: './onchain',
      deployments: {
        EventRegistry: '0x64d10B0C2202C26338071741663aA955012c8A44',
      },
    }),
    foundry({
      project: './onchain/lib/basefriends',
      deployments: {
        Basefriends: '0xfd8d9995d894f8cb0b9898bf4dfb64ef03ff9725',
      },
      exclude: ['IMulticall3.sol/**', 'IERC165.sol/**'],
    }),
    react(),
  ],
});
