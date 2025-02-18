// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    // static propTypes = {}

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">GoodNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Headlines</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link className="nav-link" to="/business/">Business</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link className="nav-link" to="/entertainment/">Entertainment</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link className="nav-link" to="/general/">General</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link className="nav-link" to="/health/">Health</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link className="nav-link" to="/science/">Science</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link className="nav-link" to="/sports/">Sports</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link className="nav-link" to="/technology/">Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search news" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar