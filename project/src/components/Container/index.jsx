import { useState } from "react";
import Carousel from "../Carousel"
import CarouselGallery from "../CarouselGallery"
import './style.css'

const images = [
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"
  ];

  function Container() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

    const handleThumbnailClick = (index) => {
      setCurrentImageIndex(index);
    };
  
    return (
      <div className="container">
        <Carousel images={images} currentImageIndex={currentImageIndex}  />
        <CarouselGallery images={images} onThumbnailClick={handleThumbnailClick} currentImageIndex={currentImageIndex} />
      </div>
    );
  }
export default Container