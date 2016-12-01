import React from 'react';
import Header from '../publicComponents/header.jsx';
import axios from 'axios';
import qs from 'qs';

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
		this.getArticles(articleType);
		
	}
	
	getArticles(articleType){
		//赋值this指向
		let that = this;
		axios.post('/api/article/getArticles',qs.stringify({articletype:articleType})).then(function(response){
			//处理json数据
			let data = response.data;
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
	}
	
	render(){
		var header =  <Header parentComponent={this} />;
		
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