import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Offer from "./components/Offer";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <About />
      <Offer />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
