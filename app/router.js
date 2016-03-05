import ampApp from 'ampersand-app'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'ampersand-router'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import LoginSuccessPage from './pages/loginSuccess'
import GoalsPage from './pages/goals'
import GoalSinglePage from './pages/goalsSingle'
import Layout from './layout'
import qs from 'qs'
import uuid from 'uuid'
import WP from'wordpress-rest-api'



/*


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



 */


const CLIENT_ID = 'YPVFgLMrLLVd2yJscm18QU9J2oXbpy';
const CLIENT_SECRET = 'MY2Ct5vgnYULkCRMFtsAgvgRrcnP2w';

//import path from 'path';
//import express from 'express';
//console.log(app);
//import express from 'express';
//const app = express();
//import passport from 'passport';

export default Router.extend({
    renderPage (page, opts = {layout: true}) {
        if (opts.layout) {
            page = (
                <Layout>
                    {page}
                </Layout>
            )
        }

        ReactDOM.render(page, document.getElementById('root'))
    },

    routes: {
        '': 'public',
        'goals/:pageUrl': 'goalSingle',
        'goals': 'goals',
        'login': 'login',
        'logout': 'logout'
        //'auth/callback?code=:code': 'authCallback',
        //'auth/worpdress/callback': 'wpAuthCallback',
        //'auth/callback?:query': 'wpAuthCallback'
    },

    public () {
        //this.renderPage(<HomePage/>, {layout: false})

        this.renderPage(<HomePage/>)
    },

    authCallback (code) {
        console.log(code)
    },
    login () {
        console.log('right beofre login redirect to auth/wordpress');
        window.location = 'http://localhost:8080/auth/wordpress';
        //window.localstorate.state = state
        //window.location = 'http://localhost/incramation/oauth/authorize?' + qs.stringify({
        //        client_id: CLIENT_ID ,
        //        redirect_uri: 'http://localhost:8080/auth/callback',
        //        response_type: 'code'
        //        //state: state
        //    })
    },
    /*
    login () {
        window.location = 'https://localhost/incramation/oauth/authorize?' + qs.stringify({
                client_id: CLIENT_ID ,
                callbackURL: 'http://localhost/auth/worpdress/callback',
                repsonse_type: 'code',
                scope: 'user,repo'
            })
    },
*/
    /*
    login () {
        window.location = 'https://localhost/incramation/oauth/authorize?' + qs.stringify({
                client_id: 'f8dd69187841cdd22a26',
                redirect_uri: 'http://localhost/auth/worpdress/callback',
                scope: 'user,repo'
            })
    },
    */
    /*
    login () {
        //this.renderPage(<LoginSuccessPage/>)
//console.log('app.passport');

        //console.log(app.passport);
        //window.location = 'https://localhost:8080/auth/wp/login';
       /*
        window.location = 'https://localhost/oauth/authorize?' + qs.stringify({

                client_id: CLIENT_ID,
                wordpressUrl: 'http://localhost/incramation',
                callbackURL: 'http://localhost:8080/auth/wordpress/callback'
            })

        clientID: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            wordpressUrl: 'http://localhost/incramation',
            callbackURL: 'http://localhost:8080/auth/wordpress/callback'
        //this.renderPage(<LoginPage/>)
        //this.renderPage(<GoalsPage/>, {layout: false})
        //this.renderPage(<GoalsPage repos={ampApp.me.repos}/>)
        //window.location = 'http://localhost/login/oauth/authorize'
        */
    /*
    },
    */
    logout () {
        //this.renderPage(<LoginSuccessPage/>)
        window.localStorage.clear();//this doesnt actually log the user out form wordpress, just removing the access token from the app
        window.location = '/' //clear memory by forcing a refresh

        //this.renderPage(<GoalsPage/>, {layout: false})
        //this.renderPage(<GoalsPage repos={ampApp.me.repos}/>)
    },
    wpAuthCallback (query) {
        console.log(uuid.v4())
        const sesssion_uuid = uuid.v4()
        //console.log('the sesssion_uuid: ' + sesssion_uuid)
        //console.log(query);
        //this.renderPage(<LoginSuccessPage/>)
        //this.renderPage(<GoalsPage/>, {layout: false})
        //this.renderPage(<GoalsPage repos={ampApp.me.repos}/>)

        query = qs.parse(query)
        app.me.token = query.code;  //save/set the user access token
        this.renderPage(<LoginSuccessPage/>)


        /*
        console.log('lets create a post for fun')
        var WP = require( 'wordpress-rest-api' );
        //var wp = new WP({ endpoint: 'http://src.wordpress-develop.dev/wp-json' });



        // You must authenticate to be able to POST (create) a post
        var wp = new WP({
            endpoint: 'http://localhost/imcramation/wp-json',
            // This assumes you are using basic auth, as described further below
            username: 'api_access_user',
            password: 'abcd1234'
        });
        wp.posts().post({
            // "title" and "content" are the only required properties
            title: 'Your Post Title',
            content: 'Your post content',
            // Post will be created as a draft by default if a specific "status"
            // is not specified
            status: 'publish'
        }).then(function( response ) {
            // "response" will hold all properties of your newly-created post,
            // including the unique `id` the post was assigned on creation
            console.log( response.id );
        })
        */

    },
    goals () {
        this.renderPage(<GoalsPage/>)
        //this.renderPage(<GoalsPage/>, {layout: false})
        //this.renderPage(<GoalsPage repos={ampApp.me.repos}/>)
    }
    ,
    goalSingle (pageUrl) {
        //this.renderPage(<GoalsPage/>, {layout: false})
        //const goalUrl = pageUrl
        this.renderPage(<GoalSinglePage pageUrl={pageUrl}/>)
    }

})

/*
import React from 'react'
import Router from 'ampersand-router'
import HomePage from './pages/home'
import GoalsPage from './pages/goals'
import Layout from './layout'

export default Router.extend({
    routes: {
        '': 'home',
        'goals': 'goals'
    },
    renderPage (page, opts = {layout: true}) {
        if (opts.layout) {
            page = (
                <Layout>
                    {page}
                </Layout>
            )
        }

        React.render(page, document.getElementById('root'))
    },
    home () {
        console.log('on home page')
        //React.render(<HomePage/>, {layout: false})  //remove the layout wrapper from around this page
        React.renderPage(<HomePage/>, {layout: false})
    },
    goals () {
        console.log('on goals page')
        React.renderPage(<GoalsPage/>)
    }
})
    */