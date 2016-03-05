import React from 'react'
import NavHelper from './components/nav-helper'

export default React.createClass({
    displayName: 'Layout',
    render () {
        return (
            <NavHelper>
                <header role="banner">
                    <nav id="navbar-primary" className="navbar" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-primary-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar" id="navbar-primary">
                                <ul className="nav navbar-nav">
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/goals">Goals</a></li>
                                    <li><a href="/"><img id="logo-navbar-middle" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png" width="200" alt="Logo Thing main logo" /></a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/logout">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className='container'>
                    {this.props.children}
                </div>
            </NavHelper>
        )
    }
})