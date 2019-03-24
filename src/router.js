var router = new VueRouter({
	routes: [
		{path:'/', redirect: '/main'},
		{path:'/find', redirect: '/recommend'},
		{path: '/main', name: 'main',component: resolve => require(['./components/main.vue'], resolve)
		},
		{path: '/recommend', name: 'recommend',component: resolve => require(['./components/recommend.vue'], resolve)
		},
		{path: '/singers', name: 'singers',component: resolve => require(['./components/singers.vue'], resolve)
		},
		{path: '/someone', name: 'someone',component: resolve => require(['./components/someone.vue'], resolve)
		}
			],
	linkActiveClass: 'active'
});

export default router;