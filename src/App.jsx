import './App.css'
import LandingPage from './LANDINGPAGE/LANDINGPAGE.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CONTACTANOS from "./contactanos/CONTACTANOS.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactanos" element={<CONTACTANOS />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
