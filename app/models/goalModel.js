// PortfolioData.js Model - portfolio-data-js.js
var AmpModel = require('ampersand-model');
var app = require('ampersand-app');

module.exports = AmpModel.extend({
    props: {
        id: ['number'],
        pid: ['number'],
        uuid: ['number'],
        title:['string'],
        pageUrl:['string'],
        img:['string'],
        shortDesc:['string'],
        fullDesc:['string'],
        level:['number'],
        days:['array'],
        dayCount: ['number'],
        primaryCategory: ['string'],
        secondaryCategory: ['string'],
        pageFullUrl: ['string'],
    },
    derived: {
        userStatus: {
            deps: ['number'],
            cache: true,
            fn: function () {
                var status = '';

                /*
                 //check if the goal is in the users completed goal items
                 for (i = 0; i < app.me.completedGloals.length; i++) {
                 if(app.me.completedGloals[i]['uuid'] == this.uuid) {
                 status = 'completedGoal';
                 }
                 }
                 */
                //check if the goal is in the users active goal items
                for (i = 0; i < app.me.activeGoals.length; i++) {
                    if(app.me.activeGoals[i]['uuid'] == this.uuid) {
                        status = 'activeGoal';
                    }
                }

                console.log('the returning status');
                console.log(status);
                return status;
            }
        }
    }
});
