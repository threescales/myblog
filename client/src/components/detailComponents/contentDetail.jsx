import React from 'react';
import Header from '../publicComponents/header.jsx';
import Comment from '../commentComponents/comment.jsx';
import touxiang from '../../img/touxiang.jpg';

class ContentDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			article:{},
			loadingArticle:false,
			comments:[],
			loadingComment:false
		};
	}

	getArticle(articleId){
		
		//赋值this指向
		let that = this;
		if(self.fetch) {
    		// 使用 fetch 框架查询文章详情
			fetch("/api/article/getArticleDetail",{
				method: "POST",
				headers: {
    						"Content-Type": "application/x-www-form-urlencoded"
 				},
				body:"articleId="+articleId
			}).then(function(response){
				//处理json数据
				response.json().then(function(data){
					if(data.success){
						Comment.article = data.datas;
						//修改状态
						that.setState({
							article : data.datas,
							loadingArticle: true
						});					
					}else{
						//后台报错处理逻辑
					}
				});
			});
		}else{
			// 不支持fetch框架处理逻辑
			console.log('chrome or firefox is better for you');
		}
	}

	getComments(articleId){
			//赋值this指向
		let that = this;
		if(self.fetch) {
		// 使用 fetch 框架查询文章详情
			fetch("/api/comment/getComments",{
				method: "POST",
				headers: {
    						"Content-Type": "application/x-www-form-urlencoded"
 				},
				body:"articleId="+articleId
			}).then(function(response){
				//处理json数据
				response.json().then(function(data){
					if(data.success){
						//修改状态
						that.setState({
							comments : data.datas,
							loadingComment: true
						});					
					}else{
						//后台报错处理逻辑
					}
				});
			});
		} else {
    		// 不支持fetch框架处理逻辑
			console.log('chrome or firefox is better for you');
		}
	}

	componentWillMount(){
		const articleId = this.props.params.articleId;
		this.getArticle(articleId);
		this.getComments(articleId);
		
	}
	
	replyComment(toUserName,toCommentId){
		 document.getElementById("commentFlag").value = "1";
		 document.getElementById("toUserName").value = toUserName;
		 document.getElementById("toCommentId").value = toCommentId;
		 document.getElementById("cancelReply").innerHTML = "取消回复"+toUserName;
	}
	
	render(){
		var header =  <Header />;
		var article = this.state.article;
		var comment = <Comment parentComponent={this}/>;
		var that = this;
		return(
			<div>
			{header}
			<article>
				<header>
					<h1 className="mod-post__title">{article.title}</h1>
				</header>
				<div className="mod-post__entry wzulli" dangerouslySetInnerHTML={{__html: article.body}}>
				</div>
			</article>
			
			<section className="mod-comment">
			<h3 className="comments">{this.props.title}</h3>
			<ol className="commentlist">
				{
					that.state.loadingComment ?
					that.state.comments.map(function(result){
						return (
							<li>
								<div className="comment-body">
									<div className="comment-author">
										<img className="avatar" src="http://v1.qzone.cc/avatar/201406/23/05/47/53a74f0397252504.jpg%21200x200.jpg" />
										<cite className="fn">{result.userName}</cite>
										<span className="says">{result.commentFlag==1 ? "回复：" + result.toUserName : "说道"}</span>
									</div>
									{/*<em>您的评论正在审核</em>*/}
									<br/>
									<div className="commentmetadata">
										<a href="javascript:void(0);">{result.createDate}</a>
									</div>
									<p>{result.content}</p>
									<div className="reply">
										<a href="javascript:void(0);" onClick={that.replyComment.bind(that,result.userName,result._id)}>回复</a>
									</div>
								</div>
			{/*					<ul className="children">
									<li>
										<div className="comment-body">
											<div className="comment-author">
												<img className="avatar" src={touxiang} />
												<cite className="fn">啊啊啊啊啊</cite>
												<span className="says">说道：</span>
											</div>
											<em>您的评论正在审核</em>
											<br/>
											<div className="commentmetadata">
												<a href="javascript:void(0)">2016.11.04 11:56</a>
											</div>
											<p>这个网站做的不错</p>
											<div className="reply">
												<a>回复</a>
											</div>
										</div>
									</li>
								</ul>*/}
							</li>
						)
					}) : ''
				}
			</ol>
			{comment}
		</section>	
		<input type="hidden" id="articleId" value={article._id} />
		<input type="hidden" id="commentFlag" value="0" />
		<input type="hidden" id="toCommentId" value="" />
		<input type="hidden" id="toUserName" value="" />
		</div>
		)
	}
}

export default ContentDetail