var express = require('express');
var path = require('path');
var compression = require('compression');  
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();

// 设置80端口
app.set('port', 8080);

//一些中间件
app.use(compression());  
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({
	resave : true,
	saveUninitialized : true,
	secret : 'uwotm8'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(express.static('client/dist'));
var storage = multer.diskStorage({
	destination : function(req, file, cb) {
		cb(null, './client/src/img/material');
	},
	filename : function(req, file, cb) {
		cb(null, file.originalname);
	}
});
var upload = multer({
	storage : storage
});
var cpUpload = upload.any();
app.use(cpUpload);



// development only
if ('development' == app.get('env')) {
	app.use(errorHandler());
}

// app.get('/',function(req,res){
// 	res.redirect('/page/index.html');
// });

//api
var api = require('./server/api/api');

//文章相关
app.post('/api/article/addArticle',api.articleApi.addArticle);
app.post('/api/article/getArticles',api.articleApi.getArticles);
app.post('/api/article/getArticleDetail',api.articleApi.getArticleDetail);

app.post('/api/comment/getComments',api.commentApi.getComments);
app.post('/api/comment/addComment',api.commentApi.addComment);

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});