import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark m-3 bg-transparent">
      <Link className="navbar-brand fs-2" to="/home">Noxe</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        {props.UserData ? <>
          <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Movies">Movie</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/tvshow">Tvshow</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/people">People</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/network">Network</Link>
          </li>
        </ul>
        
        
        </> : ''}
        
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active d-flex align-items-center p-2">
            <i className="fab mx-2 fa-facebook"></i>
            <i className="fab mx-2 fa-twitter"></i>
            <i className="fab mx-2 fa-youtube"></i>
            <i className="fab mx-2 fa-google"></i>
          </li>
          {props.UserData ? <><li className="nav-item active">
            <span id='LogOut'  onClick={props.LogOut} className="nav-link">LogOut</span>
          </li></>:<><li className="nav-item active">
            <Link className="nav-link" to="/login">LogIn</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/register">Register</Link>
          </li></>}
          
          
        </ul>
      </div>
    </nav>
    </>
  )
}
