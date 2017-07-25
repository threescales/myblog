import React from 'react';
import touxiang from '../../img/touxiang.jpg';

class Header extends React.Component{
	jump(articleType){
		this.props.parentComponent.getArticles(articleType);
	}
	
	render(){
		return(
		<header className="mod-head"  id="pageHeader">
			<div className="center">		
			<h1 className="mod-head__title">
				<a href="#">张有明</a>
			</h1>
			<div className="mod-head__logo">
				<a href="#">
					<img className="avatar" src={touxiang} />
				</a>
			</div>
			<nav className="mod-head__nav">
				<ul className="mod-head__ul">
					<li id="menu-item-14" className="menu-item">
						<a href="#/articles/1" onClick={this.jump.bind(this,1)}>前端</a>
						<span>·</span>
					</li>
					<li id="menu-item-15" className="menu-item">
						<a href="#/articles/2" onClick={this.jump.bind(this,2)}>后端</a>
						<span>·</span>
					</li>
					<li id="menu-item-19" className="menu-item">
						<a href="#/articles/3" onClick={this.jump.bind(this,3)}>随笔</a>
						<span>·</span>
					</li>
					<li id="menu-item-32" className="menu-item">
						<a href="#">档案</a>
						<span>·</span>
					</li>
				</ul>
			</nav>
			</div>
		</header>	
		)
	}
}

export default Header