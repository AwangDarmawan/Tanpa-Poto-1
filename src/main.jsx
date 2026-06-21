import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/bebas-neue";
import "@fontsource/montserrat";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";
import "@fontsource/playfair-display";
import "@fontsource/cormorant-garamond";
import "@fontsource/cinzel";
import "@fontsource/inter";
import "@fontsource/manrope";
import "@fontsource/allura";
import "@fontsource/amiri";
AOS.init({
  duration: 1000,
  easing: "ease-out-cubic",
  once: false,
  mirror: true,
  offset: 80,
  delay: 100,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
