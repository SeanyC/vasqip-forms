import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">VASQIP</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/" className="nav-link">Case List</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/cardiac" className="nav-link">Cardiac Form</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/non-cardiac" className="nav-link">Non-Cardiac Form</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}