import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
   
    return (
        // props.mode used for enable/disable mode
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  
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
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>

                    </ul>
                    {/* onClick can have function not function call */}
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-primary mx-1" onClick={()=>{props.toggleMode('primary')}} ></button>
                        <button type="button" className="btn btn-secondary mx-1" onClick={()=>{props.toggleMode('secondary')}}></button>
                        <button type="button" className="btn btn-success mx-1"  onClick={()=>{props.toggleMode('success')}}></button>
                        <button type="button" className="btn btn-warning mx-1" onClick={()=>{props.toggleMode('warning')}}></button>
                        <button type="button" className="btn btn-danger mx-1" onClick={()=>{props.toggleMode('danger')}}></button>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
                        </div>
                </div>
            </div>
        </nav>
    )
}
// appling checks for props
//PropTypes passing value
// isRequired is used if default is not set and values are also not passed
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Default proptype i.e if value is not pass it will set default value given below
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
}