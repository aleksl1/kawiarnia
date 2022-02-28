import "../styles/PhotoExpanded.css";

const PhotoExpanded = (props) => {
  return (
    <div className="photo-expanded-wrapper" onClick={props.onClose}>
      <div className="photo-expanded">
        <img src={props.imageUrl} alt={props.imageDescr} />
      </div>
    </div>
  );
};

export default PhotoExpanded;
