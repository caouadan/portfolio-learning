import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = ['Tous', 'Développement', 'Design', 'E-learning'];

export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const displayed = useMemo(() => {
    if (selectedCategory === 'Tous') return projects;
    return projects.filter((item) => item.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section id="projects">
      <div className="container">
        <h2>Mes projets</h2>

        <div className="project-filters" role="tablist" aria-label="Filtrer projets">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {!projects.length ? (
          <p>Chargement des projets...</p>
        ) : (
          <div className="project-grid">
            {displayed.map((project) => (
              <article key={project.id} className="project-card" aria-label={`Projet ${project.title}`}>
                <Link className="project-card-link" to={`/project/${project.id}`}>
                  <div className="project-image-wrapper">
                    <img
                      src={project.image || 'assets/placeholder.jpg'}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.tagline}</p>
                    <p><strong>Contexte :</strong> {project.context}</p>
                    <div className="project-tags">
                      {project.stack.map((tech, i) => <span key={i} className="tag">{tech}</span>)}
                    </div>
                  </div>
                </Link>
                {project.url && (
                  <div className="project-card-footer">
                    <a className="btn-view" href={project.url} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
