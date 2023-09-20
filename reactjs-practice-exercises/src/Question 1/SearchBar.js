import React, { useState } from 'react';

const SearchBar = () => {
  const arr = ["Banana", "Orange", "Mango", "Papaya", "Bhugati", "Lamborgini", "McLaren", "Ferrari", "Lyken Hypersport", "Rolls Royz"];
  const [inputValue, setInputValue] = useState('');
  const [resultedArr, setResultedArr] = useState([]);
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }
  const buttonHandler = () => {
    if(inputValue === '') {
        document.querySelector('.errorMsg').style.display = 'block';
        document.querySelector('.outputContainer').style.display = 'none';
    }
    else {
        setResultedArr(arr.filter((el) => el.toLowerCase().includes(inputValue.toLowerCase())));
        document.querySelector('.errorMsg').style.display = 'none';
        document.querySelector('.outputContainer').style.display = 'block';
    }
  }
  return (
    <div className='app'>
        <h1>Search Bar</h1>
        <div className='contentContainer'>
            <input type="search" className='searchBar' onChange={inputHandler} value={inputValue} placeholder="Search..." />
            <button type='button' onClick={buttonHandler} className='btn'>Search</button>
            <p className='errorMsg'>Please enter your query first!</p>
            <div className='outputContainer'>
                {resultedArr.map((value) =>
                    <p>{value}</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default SearchBar;