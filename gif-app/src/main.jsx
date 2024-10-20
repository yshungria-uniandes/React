import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifApp } from './GifApp'

// Styles
import '../styles.css'


// Create root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifApp />
  </StrictMode>,
);
