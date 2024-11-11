import React from 'react'
import PropTypes from 'prop-types'
import SearchForm from './SearchForm'
export default function Navbar(props) {
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
       
      </ul>
      <SearchForm/>
      <div className="form-check form-switch mx-3">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='light'? 'black':'white'}}>{props.mode.charAt(0).toUpperCase()+props.mode.substring(1)} Mode</label>
</div>
    </div>
  </div>
</nav>
    
  )
}

Navbar.prototype={title: PropTypes.string.isRequired,
   about: PropTypes.string.isRequired
}

// Navbar.defaultProps={title: "Title here",
//     about: "About here"
//  }