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