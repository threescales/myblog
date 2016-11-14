import React from 'react';
import Header from '../publicComponents/header.jsx'
class ContentList extends React.Component{
	render(){
		var header =  <Header />;
		return(
			<div>
			{header}
			<article className="mod-archive">
			<div className="mod-archive__item">
				<div id="2015" className="mod-archive__year">2016</div>
				<ul className="mod-archive__list">
					<li>
						<time className="mod-archive__time">2016-10-30</time>
						<span>—</span>
						<a href="#">如何让自己更有吸引力？</a>
					</li>
					<li>
						<time className="mod-archive__time">2016-10-12</time>
						<span>—</span>
						<a href="#">以为放假了就有时间，别自欺欺人了</a>
					</li>
					<li>
						<time className="mod-archive__time">2016-10-10</time>
						<span>—</span>
						<a href="#">你连”高效学习”都不会，如何改变自己？</a>
					</li>
					<li>
						<time className="mod-archive__time">2016-04-10</time>
						<span>—</span>
						<a href="#">我为什么要待在大城市</a>
					</li>
				</ul>
			</div>
		</article>
		</div>
		)
	}
}

export default ContentList