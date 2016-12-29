var articleService = require('../service/articleService');
var moment = require('moment');

var articleApi = {
	
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