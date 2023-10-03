import { useState } from 'react';
import './style.css'

const MAX_VALUE = 800;
const MIN_VALUE = 500;

function Carousel({images, currentImageIndex, setCurrentImageIndex}) {
    const [mouseX, setMouseX] = useState(0);

    const handleMouseMove = ({clientX}) => {
        // const {clientX}  = e;
        setMouseX(clientX);
      };

      const handleMoveImg = () => {
        if(mouseX > MAX_VALUE){
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // для зацикливания картинки (4 + 1) % 5 = 0
        }else if(mouseX < MIN_VALUE){
          setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // ((0-1) + 5) % 5 = 4
        }
        
      }

    return (
      <div className='carousele' onMouseMove={handleMouseMove} onClick={handleMoveImg}>
        <img src={images[currentImageIndex]} alt="Current" />
      </div>
    );
  }

export default Carousel

