import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/homepage/home.jsx'
import ShoppingCartProvider from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShoppingCartProvider>
    <App />
  </ShoppingCartProvider>
  </BrowserRouter>
)
