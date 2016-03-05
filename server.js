/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import session from 'express-session';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8080 : process.env.PORT;
const CLIENT_ID = 'YPVFgLMrLLVd2yJscm18QU9J2oXbpy';
const CLIENT_SECRET = 'MY2Ct5vgnYULkCRMFtsAgvgRrcnP2w';


var User = mongoose.model('User', {
  WordpressId: Number
});

const app = express();
const WordpressStrategy = require('passport-wordpress-oauth-server').Strategy;

if (isDeveloping) {
  mongoose.connect('mongodb://localhost/incramation')

  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'app',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });


  function ensureAuthenticated(req, res, next) {
    console.log('the req in ensureAuthenticated');
    //console.log(req);
    //console.log('the res in ensureAuthenticated');
    //console.log(res);
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/auth/wordpress');
  }

  app.use(cookieParser());
  //app.use(session({ secret: config.sessionSecret }));
  app.use(session({ secret: 'lkjdslkasdds' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
      if(!err) done(null, user);
      else done(err, null);
    })
  });

  //console.log('the passport 3');
  //console.log(passport);
  passport.use(new WordpressStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    wordpressUrl: 'http://localhost/incramation',
    callbackURL: 'http://localhost:8080/auth/callback',
  }, function(accessToken, refreshToken, profile, done) {
    console.log('access token');
    console.log(accessToken);
    console.log('profile');
    console.log(profile);
    console.log('refresh token');
    console.log(refreshToken);
    console.log('here in the wordpress passport response');
    User.findOne({ WordpressId: profile.id }, function(err, user) {
      if(err) { console.log(err); }
      if(!err && user != null) {
        console.log('here in the user found');
        console.log('the user');
        console.log(user);
        done(null, user);
      }
      else {
        var user = new User({
          WordpressId: profile.id
        });
        user.save(function(err) {
          if(err) {
            console.log(err);
          }
          else {
            done(null, user);
          }
        });
      }
    });
  }
  ));

  /*
   app.get('/auth/wordpress',
   passport.authenticate('wordpress-oauth-server'),
   function(req, res){
   console.log('here in the /auth/wordpress funciton');
   console.log('here in the /auth/wordpress funciton');
   console.log('here in the /auth/wordpress funciton');
   console.log('here in the /auth/wordpress funciton');
   });
   app.get('/auth/wordpress/callback',
   passport.authenticate('wordpress-oauth-server', {
   failureRedirect: '/failure'
   }), function(req, res){
   return res.redirect('/');
   }
   );
   */

/*
  app.get('/auth/wordpress',
      passport.authorize('wordpress-oauth-server'));
*/


  app.get('/auth/wordpress',
    passport.authorize('wordpress-oauth-server', { failureRedirect: '/' }),
    function() {
      console.log("successfull: in server.js  app.get('/auth/wordpress'");
    }
  );


  app.get('/auth/callback',
    passport.authorize('wordpress-oauth-server', { failureRedirect: '/' }),
    function(req, res) {
      console.log('here in the auth success');
      //console.log(req);
      //console.log(res);
      var user = req.user;
      var account = req.account;
      console.log('the req returned account informaiton');
      console.log(req);
      //console.log('the req.user returned account informaiton');
      //console.log(user);
      //console.log('the req.account returned account informaiton');
      //console.log(account);

      console.log('successful auth callback, before redirect in server.js to home');
      // Successful authentication, redirect home.
      res.redirect('/');

      // Associate the Twitter account with the logged-in user.
      //account.userId = user.id;
      //account.save(function(err) {
      //  if (err) { return self.error(err); }
      //  self.redirect('/');
      //});
    }
  );









  /*
  app.get('/auth/callback',
      passport.authorize('wordpress-oauth-server', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });
  */
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
  /*
  mongoose.model('inc_users', {username: String, email: String})
  app.get('/data/users', function(req, res){
    mongoose.model('inc_users').find(function(err, inc_users){
      res.send(inc_users);
    });
  });

  mongoose.model('inc_goals', {title: String, pageUrl: String, shortDesc: String})
  app.get('/data/goals', function(req, res){
    mongoose.model('inc_goals').find(function(err, inc_goals){
      res.send(inc_goals);
    });
  });
*/





} else {
  app.use(express.static(__dirname + '/dist'));
  app.use(express.static(path.join(__dirname, 'dist')));

  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });
}




app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http:/localhost:%s/ in your browser.', port, port);
});
