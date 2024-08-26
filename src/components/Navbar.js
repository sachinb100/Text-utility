import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" aria-current="page"
                            >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li>
                    
                </ul>
                {/*<form className="d-flex my-2 my-lg-0">
                    <input
                        className="form-control me-sm-2"
                        type="text"
                        placeholder="Search"
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className='form-check-input' onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className='form-check label' htmlFor='flexSwitchCheckDefault'>Enable DarkMode</label>
                </div>
            </div>
        </div>
    </nav>
    
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:'Set Title here',
    aboutText: 'About'
};

