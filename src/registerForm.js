//import Login from './loginForm';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

export default function Register() {
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
        "http://localhost:5000/api/users/register",
        formData
      );
      alert(response.data.message);
      setFormData({ name: "", email: "", password: "", mobileNum: "" });
    } catch (err) {
      alert(err.response.data.error);
    }
  };
    const navigate = useNavigate();
    const handleGoToHome = () => {
      navigate("/login"); // Pass state
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
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

        <button type="submit" onClick={handleGoToHome}>
          Register
        </button>
      </form>
    </div>
  );
}
