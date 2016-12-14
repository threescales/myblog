import React from 'react';
import Header from '../publicComponents/header.jsx';
import Clock from '../publicComponents/clock.jsx';
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
		var clock = <Clock />
		let year = '0000';
		let lyear = '0000';
		let list = '';
		this.state.articles.map(function(result){
			if(!result.createdate.includes(year)){
				lyear =  result.createdate.substring(0,4);
				list+='<div class="mod-archive__item">';
				list+='<div id='+lyear+' class="mod-archive__year">'+lyear+'</div>';
				list+='<ul class="mod-archive__list">';
			}
			if(result.createdate.includes(lyear)){
				list+='<li>';
				list+='<time class="mod-archive__time">'+result.createdate+'</time>';
				list+='<span>—</span>';
				list+='<a href="#/article/"'+result._id+'>'+result.title+'</a>';
				list+='</li>';											
			}
			if(!result.createdate.includes(year)){
				year = result.createdate.substring(0,4);												
				list+='</ul>';
				list+='</div>';
			}
			return (list);
		});
		return(
			<div>
				<div className="left">
					{clock}
				</div>
				<div className="center">
					{header}
					<article className="mod-archive" dangerouslySetInnerHTML={{__html: list}}>
					</article>
				</div>
			</div>
		)
	}
	
}

export default ContentList