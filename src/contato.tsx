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
        </div>

        <div className="contact-card">
          <div className="contact-item">
            <span>E-mail</span>
            <b><p>migueldsf3@gmail.com</p></b>
          </div>
          <div className="contact-item">
            <span>GitHub</span>
            <a href="https://github.com/MiguelFaria19" target="_blank" rel="noreferrer">github.com</a>
          </div>

          <div className="audio-box">
            <span>Mensagem em áudio</span>
            <audio controls preload="metadata">
              <source src="/audio/yoooou.wav" type="audio/wav" />
            </audio>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
