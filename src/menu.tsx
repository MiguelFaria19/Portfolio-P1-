import { useState } from 'react'
import './index.css'

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav container" aria-label="Navegação principal">
      <a className="brand" href="#inicio" onClick={closeMenu}>
        Miguel<span>.</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
        <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
        <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
        <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
      </ul>
    </nav>
  )
}

export default Menu
