import "../styles/Gallery.css";
import { FaExpand } from "react-icons/fa";
import coffeImg1 from "../assets/images/coffee-g8e6326781_1920.jpg";
import coffeImg2 from "../assets/images/coffee-gc1d0cbcb2_1920.jpg";
import coffeImg3 from "../assets/images/cake-gf019ffda1_1920.jpg";
import coffeImg4 from "../assets/images/coffee-g1d05741af_1920.jpg";

import PhotoExpanded from "./PhotoExpanded";

import { useState } from "react";

const Gallery = () => {
  const [expandedPhotoUrl, setExpandedPhotoUrl] = useState(false);

  const expandPictureHandler = (e) => {
    setExpandedPhotoUrl(e.target.dataset.url);
  };

  const closeExpandedPictureHandler = () => {
    setExpandedPhotoUrl(false);
  };

  return (
    <section id="gallery">
      <h2 className="section-title">Galeria</h2>
      <div className="gallery-container">
        <div className="gallery-item">
          <FaExpand
            className="photo-expand"
            data-url={coffeImg1}
            onClick={expandPictureHandler}
          />
          <div className="gallery-item-filter"></div>
        </div>
        <div className="gallery-item">
          <FaExpand
            className="photo-expand"
            data-url={coffeImg2}
            onClick={expandPictureHandler}
          />
        </div>
        <div className="gallery-item">
          <FaExpand
            className="photo-expand"
            data-url={coffeImg3}
            onClick={expandPictureHandler}
          />
        </div>
        <div className="gallery-item">
          <FaExpand
            className="photo-expand"
            data-url={coffeImg4}
            onClick={expandPictureHandler}
          />
        </div>
      </div>
      {expandedPhotoUrl && (
        <PhotoExpanded
          imageUrl={expandedPhotoUrl}
          onClose={closeExpandedPictureHandler}
        />
      )}
    </section>
  );
};

export default Gallery;
