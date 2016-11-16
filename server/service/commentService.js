var models = require('../models/models');
var Promise = require('bluebird');
var CommentModel = models.CommentModel;

var commentService = {
	addComment: function (comment) {
		return new Promise(function (resolve, reject) {
			var commentEntity = new CommentModel(comment);
			commentEntity.save(function (error) {  //存储
				if (error) {
					reject(error);
				} else {
					resolve({ success: true });
				}
			});
		});
	},
	getComments: function (articleId) {
		return new Promise(function(resolve, reject){
			var commentEntity = new CommentModel({});
			commentEntity.findCommentByArticleId(articleId, function (error, docs) {
				if (error) {
					reject(error);
				} else {
					console.log('查询评论列表成功' + docs);
					resolve(docs);
				}
			});
		});
	}
};

module.exports = commentService;