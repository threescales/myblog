import React from 'react';
import touxiang from '../../img/touxiang.jpg';

class Comment extends React.Component{
	constructor(props){
		super(props);
	}	
	
	submitComment(){
		let that = this;
		let userName = document.getElementById("userName").value;
		if(trim(userName)==''){
			
		}
		let content = document.getElementById("commentContent").value;
		if(trim(content)==''){
			
		}
		let articleId = document.getElementById("articleId").value;
		fetch("/api/comment/addComment",{
			method: "POST",
				headers: {
    						"Content-Type": "application/x-www-form-urlencoded"
 				},
				body:"articleId="+articleId+"&userName="+userName+"&content="+content+"&forOtherFlag=0&toUserName=0&toCommentId=0"
		}).then(function(response){
				//处理json数据
				response.json().then(function(data){
					if(data.success){
						document.getElementById("userName").value = '';
						document.getElementById("commentContent").value = '';
						
						that.props.parentComponent.getComments(articleId);		
					}else{
						//后台报错处理逻辑
					}
				});
			});
	}
	
	trim(s){
    	return s.replace(/(^\s*)|(\s*$)/g, "");
	}

	render(){
		return(
			<div className="comment-respond">
				<h3>发表评论
					{/*<small>
						<a>取消回复</a>
					</small>*/}
				</h3>
				<form>
					<p className="comment-form-comment">
						<textarea cols="45" rows="8" maxlength="65525" id="commentContent"></textarea>
					</p>
					<p className="comment-form-author">
						<label>您的姓名</label>
						<input type="text" size="30" maxlength="245" id="userName" ></input>
					</p>
					<p className="form-submit">
						<input type="button" className="submit" value="发表评论" onClick={this.submitComment.bind(this) }/>
					</p>
				</form>
			</div>
		)
	}
}

export default Comment