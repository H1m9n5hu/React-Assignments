import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Counter from './Question 2/Counter';
// import DisplayArrayList from './Question 3/DisplayArrayList';
import Accordion from './Question 4/Accordion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Counter/>} /> */}
          {/* <Route path='/' element={<DisplayArrayList />} /> */}
          <Route path='/' element={<Accordion/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
