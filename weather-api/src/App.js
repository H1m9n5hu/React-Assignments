import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WeatherAPI from './Components/WeatherAPI';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WeatherAPI />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;