import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css';

function Login() {

  const notifyMessage=(message,type)=>{
    '<div class="notify-cont"><span>Invalid Credential</span></div>'
  }

  const navigate = useNavigate();
    const handleGoToLanding = () => {
      navigate("/landing"); // Pass state
    };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password || !formData.name) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      if(response.data.resultType === 'success'){
        console.log('login success');
        handleGoToLanding();
      }

      if(response.data.resultType === 'fail'){
        console.log('login success');
        notifyMessage(response.data.message,response.data.resultType)
        //handleGoToLanding();
      }

      //console.log(response);
      //alert(response.data.message);
      setError('');
      // Redirect or store user token (e.g., in localStorage or context)
      localStorage.setItem('token', response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="App">
      <h1 className='text-white'>Login Form</h1>
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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;