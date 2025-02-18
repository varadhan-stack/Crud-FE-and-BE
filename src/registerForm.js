//import Login from './loginForm';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { NotificationProvider, useNotification } from './NotificationContext';
import ToastNotification from './ToastNotification';

//import 'materialize-css';
//import { color } from 'react-materialize';

function Register() {

  const { showNotification } = useNotification();

  const navigate = useNavigate();
  const handleGoToLogin = () => {
    navigate("/login"); // Pass state
  };

  console.log("reg");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      //alert(response.data.message);
      showNotification(response.data.message, 'success')
      setFormData({ name: "", email: "", password: "", mobileNum: "" });
      if(response.data.resultType === 'success'){
        handleGoToLogin();
      }
    } catch (err) {
      //alert(err.response.data.error);
      showNotification(err.data.message, 'danger')
    }
  };

  return (
    <div className="App">
      <h1 className="text-white">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile No:</label>
          <input
            type="number"
            name="mobileNum"
            value={formData.mobileNum}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <Button type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}

const AppWrapper = () => (
  <NotificationProvider>
    <Register />
    <ToastNotification />
  </NotificationProvider>
);

export default AppWrapper;
