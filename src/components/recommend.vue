<template>
	<div class="recommend">
		<p class="title">为 你 推 荐 歌 单</p>
		<div class="music_list">
			<div class="music_item" v-for='item in music_list'>
				<img :src="item.img">
				<p>{{item.name}}</p>
				<div class="icon">
					<i class="fa fa-music" aria-hidden="true"></i>
					<span>5.798万</span>
					<i class="fa fa-play" v-if='item_icon==0' @click='playTo(item.url, item.name, item.singer, item.img)'></i>
				<div class="playing" v-if='item_icon==1' @click='playTo(item.url, item.name, item.singer, item.img)'><mt-spinner type="double-bounce" color='#2ab071'></mt-spinner></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data() {
			return {
				music_list: []
			}
		},
		methods: {
			playTo(url, name, singer, avatar) {
				this.$emit('play', url, name, singer, avatar)
			}
		},
		created() {
			this.$http.get('http://129.204.193.180:8080/getRecommend').then(function(res) {
					this.music_list = JSON.parse(res.body.resBody.data);
				});
			this.$emit('hideHeader', 1);
		},
		props: ['item_icon']
	}
</script>

<style lang="less" scoped>
	.recommend{
		margin-top: 88px;
		.title{height:50px;text-align: center;line-height: 50px;font-weight: bold;}
		.music_list{
			width:100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.music_item:last-child{
				margin-bottom: 80px;
			}
			.music_item{
				height:120px;
				width:32%;
				margin: 10px 0 20px 0;
				position: relative;
				img{width:100%;height:100px;}
				p{font-size: 14px;text-align: center;}
				.icon{
					position: absolute;
					box-sizing: border-box;
					width:100%;
					height:20px;
					bottom:20px;
					line-height: 20px;
					color:#fff;
					padding:0 5px;
					i{position: relative;bottom:2px;}
					i,
					span{font-size: 10px;}
					i.fa-play{float:right;color:#fff;position: absolute;right:5px;}
			i.fa-play:active{color:#2ab071;}
			.playing{width:5px;height:5px;position: absolute;right:25px;bottom:25px;}
				}
			}
		}
	}
</style>