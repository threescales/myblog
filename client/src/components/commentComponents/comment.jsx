import React from 'react';
import touxiang from '../../img/touxiang.jpg';

class Comment extends React.Component{
	render(){
		return(
		<section className="mod-comment">
			<h3 className="comments">月入十万 难吗</h3>
			<ol className="commentlist">
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
							<a href="#">2016.11.04 11:56</a>
						</div>
						<p>这个网站做的不错</p>
						<div className="reply">
							<a>回复</a>
						</div>
					</div>
					<ul className="children">
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
									<a href="#">2016.11.04 11:56</a>
								</div>
								<p>这个网站做的不错</p>
								<div className="reply">
									<a>回复</a>
								</div>
							</div>
						</li>
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
									<a href="#">2016.11.04 11:56</a>
								</div>
								<p>这个网站做的不错</p>
								<div className="reply">
									<a>回复</a>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ol>
			<div className="comment-respond">
				<h3>发表评论
					<small>
						<a>取消回复</a>
					</small>
				</h3>
				<form>
					<p className="comment-form-comment">
						<textarea cols="45" rows="8" maxlength="65525"></textarea>
					</p>
					<p className="comment-form-author">
						<label>您的姓名</label>
						<input type="text" size="30" maxlength="245"></input>
					</p>
					<p className="comment-form-email">
						<label>电子邮件</label>
						<input type="text" size="30" maxlength="100" />
					</p>
					<p className="form-submit">
						<input type="submit" className="submit" value="发表评论" />
					</p>
				</form>
			</div>
		</section>	
		)
	}
}

export default Comment