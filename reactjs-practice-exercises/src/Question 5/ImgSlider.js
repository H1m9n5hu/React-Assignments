import React, { useState } from 'react';

const ImageArray = (prop) => {
  const arr = prop.images.map((value) => 
    <img src={value} alt='Gallery'></img>
  );
  var [index, setIndex] = useState(0);
  const preButtonHandler = () => {
    if(index === 0)
      setIndex(arr.length-1);
    else
      setIndex(index -= 1);
  };
  const nextButtonHandler = () => {
    if(arr.length-1 === index)
      setIndex(0);
    else
      setIndex(index += 1);
  };

  return (
    <div className='container'>
      <div className='mySlides'>
        <h2>Image Slider</h2>
        <button type='button' className='prev' onClick={preButtonHandler}>❮</button>
        {arr[index]}
        <button type='button' className='next' onClick={nextButtonHandler}>❯</button>
      </div>
    </div>
  )
}

export default ImageArray