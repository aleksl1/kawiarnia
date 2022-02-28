import "../styles/OfferOption.css";

const OfferOption = (props) => {
  return (
    <div className="offer-option">
      <div className="offer-option-image">
        <img src={props.imagePath} alt={props.imageDescription} />
      </div>
      <div className="offer-option-title">
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default OfferOption;
