import "../styles/About.css";
import CoffeImage from "../assets/images/coffee-g2cb39cea5_1920.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="image-container">
        <img src={CoffeImage} alt="coffe on a book" />
      </div>
      <div className="information-about-us">
        <div className="description-title">
          <h2>O nas</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd
        </p>
      </div>
    </section>
  );
};

export default About;
