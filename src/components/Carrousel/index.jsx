import React, { useState } from 'react'
import ArrowNext from '../../assets/VectorNext.png'
import ArrowPerv from '../../assets/VectorPerv.png'
import '../../styles/Carrousel.css'

function Carrousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  /*calcule le nombre total d'images du tableau d'images passé en prop.*/
  const totalImages = pictures.length

  /*fonction  qui incrémente l'index de l'image actuelle pour afficher l'image suivante*/

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages)
  }
  /* fonction qui décrémente l'index de l'image actuelle pour afficher l'image précédente */

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages,
    )
  }

  //   const prevSlide = () => {
  //     if(currentImageIndex === totalImages - 1) {
  //       setCurrentImageIndex(totalImages = 0);
  //     } else {
  //       setCurrentImageIndex(totalImages + 1);
  //     }
  //     return(totalImages);
  // };

  const imgCarrousel = (
    <img
      className="carousel-image"
      src={pictures[currentImageIndex]}
      alt={`pictures ${currentImageIndex + 1}/${totalImages}`}
    />
  )
  if (totalImages <= 1) {
    return imgCarrousel
  }
  return (
    <div className="carousel-container">
      <img
        className="arrow left-arrow"
        src={ArrowPerv}
        alt="Contenu précedént"
        onClick={prevSlide}
      />
      ${imgCarrousel}
      <img
        className="arrow right-arrow"
        src={ArrowNext}
        alt="Contenu suivant"
        onClick={nextSlide}
      />
      <div className="pagination">
        {currentImageIndex + 1}/{totalImages}
      </div>
    </div>
  )
}

export default Carrousel
