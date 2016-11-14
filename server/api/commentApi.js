var commentService = require('../service/commentService');

var commentApi = {
	addComment: function(req,res){
		var comment = {};
		comment.articleId = req.body.articleId;
		comment.userName = req.body.userName;
		comment.content = req.body.content;
		comment.createDate = new Date();
		comment.forOtherFlag = req.body.forOherFlag;
		comment.toUserName = req.body.toUserName;
		comment.toCommentId = req.body.toCommentId;
		var data = {};
		commentService.addComment(comment).then(function(result){
			if(result){
				data.success = result.success;
				data.message = result.message;	
			}else{
				data.success = false;
				data.message = '添加评论失败：未知错误';
			}
			res.send(data);
		},function(error){
			data.success = false;
			data.message = error;
			res.send(data);	
		});
	},
	getComments:function(req,res){
		var articleId = req.body.articleId;
		var data = {};
		commentService.getComments(articleId).then(function(result){
			if(result){
				data.success = true;
				data.message = '查询成功';
				data.datas = result;
			}else{
				data.success = false;
				data.message = '暂无评论';
			}
		},function(error){
			data.success = false;
			data.message = error;
			res.send(data);	
		});
	}
};

module.exports = commentApi;