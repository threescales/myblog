var models = require('../models/models');
var Promise = require('bluebird');
var VisitorModel = models.VisitorModel;

var visitorService = {
	addComment: function (visitor) {
		return new Promise(function (resolve, reject) {
			var visitorEntity = new VisitorModel(visitor);
			visitorEntity.save(function (error) {  //存储
				if (error) {
					reject(error);
				} else {
					resolve({ success: true });
				}
			});
		});
	},
	getVisitorByName: function (userName) {
		return new Promise(function(resolve, reject){
			var visitorEntity = new VisitorModel({});
			visitorEntity.findUserByUserName(userName, function (error, docs) {
				if (error) {
					reject(error);
				} else {
					resolve(docs);
				}
			});
		});
	}
};

module.exports = visitorService;