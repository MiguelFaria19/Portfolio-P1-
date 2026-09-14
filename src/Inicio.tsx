import './index.css'

function Inicio() {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">ENGENHARIA DE SOFTWARE • PORTFÓLIO P1</p>
          <h1 className="pulse">Olá, eu sou <span>Miguel da Silva Faria.</span></h1>
          <p className="hero-text">
            Estudante de Engenharia de Software interessado em desenvolvimento web,
            programação e criação de soluções digitais.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">Ver projetos</a>
            <a className="button secondary" href="#contato">Entrar em contato</a>
          </div>
        </div>

        <figure className="profile-card">
          <img
            src="/profile.svg"
            alt="Ilustração representando Miguel, estudante de Engenharia de Software"
          />
          <figcaption>Desenvolvimento, tecnologia e aprendizado contínuo.</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Inicio
