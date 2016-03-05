import ampApp from 'ampersand-app'
import styles from './styles/styl/index.styl'
//import styles from './styles/styl/variables.styl'
import Router from './router'
//import 'fs'
//import 'passport';
//import passport from 'passport-wordpress-oauth-server'
//var passport = require('passport-wordpress');
//import passport from 'passport-wordpress';
//import passport from 'passport-wordpress-oauth-server';
//var passport = require('passport-oauth2-complete-for-wordpress').WordpressStrategy;
//import passport from 'passport';
//import passport from 'passport';
import Me from './models/me'

//console.log('the req in the app.js file');
//console.log(app);

// expose `app` to browser console
window.app = ampApp

ampApp.extend({
  init () {
    this.me = new Me()
    this.router = new Router()
    this.router.history.start()

   // var CLIENT_ID = 'YPVFgLMrLLVd2yJscm18QU9J2oXbpy';
   // var CLIENT_SECRET = 'MY2Ct5vgnYULkCRMFtsAgvgRrcnP2w';


    /*
    passport.use(new WordpressStrategy({
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      wordpressUrl: 'http://localhost/incramation',
      callbackURL: 'http://localhost:8080/auth/wordpress/callback'
    }, function (accessToken, refreshToken, profile, done) {
      console.log('herein the funciton for testing');
      User.findOrCreate({WordpressId: profile.id}, function (err, user) {
        return done(err, user);
      });
    }));
    */
  }
})


/*

passport.use(new WordpressStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  wordpressUrl: 'http://your-wp.com'
  callbackURL: 'http://localhost:5000/auth/wordpress/callback'
}, function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ WordpressId: profile.id }, function (err, user) {
    return done(err, user);
  });
 }
 ));





 */

ampApp.init()
/*import React from 'react';
import styl from './styles/styl/index.styl';

const Hello = React.createClass({
  displayName: 'Hello',
  render () {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="World" />, document.body);
*/
/*
import React from 'react';
import styles from './App.css';
import styl from './styles/styl/index.styl';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>

        <div className="container-fluid clearfix">
          <div>Bootstrap Container</div>
            <div className="row">
            <div className="col-md-12">left cont</div>
            <div className="col-md-12">right cont</div>
          </div>
        </div>
      </div>
    );
  }
}
*/