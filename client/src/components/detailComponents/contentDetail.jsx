import React from 'react';
import Header from '../publicComponents/header.jsx';
import Comment from '../commentComponents/comment.jsx';
import touxiang from '../../img/touxiang.jpg';
import one from '../../img/v2-28094475660a08dc5b3dcf1836628b10_b.png';
import two from '../../img/v2-aa42b5b1cdcc192afe68fecc603127ad_b.png';

class ContentDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			article:{},
			loadingData:false
		};
	}

	componentDidMount(){
		const articleId = this.props.params.articleId;
		console.log(articleId);
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
						//修改状态
						that.setState({
							article : data.datas,
							loadingData: true
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

	render(){
		var header =  <Header />;
		var comment = <Comment />;
		var article = this.state.article;
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
			{comment}
		</div>
		)
	}
}

export default ContentDetail