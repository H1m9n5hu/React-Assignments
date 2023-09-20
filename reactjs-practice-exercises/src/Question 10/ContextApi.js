import React, { useContext, useEffect } from 'react';
import FirstContext from '../Context/Question 10/FirstContext';

const ContextApi = () => {
  const data = useContext(FirstContext);
  useEffect(() => {
    data.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='app'>
        <h1>Context API</h1>
        <div className='contentContainer'>
            <p> My name is {data.state.Name} and I am a {data.state.Job}.</p>
        </div>
    </div>
  )
}

export default ContextApi;