var articleService = require('../service/articleService');

var articleApi = {
	addArticle:function(req, res){
		articleService.addArticle();
	}
}

module.exports = articleApi;