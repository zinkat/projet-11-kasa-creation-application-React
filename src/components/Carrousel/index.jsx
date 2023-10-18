import React, { useState } from 'react'
import ArrowNext from '../../assets/VectorNext.png'
import ArrowPerv from '../../assets/VectorPerv.png'
import '../../styles/Carrousel.css'

function Carrousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const totalImages = pictures.length

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages)
  }

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages,
    )
  }
  return (
    <div className="carousel-container">
      <img
        className="arrow left-arrow"
        src={ArrowPerv}
        alt="Contenu précedént"
        onClick={prevSlide}
      />
      <img
        className="carousel-image"
        src={pictures[currentImageIndex]}
        alt={`pictures ${currentImageIndex + 1}/${totalImages}`}
      />
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
