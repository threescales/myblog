export default{
	childRoutes:[
		{
			path:'/',
			indexRoute:{component:require('../../components/indexComponents/index.jsx').default}
		},
		{
			path:'articles/:articleType',
           	component:require('../../components/listComponents/contentList.jsx').default
		},
		{
			path:'article/:articleId',
           	component:require('../../components/detailComponents/contentDetail.jsx').default
		}
	]
}
// import React from 'react';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import Index from '../../components/indexComponents/index.jsx';
// import ContentList from '../../components/listComponents/contentList.jsx';
// import ContentDetail from '../../components/detailComponents/contentDetail.jsx';

// const RouteConfig = (
// 	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
// 		<IndexRoute component={Index}/>
// 		<Route path="articles/:articleType" component={ContentList} />
// 		<Route path="article/:articleId" component={ContentDetail} />
// 	</Router>
// );

// export default RouteConfig;