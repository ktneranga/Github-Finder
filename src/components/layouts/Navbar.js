import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Navbar =(props)=> {

    /*
    we need to be used classes if there is a state, othervise we can convert the classes
     into stateless functional components
    this component is not using a state, so that we can use stateless functions as components
    */

    return (
        <nav className="navbar bg-primary">
            <h1><i className={props.icon}></i> {props.title}</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}
//instead of having static we have to use the component name
Navbar.defaultProps = {
    title : "Github Finder",
    icon : "fab fa-github"
  }

Navbar.propTypes = {
      title : PropTypes.string.isRequired,
      icon : PropTypes.string.isRequired
  }

export default Navbar
