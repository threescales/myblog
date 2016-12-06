import React from 'react';
import touxiang from '../../img/touxiang.jpg';
import axios from 'axios';
import qs from 'qs';

class Comment extends React.Component{
	constructor(props){
		super(props);
	}	
	
	submitComment(){
		let that = this;
		let userName = document.getElementById("userName").value;
		if(this.trim(userName)==''){
			
		}
		let content = document.getElementById("commentContent").value;
		if(this.trim(content)==''){
			
		}
		let articleId = document.getElementById("articleId").value;
		
		let commentFlag = document.getElementById("commentFlag").value;
		
		let toUserName = document.getElementById("toUserName").value;
		
		let toCommentId = document.getElementById("toCommentId").value;
		axios.post('/api/comment/addComment',qs.stringify({
			articleId:articleId,
			userName:userName,
			content:content,
			commentFlag:commentFlag,
			toUserName:toUserName,
			toCommentId:toCommentId
		})).then(function(response){
			let data = response.data;
			if(data.success){
				document.getElementById("userName").value = '';
				document.getElementById("commentContent").value = '';						
				that.props.parentComponent.getComments(articleId);		
			}else{
				//后台报错处理逻辑
			}
		});
	}
	
	trim(s){
    	return s.replace(/(^\s*)|(\s*$)/g, "");
	}

	cancelReply(){
		 document.getElementById("commentFlag").value = "0";
		 document.getElementById("toUserName").value = "";
		 document.getElementById("toCommentId").value = "";
		 document.getElementById("cancelReply").innerHTML = "";
	}

	render(){
		return(
			<div className="comment-respond">
				<h3>发表评论
					<small>
						<a id="cancelReply" onClick={this.cancelReply.bind(this)}></a>
					</small>
				</h3>
				<form>
					<p className="comment-form-comment">
						<textarea cols="45" rows="8" maxlength="65525" id="commentContent"></textarea>
					</p>
					<p className="comment-form-author">
						<label>您的姓名</label>
						<input type="text" size="30" maxlength="245" id="userName" class="input-comment"></input>
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