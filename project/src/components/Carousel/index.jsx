import './style.css'
function Carousel({images, currentImageIndex}) {
    return (
      <div className='carousele'>
        <img src={images[currentImageIndex]} alt="Current" />
      </div>
    );
  }
export default Carousel
// import { useState } from 'react';
// import './style.css'

// const MAX_VALUE = 800;
// const MIN_VALUE = 500;

// function Carousel({images, currentImageIndex}) {
//     const [mouseX, setMouseX] = useState(0);
//     const [currentImg, setCurrentImg] = useState(currentImageIndex);

//     console.log(mouseX)

//     const handleMouseMove = (e) => {
//         const  {clientX}  = e;
//         setMouseX(clientX);
//       };
//       const handleMoveImg = () => {
//         if(mouseX > MAX_VALUE){
//             setCurrentImg((prevIndex) => (prevIndex + 1) % images.length); // для зацикливания картинки
//         }else if(mouseX < MIN_VALUE){
//             setCurrentImg((prevIndex) => (prevIndex - 1 + images.length) % images.length); // ((0-1) + 5) % 5
//         }
//       }
//     return (
//       <div className='carousele' onMouseMove={handleMouseMove} onClick={handleMoveImg}>
//         <img src={images[currentImg]} alt="Current" />
//       </div>
//     );
//   }
// export default Carousel
