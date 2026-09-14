import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Inicio from './Inicio'
import Contato from './contato'
import Menu from './menu'
import Ph from './ph'
import Sobre from './sobre'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <header className="site-header">
      <Menu />
    </header>

    <main>
      <Inicio />
      <Sobre />
      <Ph />
      <Contato />
    </main>

    <footer className="site-footer">
      <p>© 2026 Miguel da Silva Faria · Portfólio P1</p>
    </footer>
  </StrictMode>,
)
