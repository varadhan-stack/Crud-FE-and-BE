import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



function Home() {
    const navigate = useNavigate();
    const handleGoToSignUp = () => navigate("/register"); // Pass state
    const handleGoToLogin = () => navigate("/login"); // Pass state
  return (
    <div className='w-100 pl-0 pr-0'>
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Our Modern Website</h1>
          <p className="lead">Building your ideas into reality with style</p>
          <Button to="/register" onClick={handleGoToSignUp} className="btn btn-light btn-lg mr-20">Sign up</Button>
          <Button to="/login" onClick={handleGoToLogin} className="btn btn-light btn-lg">Sign in</Button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5">Our Amazing Features</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Fast Performance</h5>
                  <p className="card-text">Our website is designed to load quickly, ensuring a smooth user experience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Responsive Design</h5>
                  <p className="card-text">Optimized for all devices, ensuring perfect readability and navigation on any screen size.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text">We provide round-the-clock support to help you whenever you need assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; 2025 Modern Website, Inc. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
