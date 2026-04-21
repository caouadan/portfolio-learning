import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => {
        if (!response.ok) throw new Error('Impossible de charger projects.json');
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <NavBar />
      <Header />

      {error && (
        <section className="container alert-error">
          <p>{error}</p>
        </section>
      )}

      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Projects projects={projects} />
            <Skills />
            <Experience />
            <Contact />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
        <Route path="*" element={
          <section className="container">
            <h2>Page introuvable</h2>
            <Link className="btn-view" to="/">Retour à l’accueil</Link>
          </section>
        } />
      </Routes>

      <footer>
        <div className="container">
          <p>&copy; 2026 Danie Chey. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
