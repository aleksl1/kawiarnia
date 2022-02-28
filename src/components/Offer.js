import OfferOption from "./OfferOption";
import pancakesPhoto from "../assets/images/pancakes-g050b113c5_1920.jpg";
import coffePhoto from "../assets/images/coffee-gc1d0cbcb2_1920.jpg";
import grainsPhoto from "../assets/images/coffe-grains-gbcc72b9db_1920.jpg";

import "../styles/Offer.css";

const offersArr = [
  { title: "Wyśmienite kawy", path: coffePhoto, description: "coffe cup" },
  { title: "Ziarna na wynos", path: grainsPhoto, description: "coffe grains" },
  { title: "Ciasta jak domowe", path: pancakesPhoto, description: "pancakes" },
];

const Offer = () => {
  const offers = offersArr.map((offer) => (
    <OfferOption
      key={offer.path}
      title={offer.title}
      imagePath={offer.path}
      imageDescription={offer.description}
    />
  ));
  return (
    <section id="offer">
      <h2 className="section-title">Oferta</h2>
      <div className="offer-options">{offersArr.length > 0 && offers}</div>
    </section>
  );
};

export default Offer;
