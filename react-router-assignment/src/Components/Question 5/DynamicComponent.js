import React from 'react';
import { useParams } from 'react-router-dom';

const DynamicComponent = () => {
  const params = useParams();
  const {productName} = params;
  return (
    <div>
        <h1>You can get {productName}'s here!</h1>
    </div>
  )
}

export default DynamicComponent