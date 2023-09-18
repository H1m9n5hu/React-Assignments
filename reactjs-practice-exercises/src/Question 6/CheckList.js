import React, { useState } from 'react';

const CheckList = () => {
  const [sum, setSum] = useState(0);
  const inputHandler = (value) => {
    setSum(sum+value);
  };

  return (
    <div className='app'>
        <h1>Restaurant Menu App</h1>
        <div className='list-container'>
            <ul>
                <li>
                    <input type="checkbox" id="matar-paneer" onClick={() => inputHandler(120)}/>
                    <label for="matar-paneer">Matar Paneer</label>
                </li>
                <li>
                    <input type="checkbox" id="1" onClick={() => inputHandler(160)}/>
                    <label for="1">Shahi Paneer</label>
                </li>
                <li>
                    <input type="checkbox" id="2" onClick={() => inputHandler(60)}/>
                    <label for="2">Chhole Bhature</label>
                </li>
                <li>
                    <input type="checkbox" id="3" onClick={() => inputHandler(80)}/>
                    <label for="3">Daal Bati</label>
                </li>
                <li>
                    <input type="checkbox" id="4" onClick={() => inputHandler(280)}/>
                    <label for="4">Moong Daal Halwa</label>
                </li>
                <li>
                    <input type="checkbox" id="5" onClick={() => inputHandler(280)}/>
                    <label for="5">Gaajar Halwa</label>
                </li>
                <li>
                    <input type="checkbox" id="6" onClick={() => inputHandler(220)}/>
                    <label for="6">Gulab Jamun</label>
                </li>
                <li>
                    <input type="checkbox" id="7" onClick={() => inputHandler(600)}/>
                    <label for="7">Kaju Katli</label>
                </li>
                <li>
                    <input type="checkbox" id="8" onClick={() => inputHandler(250)}/>
                    <label for="8">Kalakand</label>
                </li>
            </ul>
        </div>
        <p>Total amount : {sum} </p>
    </div>
  )
}

export default CheckList;