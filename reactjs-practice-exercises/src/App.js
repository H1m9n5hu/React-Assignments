import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Counter from './Question 2/Counter';
// import DisplayArrayList from './Question 3/DisplayArrayList';
// import Accordion from './Question 4/Accordion';
// import ImgSlider from './Question 5/ImgSlider';
// import LoginPage from './Question 7/LoginPage';
// import MultiplePageRendering from './Question 9/MultiplePageRendering';
// import About from './Question 9/About';
// import Contact from './Question 9/Contact';
// import CheckList from './Question 6/CheckList';
// import RestApiData from './Question 8/RestApiData';
// import SearchBar from './Question 1/SearchBar';
import ContextApi from './Question 10/ContextApi';
import FirstState from './Context/Question 10/FirstState';

function App() {
  // const images = ['https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://plus.unsplash.com/premium_photo-1669497495583-d552beb8ece4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1667738969059-279a97058ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRyZWslMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1674691336686-d5ae67632a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRyZWslMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60'];

  return (
    <div className="App">
      <BrowserRouter>
        <FirstState>
          <Routes>
            {/* <Route path='/' element={<Counter/>} /> */} {/* Question 2 */}
            {/* <Route path='/' element={<DisplayArrayList />} /> */} {/* Question 3 */}
            {/* <Route path='/' element={<Accordion/>} /> */} {/* Question 4 */}
            {/* <Route path='/' element={<ImgSlider images={images}/>}></Route> */} {/* Question 5 */}
            {/* <Route path='/' element={<LoginPage />}></Route> */} {/* Question 7 */}
            {/* <Route path='/' element={<MultiplePageRendering />}></Route> 
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route> */} {/* Question 9 */}
            {/* <Route path='/' element={<CheckList />}></Route> */} {/* Question 6 */}
            {/* <Route path='/' element={<RestApiData />}></Route> */} {/* Question 8 */}
            {/* <Route path='/' element={<SearchBar />}></Route> */} {/* Question 1 */}
            <Route path='/' element={<ContextApi />}></Route> {/* Question 10 */}
          </Routes>
        </FirstState>
      </BrowserRouter>
    </div>
  );
}

export default App;
