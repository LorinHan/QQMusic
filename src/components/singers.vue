<template>
	<div class="singers">
		<router-link class="singer_item" v-for='item in singers_list' key='item.id' tag='div' :to='"/someone?id=" + item.id + "&img=" + item.avatar + "&name=" + item.name'>
			<img v-lazy="item.avatar" >
			<div class="name">{{item.name}}</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
	export default{
		data() {
			return {
				singers_list: []
			}
		},
		created(){
			this.$http.get('http://129.204.193.180:8080/getAllsingers').then(function(res) {
					this.singers_list = JSON.parse(res.body.resBody.data);
				});
			this.$emit('hideHeader', 1);
		}
	}
</script>

<style lang="less" scoped>
	.singers{
		margin-top: 88px;
		padding-top: 20px;
		.singer_item{
			width:100%;
			height:60px;
			line-height:60px;
			display: flex;
			box-sizing: border-box;
			padding:5px 10px;
			img{width:50px;height:50px;border-radius: 50%;}
			.name{width:100%;margin-left: 5px;border-bottom: 1px solid #ddd;padding-left: 10px;}
		}
	}
</style>