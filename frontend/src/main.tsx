import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './AppRouter.tsx'
import { BrowserRouter } from 'react-router-dom'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <Auth0ProviderWithNavigate>
    <App />
    </Auth0ProviderWithNavigate>
    </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
