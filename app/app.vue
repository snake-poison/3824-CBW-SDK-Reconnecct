<template>
  <div>
    <h1>AppKit Button</h1>
    <appkit-button />

    <div>
      <p>Address: {{ address }}</p>
      <p>State: {{ status }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { createAppKit } from '@reown/appkit/vue'
import { useAccount, useReconnect } from '@wagmi/vue'
const wagmiAdapter = useNuxtApp().$wagmiAdapter

const metadata = {
  name: 'AppKit Button',
  description: 'AppKit Button',
  url: 'https://appkit.reown.xyz',
  icons: ['https://appkit.reown.xyz/icon.png'],
}

const { address, status} = useAccount()
const { reconnect } = useReconnect()

createAppKit({
        adapters: [wagmiAdapter],
        networks: [...wagmiAdapter.wagmiConfig.chains],
        metadata,
        projectId: '56509f7938410f59330ee8e835f2e736',
        includeWalletIds: ['fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa'],
      })
  onMounted(() => {
    reconnect()
  })
</script>
