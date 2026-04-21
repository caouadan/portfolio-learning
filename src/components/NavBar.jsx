import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  function goToSection(id) {
    const scroll = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // si on est dans une route projet, on revient à la page d'accueil, puis scroll
    if (window.location.hash.includes('/project/')) {
      navigate('/');
      setTimeout(scroll, 150);
    } else {
      scroll();
    }
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <button className="logo" onClick={() => { navigate('/'); setTimeout(() => goToSection('top'), 0); }}>Danie Chey</button>
        <ul className="nav-links">
          <li><button type="button" onClick={() => goToSection('about')}>À propos</button></li>
          <li><button type="button" onClick={() => goToSection('projects')}>Mes projets</button></li>
          <li><button type="button" onClick={() => goToSection('skills')}>Compétences</button></li>
          <li><button type="button" onClick={() => goToSection('experience')}>Expérience</button></li>
          <li><button type="button" onClick={() => goToSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}
