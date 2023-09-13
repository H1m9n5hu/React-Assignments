import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './Components/Question 1/Home';
// import About from './Components/Question 1/About';
// import Contact from './Components/Question 1/Contact';
// import ErrorPage from './Components/Question 2/ErrorPage';
// import Dashboard from './Components/Question 3/Dashboard';
// import DashboardProfile from './Components/Question 3/DashboardProfile';
// import DashboardSettings from './Components/Question 3/DashboardSettings';
// import LoginPage from './Components/Question 4/LoginPage';
// import ProtectedRoute from './Components/Question 4/ProtectedRoute';
import Home from './Components/Question 5/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          {/* <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} /> */}
          {/* <Route path="/dashboard" element={<ProtectedRoute Component={Dashboard}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="/*" element={<ErrorPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
