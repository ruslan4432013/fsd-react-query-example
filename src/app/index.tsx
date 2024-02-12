import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from "./router";
import { Providers } from "@/app/providers";
import { queryClient } from "@/shared/api/query-client";
import './global.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers router={router} client={queryClient}/>
  </React.StrictMode>,
)
