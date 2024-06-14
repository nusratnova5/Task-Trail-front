import React from 'react';
import bannerbg from '../Banner/banner.png'

const Banner = () => {
    return (
        <div className="hero bg-center bg-cover" style={{backgroundImage: `url(${bannerbg})`}}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;