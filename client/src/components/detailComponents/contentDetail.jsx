import React from 'react';
import Header from '../publicComponents/header.jsx';
import Comment from '../commentComponents/comment.jsx';
import touxiang from '../../img/touxiang.jpg';
import one from '../../img/v2-28094475660a08dc5b3dcf1836628b10_b.png';
import two from '../../img/v2-aa42b5b1cdcc192afe68fecc603127ad_b.png';

class ContentDetail extends React.Component{
	render(){
		var header =  <Header />;
		var comment = <Comment />;
		return(
			<div>
			{header}
			<article>
				<header>
					<h1 className="mod-post__title">月入十万，难吗？</h1>
				</header>
				<div className="mod-post__entry wzulli">
					<p>格雷姆的段落和司机的故事，简而言之，思路决定出路。</p>
					<p>“月入十万”问法的背后，是上班族思维。这种思路的局限性，导致其一碰上创业搭边的事儿就统统失灵。</p>
					<p>不信，我们就拿开网店这种最接地气的创业模式来举个例子。</p>
					<p>对天猫女装店铺3月到9月的数据进行提取，月销售额过10万的店铺数据如下：</p>
					<p>
						<img title="" alt="v2-28094475660a08dc5b3dcf1836628b10_b" src={one}
						width="600" height="293" />
					</p>
					<p>
						<img title="" alt="v2-aa42b5b1cdcc192afe68fecc603127ad_b" src={two}
						width="600" height="293" />
					</p>
				</div>
			</article>
			{comment}
		</div>
		)
	}
}

export default ContentDetail