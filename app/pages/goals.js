import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import goalsData from '../data/goals.data'
//import goalsData from '../data/goals.data'

export default React.createClass({

    mixins: [ampersandMixin],

    //getInitialState: function() {
    //    console.log('some initial state function');
    //    return {author: '', text: ''};
    //},

    displayName: 'GoalsPage',

    propTypes: {
        goals: React.PropTypes.object.isRequired
    },

    render () {




        //const {goals} = this.props
        const {goals} = goalsData

        return (
            <div className="container">
                <h1>Goals page</h1>

                <div className="row">
                    {goalsData.map((goal) => {
                        return (
                            <article className="col-md-6 goal article-summary" key={goal.id}>
                                <header>
                                    <h1><a href={goal.pageFullUrl}>{goal.title}</a></h1>
                                    <div className="meta">
                                        <span className="category primary-category">Category: {goal.primaryCategory}</span>
                                        <div className="sub-meta">
                                            <span className="days">Days: {goal.dayCount}</span>
                                            <span className="level">Level: {goal.level}</span>
                                        </div>
                                    </div>
                                </header>
                                <div className="summary">
                                    {goal.shortDesc}
                                </div>
                            </article>
                        )
                    })}
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