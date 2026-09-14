import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Inicio from './inicio.tsx'
import Contato from './contato.tsx'
import Menu from './menu.tsx'
import Ph from './ph.tsx'
import Sobre from './sobre.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Inicio />
    <Contato />
    <Menu />
    <Ph />
    <Sobre />
  </StrictMode>,
)
