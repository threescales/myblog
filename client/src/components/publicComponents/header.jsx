import React from 'react';
import touxiang from '../../img/touxiang.jpg';

class Header extends React.Component{
	render(){
		return(
		<header className="mod-head"  id="pageHeader">			
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
						<a href="#">前端</a>
						<span>·</span>
					</li>
					<li id="menu-item-15" className="menu-item">
						<a href="#">后端</a>
						<span>·</span>
					</li>
					<li id="menu-item-19" className="menu-item">
						<a href="#">随笔</a>
						<span>·</span>
					</li>
					<li id="menu-item-32" className="menu-item">
						<a href="#">档案</a>
						<span>·</span>
					</li>
				</ul>
			</nav>
		</header>	
		)
	}
}

export default Header