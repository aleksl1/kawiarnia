import Navigation from "./Navigation";

import "../styles/Header.css";

const Header = () => {
  return (
    <div id="header">
      <div className="header-bg-nav">
        <Navigation />
      </div>
      <div className="header-bg-top"></div>
      <div className="header-bg-bottom"></div>
      <div className="title">
        <h1>Kawiarnia u Gabrysi</h1>
      </div>
    </div>
  );
};

export default Header;
