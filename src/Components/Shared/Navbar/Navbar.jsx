
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../Firebase/Firebase.config';
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const handleLogout = async () => {
    await signOut();
  };
    return (
        <div className="navbar bg-teal-900 mb-5 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='dashboard'>Dashboard</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">TaskTrail</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='dashboard'>Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  {!user?.email ? (
          <div className="navbar-end flex gap-4">
            <Link to={"/login"} className="btn bg-white hover:bg-slate-600 text-black border-0">
              Login
            </Link>
            <Link to={"/register"} className="btn bg-white hover:bg-stone-600 text-dark border-0">
              Registration
            </Link>
          </div>
        ) : (
          <div className="navbar-end flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                <img src={user.photoURL} alt="User Avatar" className="rounded-full" />

              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li><button className="btn bg-transparent border-0 shadow-transparent">
                  <Link to={'/profile'}>Profile</Link>
                </button></li>
                <li><button className="btn bg-transparent border-0 shadow-transparent" onClick={handleLogout}>
                  Logout
                </button></li>
              </ul>
            </div>
          </div>
        )}
  </div>
</div>
    );
};

export default Navbar;