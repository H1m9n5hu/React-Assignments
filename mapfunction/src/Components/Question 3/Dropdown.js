import React, { useState } from 'react'

const Dropdown = (prop) => {
  const [msg, setMsg] = useState('');
  const buttonHandler = (e) => {
    setMsg(document.getElementById('sctId').value);
    document.querySelector('.msg').style.setProperty('display', 'block');
  };
  return (
    <div>
        <h1>Dropdown Select Box</h1>
        <form>
            <label>Choose your favourite Car : </label>
            <select id='sctId'>
                {prop.arr.map((car) =>
                    <option id='optId' className='opt'>{car}</option>
                )}
            </select>
            <button type='button' onClick={buttonHandler}>Submit</button>
        </form>
        <div className='msg'>
            <p>Your favourite car is {msg}.</p>
        </div>
    </div>
  )
}

export default Dropdown