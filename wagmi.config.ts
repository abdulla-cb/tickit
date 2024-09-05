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
	react()
  ],
});
