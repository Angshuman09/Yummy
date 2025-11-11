import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from './AppRouter.tsx'
import { Toaster } from './components/ui/sonner.tsx'
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
    <AppRouter/>
    <Toaster visibleToasts={1} position='top-right' richColors/>
    </Auth0ProviderWithNavigate>
    </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
