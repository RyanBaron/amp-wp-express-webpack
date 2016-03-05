import React from 'react'
//import ampersandMixin from 'ampersand-react-mixin'
//import goalsData from '../data/goals.data'
//import goalsData from '../data/goals.data'

export default React.createClass({

  //  mixins: [ampersandMixin],

    //getInitialState: function() {
    //    console.log('some initial state function');
    //    return {author: '', text: ''};
    //},

    displayName: 'Login Success Page',

    //propTypes: {
    //    goals: React.PropTypes.object.isRequired
    //},

    render () {

        //const {goals} = this.props
        //const {goals} = goalsData

        return (
            <div className="container">
                <h1>Login Successful</h1>

                <div className="row">
    You have successfully logged in!
                </div>
            </div>
        )
    }
})





/*

 var PageView = require('./base');
 var CollectionRenderer = require('ampersand-collection');
 var templates = require('../../templates/pages/goals.hbs');
 var goalResource = require('../resources/goalResource');
 var goalItems = require('../views/goalItems');
 var GoalModel = require('../models/GoalModel');
 var GoalData = require('../fixtures/GoalsData');
 var goalItems = require('../views/goalItems');

 module.exports = PageView.extend({
 pageTitle: 'home',
 template: templates,
 subviews: {
 goalTiles: {
 hook: 'goalWrapper',
 prepareView: function (el) {

 var collectionModel = new goalResource(GoalData);

 return new goalItems({
 el: el,
 parent: this,
 collection: collectionModel
 });

 }
 }

 }
 });



 */