import React from 'react';
import Header from '../publicComponents/header.jsx';
import Clock from '../publicComponents/clock.jsx';
import Comment from '../commentComponents/comment.jsx';
import touxiang from '../../img/touxiang.jpg';
import youke from '../../img/youke.jpg';
import axios from 'axios';
import qs from 'qs';

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
		let that = this;
		axios.post('/api/article/getArticleDetail',qs.stringify({articleId:articleId})).then(function(response){
			let data = response.data;
			if(data.success){
				Comment.article = data.datas;
				that.setState({
					article : data.datas,
					loadingArticle: true
				});					
			}else{
				//后台报错处理逻辑
			}
		});
	}

	getComments(articleId){
		let that = this;
		axios.post('/api/comment/getComments',qs.stringify({articleId:articleId})).then(function(response){
			let data = response.data;
			if(data.success){
				that.setState({
					comments : data.datas,
					loadingComment: true
				});					
			}else{
				//后台报错处理逻辑
			}
		});
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
		var clock = <Clock />
		var article = this.state.article;
		var comment = <Comment parentComponent={this}/>;
		var that = this;
		return(
			<div>
				<div className="left">
				{clock}
				</div>
				<div className="center">
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
												<img className="avatar" src={youke} />
												<cite className="fn">{result.userName}</cite>
												<span className="says">{result.commentFlag==1 ? "回复：" + result.toUserName : "说道"}</span>
											</div>
											<br/>
											<div className="commentmetadata">
												<a href="javascript:void(0);">{result.createDate}</a>
											</div>
											<p>{result.content}</p>
											<div className="reply">
												<a href="javascript:void(0);" onClick={that.replyComment.bind(that,result.userName,result._id)}>回复</a>
											</div>
										</div>
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
		</div>
		)
	}
}

export default ContentDetail