import React from 'react';
import Header from '../publicComponents/header.jsx'

class ContentList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			articles:[],
			loadingData:false
		};
	}
	
	componentDidMount(){
		const articleType = this.props.params.articleType;
		//赋值this指向
		let that = this;
		if(self.fetch) {
    		// 使用 fetch 框架查询文章列表
			fetch("/api/article/getArticles",{
				method: "POST",
				headers: {
    						"Content-Type": "application/x-www-form-urlencoded"
 				},
				body:"articletype="+articleType
			}).then(function(response){
				//处理json数据
				response.json().then(function(data){
					if(data.success){
						//修改状态
						that.setState({
							articles : data.datas,
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
		
		return(
			<div>
			{header}
			<article className="mod-archive">
			<div className="mod-archive__item">
				<div id="2015" className="mod-archive__year">2016</div>
				<ul className="mod-archive__list">
					{
						this.state.loadingData ?
						this.state.articles.map(function(result){
							return (
									<li>
										<time className="mod-archive__time">{result.createdate}</time>
										<span>—</span>
										<a href={"index.html#/article/"+result._id}>{result.title}</a>
									</li>
								);
						}) : ''
					}
				</ul>
			</div>
		</article>
		</div>
		)
	}
	
}

export default ContentList