var articleService = require('../service/articleService');
var moment = require('moment');

var articleApi = {
	addArticle:function(req, res){
		var article = {};
		article.title = req.body.title;
		article.author = req.body.author;
		article.body = req.body.body;
		article.articletype = req.body.articletype;
		article.createdate = moment().format("YYYY-MM-DD");
		article.hidden = false;
		article.meta = {
			votes:0,
			likes:0
		};
		var data = {};
		articleService.addArticle(article).then(function(result){
			if(result){
				data.success = result.success;
				data.message = result.message;	
			}else{
				data.success = false;
				data.message = '新增博客失败：未知错误';
			}
			res.send(data);				
		},function(error){
			data.success = false;
			data.message = error;
			res.send(data);	
		});		
	},
	getArticles:function(req, res){
		var articletype = req.body.articletype;
		var data = {};
		articleService.getArticles(articletype).then(function(result){
			if(result){
				data.success = true;
				data.message = '查询成功';
				data.datas = result;	
			}else{
				data.success = false;
				data.message = '暂无文章列表';
			}
			res.send(data);
		},function(error){
			data.success = false;
			data.message = error;
			res.send(data);	
		});		
	},
	getArticleDetail:function(req,res){
		console.log(req.body);
		var _id = req.body.articleId;
		console.log(_id);
		var data = {};
		articleService.getArticleDetail(_id).then(function(result){			
			if(result){
				data.success = true;
				data.message = '查询成功';	
				data.datas = result;
			}else{
				data.success = false;
				data.message = '您查询的文章不存在';
			}
			res.send(data);
		},function(error){
			data.success = false;
			data.message = error;
			res.send(data);	
		});
	}
};

module.exports = articleApi;