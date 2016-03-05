import Collection from 'ampersand-collection'
import GoalModel from './goalModel'
import _ from 'underscore'
//import githubMixin from '../helpers/github-mixin'



export default Collection.extend({
    //url: 'https://api.github.com/user/repos',
    url: 'http://localhost/8080/data/goals',
    model: GoalModel,

    getByTitle (title) {
        let model = this.findWhere({title: title})

        if (!model) {
            model = new GoalModel({title: title})
        }
        //model.fetch()
        return model
    },


    getByPageUrl (pageUrl) {
        let model = _.findWhere({pageUrl: pageUrl})

        //console.log('the mode in the get by page url')
        //console.log(model)

        //if (!model) {
         //   model = new GoalModel(pageUrl:'pageUrl')

        //    console.log('the model inside the if model')
        //    console.log(model)
        //}
        //model.fetch()

        console.log('the model after the fetch')
        console.log(model)

        return model
    }
})


/*
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
    mixins: [ampersandMixin],

    displayName: 'ReposPage',

    propTypes: {
        repos: React.PropTypes.object.isRequired
    },

    render () {
        const {repos} = this.props

        return (
            <div>
                <h1>Repos page</h1>

                <div>
                    {repos.map((repo) => {
                        return (
                            <div key={repo.id}>
                                <a href={repo.app_url}><span className='octicon octicon-repo'></span> {repo.full_name}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
})
    */