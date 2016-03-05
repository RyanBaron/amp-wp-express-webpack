import Model from 'ampersand-model'

export default Model.extend({

    url: 'https://localhost/incramation/wp-json/wp/v2/users/1',

    initialize () {
        this.token = window.localStorage.token
        this.on('change:token', this.onChangeToken)
        this.fetchInitialData()
    },

    props: {
        id: 'number',
        username: 'string',
        name: 'string',
        first_name: 'string',
        last_name: 'string',
        email: 'string',
        roles: 'array'
    },

    session: {
        token: 'string'
    },

    onChangeToken () {
        window.localStorage.token = this.token
    },

    fetchInitialData () {
        if (this.token) {
            this.fetch()
        }
    },

    ajaxConfig () {
        return {
            headers: {
                Authorization: 'token ' + this.token
            }
        }
    }
})

/*

import Model from 'ampersand-model'

exports default Model.extend ({
    //the properties this model is going to store
    props: {
        id: 'number',
        username: 'string',
        name: 'string',
        first_name: 'string',
        last_name: 'string',
        email: 'string',
        roles: 'array'
    },
    session: {
        token: 'string'
    }
});
    */