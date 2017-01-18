import React from 'react';
import Header from '../publicComponents/header.jsx';
import Introduction from '../publicComponents/introduction.jsx';
import Cat from '../publicComponents/cat.jsx';
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
	
	componentWillMount(){
		document.title = "张有明的手札";
		this.addForEach();
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
	
	getArticlesList(){
		var year = '0000';
		var num = 0;
		var list = '';
		var articleList = this.state.articles;
		articleList.forEach(function(result){
			if(result.createdate.indexOf(year)==-1){
				if(num!=0){
					list+='<span class="time_end"></span>';
					list+='</ul>';
					list+='</div>';
				}	
				year = result.createdate.substring(0,4);
				list+='<div class="mod-archive__item">';
				list+='<div id='+year+' class="mod-archive__year">'+year+'</div>';
				list+='<ul class="mod-archive__list">';
				list+='<span class="time_start"></span>';
				num++;
			}
			list+='<li>';
			list+='<h5 class="mod-archive__time">'+result.createdate.substring(5,10)+'</h5>';
			list+='<span></span>';
			list+='<a href=#/article/'+result._id+'>'+result.title+'</a>';
			list+='</li>';									
		});
		list+='<span class="time_end"></span>';
		list+='</ul>';
		list+='</div>';
		return list
	}
	
	addForEach(){
			if (!Array.prototype.forEach) {  
				Array.prototype.forEach = function(callback, thisArg) {  
					var T, k;  
					if (this == null) {  
						throw new TypeError(" this is null or not defined");  
					}  
					var O = Object(this);  
					var len = O.length >>> 0; // Hack to convert O.length to a UInt32  
					if ({}.toString.call(callback) != "[object Function]") {  
						throw new TypeError(callback + " is not a function");  
					}  
					if (thisArg) {  
						T = thisArg;  
					}  
					k = 0;  
					while (k < len) {  
						var kValue;  
						if (k in O) {  
							kValue = O[k];  
							callback.call(T, kValue, k, O);  
						}  
						k++;  
					}  
				};  
			}  
	}
	
	render(){
		var header =  <Header parentComponent={this} />;
		var introduction = <Introduction />;
		var cat = <Cat />;
		var articleList = this.getArticlesList();
		return(
			<div>
				<div className="left">
					
				</div>
				<div className="center">
					{header}
					<article className="mod-archive" dangerouslySetInnerHTML={{__html: articleList}}>
					</article>
				</div>
				<div className="right">
					{cat}
				</div>
			</div>
		)
	}
	
}

export default ContentList