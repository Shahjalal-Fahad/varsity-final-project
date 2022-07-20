import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
// import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './pages/DashBoard/DashBoard';
import MyAppointment from './pages/DashBoard/MyAppointment';
import MyReview from './pages/DashBoard/MyReview';
import MyHistory from './pages/DashBoard/MyHistory';
import AllUsers from './pages/DashBoard/AllUsers';
function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>

        {/* <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='/review' element={<MyReview></MyReview>}></Route>
        </Route> */}

        <Route path="dashboard" element={<RequireAuth><DashBoard></DashBoard></RequireAuth>} >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<AllUsers/>}></Route>
          <Route path="history" element={<MyHistory/>}></Route>
          {/* <Route path="history" element={<MyHistory></MyHistory>}></Route> */}
        </Route>
        
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
      <ToastContainer />


    </div>
  );
}

export default App;
