import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';



import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Ruter/route.jsx';
import AuthProvider from './Provider/AuthProvider';
import { SearchProvider } from './Provider/SearchProvider';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <AuthProvider>
      <SearchProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>

      </SearchProvider>
    </AuthProvider>


  </React.StrictMode>
);
