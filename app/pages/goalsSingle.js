import React from 'react'
import goalsData from '../data/goals.data'
import GoalCollection from '../models/goalCollection'

export default React.createClass({
    displayName: 'GoalSinglePage',
    propTypes: {
        pageUrl: React.PropTypes.string.isRequired,
    },
    getInitialState: function() {
        //console.log('some initial state function')
        //let goal = new GoalCollection(goalsData)
        //console.log('the collection in the init function')
        //console.log(goal)
        return {};
    },
    render () {
        //console.log('this props')
        //console.log(this.props)
        //console.log(this.props.pageUrl)
        let goal = new GoalCollection(goalsData)
        console.log('the goal');
        console.log(goal);
        console.log('goal collection testing, getting by page url')
        //console.log(goal.getByPageUrl(this.props.pageUrl))
        return (
            <article className="goal article">
                <h1>{goal.title}</h1>
                <div>Put goal description here</div>
            </article>
        )
    }
})


/*
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
 */



/*
var PageView = require('./base');
var templates = require('../../templates/pages/goalSingle.hbs');
var goalResource = require('../resources/goalResource');
var goalHeaderView = require('../views/goalHeaderView');
var goalBodyView = require('../views/goalBodyView');
//var GoalModel = require('../models/GoalModel');
var GoalData = require('../fixtures/GoalsData');

module.exports = PageView.extend({
    pageTitle: 'Single Goal',
    template: templates,
    initialize: function(spec) {
        //spec passed in from the view creation in the router
        var collectionModel = new goalResource(GoalData);
        this.model = collectionModel.get(spec.pageUrl, 'pageUrl');
    },
    subviews: {
        goalHeader: {
            hook: 'page-header',
            prepareView: function (el) {
                return new goalHeaderView({
                    el: el,
                    parent: this,
                    model: this.model
                });
            }
        },
        goalBody: {
            hook: 'page-body',
            prepareView: function (el) {
                return new goalBodyView({
                    el: el,
                    parent: this,
                    model: this.model
                });
            }
        },
    }
});
*/