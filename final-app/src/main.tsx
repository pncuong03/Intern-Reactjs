import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store.ts'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import { PersistGate } from 'redux-persist/integration/react'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './theme.ts'
import CssBaseline from '@mui/material/CssBaseline'
import initRequest from './utilities/services/initRequest.ts'

const container = document.getElementById('root')!
const root = createRoot(container)

initRequest()

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CssVarsProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <CssBaseline />
          <App />
        </I18nextProvider>
      </CssVarsProvider>
    </PersistGate>
  </Provider>
)
