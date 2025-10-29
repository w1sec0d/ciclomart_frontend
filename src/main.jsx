// Main entry point for the application

// React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Routing
import { BrowserRouter } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import { QueryClientProvider } from 'react-query'
// Store
import store from './store/store.js'
// Query Client
import queryClient from './services/queryClient.js'
// App
import App from './App.jsx'
// CSS
import './index.css'
// i18n
import './i18n/config.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
