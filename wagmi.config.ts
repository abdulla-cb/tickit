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
        EventRegistry: '0xEAAF82D0af408F3F04adbcc688Ed7754071bEd9C',
      },
    }),
    foundry({
      project: './onchain/lib/basefriends',
      deployments: {
        Basefriends: '0x128aa5d8dad4148a8eb1f5aebda0e0a62510b87e',
      },
      exclude: ['IMulticall3.sol/**', 'IERC165.sol/**', '**.s.sol/**', '**.t.sol/**'],
    }),
    react(),
  ],
});
