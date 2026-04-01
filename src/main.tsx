import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import 'swiper/css/bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
