import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvide from './context/PlayerContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerContextProvide>

    <App />
    </PlayerContextProvide>

    </BrowserRouter>

  </StrictMode>,
)