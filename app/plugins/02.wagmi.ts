import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base } from '@reown/appkit/networks'
import { WagmiPlugin } from '@wagmi/vue'

export default defineNuxtPlugin((nuxtApp) => {
  const wagmiAdapter = new WagmiAdapter({
    networks: [base],
    projectId: '56509f7938410f59330ee8e835f2e736',
  })

  nuxtApp.vueApp.use(WagmiPlugin, {
    config: wagmiAdapter.wagmiConfig,
  })

  return {
    provide: {
      wagmiAdapter,
    },
  }
})