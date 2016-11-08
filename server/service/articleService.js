var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/myblog');
var models = require('../models/models');
var ArticleModel = models.ArticleModel;

var articleService = {
	addArticle: function () {
		var blog = { title: 'aaaaa', author: 'zhangyouming', body: '<p>asdasdad</p>', classification: '1', hidden: false, meta: { votes: 0, likes: 0 } };
		var articleEntity = new ArticleModel(blog);
		console.log(articleEntity);
		articleEntity.save(function (err) {  //存储
			if (err) {
				console.log('save failed');
			}
			console.log('save success');
		});
	},
	getArticleList: function () {

	}
}

module.exports = articleService;