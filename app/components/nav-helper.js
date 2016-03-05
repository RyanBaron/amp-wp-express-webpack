import ampApp from 'ampersand-app'
import React from 'react'
import localLinks from 'local-links'
import styles from '../styles/styl/navbar.styl'

export default React.createClass({
    displayName: 'NavHelper',

    onClick (event) {
        const pathname = localLinks.getLocalPathname(event)
        if (pathname) {
            event.preventDefault()
            ampApp.router.history.navigate(pathname)
        }
    },

    render () {
        return (
            <div {...this.props} onClick={this.onClick}>
                {this.props.children}
            </div>
        )
    }
})