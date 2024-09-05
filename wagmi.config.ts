import { defineConfig } from '@wagmi/cli';
import { foundry, react } from '@wagmi/cli/plugins';

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    foundry({
      project: './onchain',
      deployments: {
        EventRegistry: '0x0B14cD58D7a18B1f22e634D76Ba4E55f25e1723A',
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
