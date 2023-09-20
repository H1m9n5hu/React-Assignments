import React, { useEffect, useState } from 'react';

const RestApiData = () => {
  const [qoute, setQoute] = useState('');
  const [authorName, setAuthorName] = useState('');
  const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2daa8dbf50msh2232dce152669d2p1198cbjsn85e611b64741',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  };

  const fetchAPIData = async (url, options) => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setAuthorName(data.originator.name);
      setQoute(data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAPIData(url, options);
  }, []);

  const buttonHandler = () => {
    
  }

  return (
    <div className='app'>
        <h1>Thoughts of the Day</h1>
        <div className='contentContainer'>
          <h2>{qoute}</h2>
          <p className='authorName'>Author's Name : {authorName}.</p>
        </div>
        <button type='button' onClick={buttonHandler}>Start</button>
    </div>
  )
}

export default RestApiData;