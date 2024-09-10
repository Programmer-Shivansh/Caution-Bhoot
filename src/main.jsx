import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import { CharacterAnimationsProvider } from './context/CharAnimation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            globalStyles: (_theme) => ({
              body: {
                margin: 0,
                width: "100vw",
                height: "100vh",
                overflow: 'hidden',
              },
              "#root": {
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 0,
              },
            }),
          }}>
          <CharacterAnimationsProvider>
            < App />
          </CharacterAnimationsProvider>
            
    </MantineProvider>

  </StrictMode>,
)
