import "../styles/Navigation.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import MobileNav from "./MobileNav";
const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNavHandler = () => {
    setShowMobileNav((prevState) => !prevState);
  };
  return (
    <>
      <nav className="desktop-nav">
        <ul className="menu-list-left">
          <li className="menu-item">
            <a href="#about" className="menu-item-link menu-about">
              O nas
            </a>
          </li>
          <li className="menu-item">
            <a href="#offer" className="menu-item-link menu-offer">
              Oferta
            </a>
          </li>
        </ul>
        <ul className="menu-list-right">
          <li className="menu-item">
            <a href="#gallery" className="menu-item-link menu-gallery">
              Galeria
            </a>
          </li>
          <li className="menu-item">
            <a href="#contact" className="menu-item-link menu-contact">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
      <div className="mobile-icon">
        <GiHamburgerMenu onClick={toggleMobileNavHandler} />
      </div>

      {showMobileNav && <MobileNav />}
    </>
  );
};

export default Navigation;
