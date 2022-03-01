import "../styles/MobileNav.css";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <ul className="mobile-list">
        <li className="mobile-item">
          <a href="#about" className="mobile-item-link">
            O nas
          </a>
        </li>
        <li className="mobile-item">
          <a href="#offer" className="mobile-item-link">
            Oferta
          </a>
        </li>
        <li className="mobile-item">
          <a href="#gallery" className="mobile-item-link">
            Galeria
          </a>
        </li>
        <li className="mobile-item">
          <a href="#contact" className="mobile-item-link">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
