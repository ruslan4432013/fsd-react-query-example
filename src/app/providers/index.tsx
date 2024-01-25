import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import type { Router } from "@remix-run/router/dist/router";


type Props = {
  router: Router
  client: QueryClient
}

export const Providers = ({ router, client }: Props) => {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}
