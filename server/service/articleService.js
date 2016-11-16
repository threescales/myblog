var models = require('../models/models');
var Promise = require('bluebird');
var ArticleModel = models.ArticleModel;

var articleService = {
	//添加博客
	addArticle: function (article) {
		return new Promise(function(resolve,reject){
			var articleEntity = new ArticleModel(article);			
			articleEntity.save(function (error) {  //存储
				if (error) {
					reject(error);
				}else{
					resolve({success:true});
				}		
			});
		});
		
	},
	//查询博客列表
	getArticles: function (articletype) {
		return new Promise(function(resolve,reject){
			var articleEntity = new ArticleModel({});	
			articleEntity.findArticleByArticletype(articletype,function(error,docs){
				if (error) {
					reject(error);
				}else{
					console.log('查询博客列表成功'+docs);
					resolve(docs);
				}
			});
		});				
	},
	//查询文章详情
	getArticleDetail: function(_id){
		return new Promise(function(resolve,reject){
			var articleEntity = new ArticleModel({});
			articleEntity.findArticleById(_id,function(error,docs){
				if (error) {
					reject(error);
				}else{
					console.log('查询博客详情成功'+docs);
					resolve(docs);
				}
			});
		});
		
	}
};

module.exports = articleService;