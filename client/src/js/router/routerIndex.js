export default{
	childRoutes:[
		{
			path:'/',
			indexRoute:{component:require('../../components/indexComponents/index.jsx').default}
		},
		{
			path:'articles',
           	component:require('../../components/listComponents/contentList.jsx').default
		},
		{
			path:'article',
           	component:require('../../components/detailComponents/contentDetail.jsx').default
		}
	]
}