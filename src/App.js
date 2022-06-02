import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/appointment' element={<Appointment/>}></Route>
      </Routes>
      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
