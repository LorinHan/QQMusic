// 移动端~~韩罗霖
import app from './components/app.vue';

import router from './router.js';

Vue.use(VueLazyload);

var vm = new Vue({
	el: '#app',
	data: {},
	methods: {},
	router,
	render: function (createElement) {
		return createElement(app);
	}
});