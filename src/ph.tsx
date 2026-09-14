import './index.css'

const projects = [
  {
    number: '01',
    title: 'Portfólio P1',
    text: 'Site pessoal desenvolvido com Vite, React e TypeScript, com foco em estrutura semântica e responsividade.',
    tags: ['React', 'TypeScript', 'CSS'],
  },
  {
    number: '02',
    title: 'Interfaces Web',
    text: 'Prática de construção de telas, navegação e componentes reutilizáveis para experiências digitais mais organizadas.',
    tags: ['HTML', 'CSS', 'UI'],
  },
  {
    number: '03',
    title: 'Programação',
    text: 'Estudos de lógica e estruturas de dados para fortalecer a resolução de problemas e a base de desenvolvimento.',
    tags: ['Python', 'Lógica', 'Algoritmos'],
  },
]

function Ph() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROJETOS E HABILIDADES</p>
            <h2>O que estou construindo e aprendendo.</h2>
          </div>
          <p>
            Alguns dos principais temas que fazem parte da minha evolução acadêmica
            e prática em tecnologia.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span className="project-number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="tags" aria-label={`Tecnologias em ${project.title}`}>
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ph
