import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary pt-4 pb-4">
        <div className="container">
            <Link to="/" className="navbar-brand text-white">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink to="/" className="nav-link text-white" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/about" className="nav-link">Abouts Us</NavLink>
                </li>
                
                <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                </li>
            </ul>
            <form className="d-flex">
                <Link to="/user/add" className="btn btn-outline-light" type="submit">Add Users</Link>
            </form>
            </div>
        </div>
     </nav>
    </div>
  )
}

export default Navbar
