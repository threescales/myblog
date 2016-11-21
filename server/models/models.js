// mongoose 链接
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/myblog');

var Schema = mongoose.Schema;

//文章模型
var ArticleScheMa = new Schema({
	title: String,
	author: String,
	body: String,
	articletype: String,
	createdate: String,
	hidden:Boolean,
	meta:{
		votes: Number,
		likes: Number
	}
});

//文章方法

//通过类别查询文章列表
ArticleScheMa.methods.findArticleByArticletype = function(articletype, callback){
	return this.model('articles').find({'articletype': articletype,'hidden':'false'},'title createdate _id', callback);
};

//通过id获取文章列表
ArticleScheMa.methods.findArticleById = function(_id, callback){
	return this.model('articles').findById(_id,callback);
};

exports.ArticleModel = mongoose.model('articles',ArticleScheMa);

//评论模型
var CommentScheMa = new Schema({
	articleId: String,
	userName: String,
	content: String,
	createDate: String,
	commentFlag: String,
	toUserName:String,
	toCommentId:String
});

//通过文章id获取评论列表
CommentScheMa.methods.findCommentByArticleId = function(articleId,callback){
	return this.model('comments').find({'articleId':articleId},callback);
};

exports.CommentModel = mongoose.model('comments',CommentScheMa);