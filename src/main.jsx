import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WhatsAppButton from './LANDINGPAGE/WHATS/WHATS.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WhatsAppButton phone="541127135239" message="¡Hola! Estoy interesado en sus servicios." />
    <App />
  </StrictMode>,
)
