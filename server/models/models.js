// mongoose 链接
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleScheMa = new Schema({
	title: String,
	author: String,
	body: String,
	classification: String,
	comments:[{data: Date, classification: String}],
	createdate: {type: Date, defalt: Date.now},
	hidden:Boolean,
	meta:{
		votes: Number,
		likes: Number
	}
});


exports.ArticleModel = mongoose.model('articles',ArticleScheMa);