import React from 'react'
import NavHelper from '../components/nav-helper' //contains our onclick handler

export default React.createClass({
    displayName: 'HomePage',
    render () {
        return (
            <NavHelper className='container'>
                <h1>Incramation</h1>
                <div>
                    <p>Lean in chunks, improve your life.</p>
                    <a href='/repos' className='button button-large'>
                        <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
                    </a>
                </div>
            </NavHelper>
        )
    }
})