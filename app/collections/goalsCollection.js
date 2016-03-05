var Collection = require('ampersand-collection');
var GoalModel = require('../models/GoalModel')

module.exports = Collection.extend({
    model: GoalModel,
    mainIndex: 'id',
    indexes: ['pageUrl']
});
