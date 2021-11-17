import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Appointment from './Pages/Appointment/Appoinment/Appoinment';
import Login from './Pages/Share/Login/Login/Login';
import Register from './Pages/Share/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import DashBoardHome from "./Pages/DashBoard/DashBoardHome/DashBoardHome";
import AdminRoute from "./Pages/DashBoard/AdminRoute/AdminRoute";
import Payment from "./Pages/DashBoard/Payment/Payment";
import MakeAdmin from "./Pages/DashBoard/MakeAdmin/MakeAdmin";
import AddDoctor from "./Pages/DashBoard/AddDoctor/AddDoctor";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}> 
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/appointment" element={<PrivateRoute><Appointment /></PrivateRoute>}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/dashboard"element={<DashBoard />}>
            <Route  path='/dashboard' element={ <DashBoardHome />}>
                       
                       </Route>
                       <Route path={`/dashboard/payment/:id`} element={<AdminRoute><Payment /></AdminRoute>}>
                           
                       </Route>
                       <Route path={`/dashboard/makeadmin`} element={<AdminRoute> <MakeAdmin /></AdminRoute>}>
                          
                       </Route>
                       <Route path={`/dashboard/adddoctor`} element={<AdminRoute><AddDoctor /></AdminRoute>}>
                           
                       </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
