import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast";
import React from "react";
import ReactDOM from "react-dom/client";
import './styles/global.css'
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
        <AuthProvider>
          <Toaster
              position="top-right"
              reverseOrder={false}
          />
          <App />
        </AuthProvider>
      </ThemeProvider>
  </StrictMode>,
)
