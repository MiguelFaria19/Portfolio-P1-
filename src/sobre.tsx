import './index.css'

function Sobre() {
  return (
    <section id="sobre" className="section section-muted">
      <div className="container narrow">
        <p className="eyebrow">SOBRE MIM</p>
        <h2>Construindo minha trajetória em tecnologia.</h2>
        <p>
          Sou estudante de Engenharia de Software e estou desenvolvendo minha base
          em programação, desenvolvimento front-end e construção de interfaces web.
          Busco evoluir por meio de projetos práticos, aprender novas tecnologias e
          transformar ideias em experiências digitais funcionais.
        </p>
        <div className="facts">
          <div><strong>Curso</strong><span>Engenharia de Software</span></div>
          <div><strong>Foco</strong><span>Front-end e desenvolvimento web</span></div>
          <div><strong>Objetivo</strong><span>Aprender, criar e evoluir</span></div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
