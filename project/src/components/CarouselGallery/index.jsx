import './style.css'
function CarouselGallery({ images, onThumbnailClick, currentImageIndex }) {
  return (
    <div className="carouselGallery">
      {images.map((image, index) => (
        <img
          className={index === currentImageIndex  ? 'selected' : ''}
          key={index}
          src={image}
          alt={`Thumbnail ${index}`}
          onClick={() => onThumbnailClick(index)}
        />
      ))}
    </div>
  );
}
export default CarouselGallery