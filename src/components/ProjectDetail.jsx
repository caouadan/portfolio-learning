import { useNavigate, useParams } from 'react-router-dom';

export default function ProjectDetail({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="container">
        <h2>Projet non trouvé</h2>
        <p>Le projet demandé est introuvable.</p>
        <button className="btn-view" onClick={() => navigate('/')}>Retour aux projets</button>
      </section>
    );
  }

  return (
    <section className="container project-detail">
      <button className="btn-back" onClick={() => navigate(-1)}>← Retour</button>
      <h2>{project.title}</h2>
      <p className="project-hero">{project.tagline}</p>
      <img
        src={project.image || 'assets/placeholder.jpg'}
        alt={project.title}
        className="project-hero-img"
        loading="lazy"
      />
      <div className="project-content">
        <h3>Contexte</h3>
        <p>{project.context}</p>
        <h3>Objectifs</h3>
        <p>{project.objectives}</p>
        <h3>Stack technique</h3>
        <ul>{project.stack.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
        <h3>Compétences développées</h3>
        <p>{project.skills}</p>
        <h3>Résultats & impact</h3>
        <p>{project.results}</p>
        <h3>Perspectives d'amélioration</h3>
        <p>{project.improvements}</p>
        {project.url && (
          <a className="btn-view" href={project.url} target="_blank" rel="noopener noreferrer">Voir le projet</a>
        )}
      </div>
    </section>
  );
}
