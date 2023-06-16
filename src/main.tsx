import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { WagmiConfig } from 'wagmi'

import { config } from './wagmi'
import Home from './pages/home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <Home />
    </WagmiConfig>
  </React.StrictMode>,
)
