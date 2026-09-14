import './index.css'

function Contato() {
  return (
    <section id="contato" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">CONTATO</p>
          <h2>Vamos conversar?</h2>
          <p>
            Estou aberto a oportunidades de aprendizado, projetos acadêmicos e
            experiências que contribuam para minha formação em tecnologia.
          </p>
          <a className="button primary" href="mailto:miguel.silvafaria@example.com">
            Enviar e-mail
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-item">
            <span>E-mail</span>
            <a href="mailto:miguel.silvafaria@example.com">miguel.silvafaria@example.com</a>
          </div>
          <div className="contact-item">
            <span>GitHub</span>
            <a href="https://github.com/" target="_blank" rel="noreferrer">github.com</a>
          </div>
          <div className="contact-item">
            <span>LinkedIn</span>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedin.com</a>
          </div>

          <div className="audio-box">
            <span>Mensagem em áudio</span>
            <audio controls preload="metadata">
              <source src="/audio/portfolio-message.wav" type="audio/wav" />
              Seu navegador não suporta áudio HTML5.
            </audio>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
