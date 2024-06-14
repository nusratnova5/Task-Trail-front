import React from 'react';
import bannerbg from '../Banner/banner.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-center bg-cover" style={{backgroundImage: `url(${bannerbg})`}}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Master Your Tasks with Ease</h1>
            <p className="mb-5">Simplify your workflow and boost productivity with our intuitive task management system. Perfect for teams and individuals alike.</p>
            <Link to='/dashboard'><button className="btn btn-secondary">Get Started</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;