import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRouter from "./AppRouter/AppRouter.jsx";
import AuthProvider from "./AuhtProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'  

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRouter></AppRouter>
        <Toaster></Toaster>
      </AuthProvider>
    </QueryClientProvider>

  </BrowserRouter>
);
