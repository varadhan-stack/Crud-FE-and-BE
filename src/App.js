import Register from './registerForm';
import { Routes,Route  } from "react-router-dom";

//import ReactDOM from 'react-dom/client';

// import './App.css';
 import Login from './loginForm';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// function App() {
//  return Register()
// }
function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;