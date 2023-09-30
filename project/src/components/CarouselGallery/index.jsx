import { useState } from 'react';
import './style.css'
function CarouselGallery({ images, onThumbnailClick, currentImageIndex }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(currentImageIndex);
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    onThumbnailClick(index);
  }
  return (
    <div className="carouselGallery">
      {images.map((image, index) => (
        <img
          className={index === selectedImageIndex  ? 'selected' : ''}
          key={index}
          src={image}
          alt={`Thumbnail ${index}`}
          onClick={() => handleThumbnailClick(index)}
        />
      ))}
    </div>
  );
}
export default CarouselGallery