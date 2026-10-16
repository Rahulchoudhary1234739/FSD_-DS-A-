import React from 'react';
import imageSource from '../assets/hero.png';

const Image = () => {
  const [height, setHeight] = React.useState(200);
  const [width, setWidth] = React.useState(200);
  return (
    <div>
        <button onClick={() => setHeight(height + 10)}>Increase Height</button>
        <button onClick={() => setHeight(height - 10)}>Decrease Height</button>
        <button onClick={() => setWidth(width + 10)}>Increase Width</button>
        <button onClick={() => setWidth(width - 10)}>Decrease Width</button>
      <img src={imageSource} alt="Sample" height={height} width={width} border="1"/>
    </div>
  );
}

export default Image;