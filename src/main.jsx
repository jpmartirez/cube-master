import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import App from './components/App.jsx'
import { BrowserRouter, HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(

    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>

  
)
