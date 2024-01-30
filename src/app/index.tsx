import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from "./router";
import { QueryClient } from "@tanstack/react-query";
import { Providers } from "@/app/providers";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 5 * 60 * 1000,
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers router={router} client={queryClient}/>
  </React.StrictMode>,
)
