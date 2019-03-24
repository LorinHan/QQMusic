<template>
	<div class="main">
		<div class="swipe">
			<mt-swipe :auto="4000">
  <mt-swipe-item><img src='../images/lb1.jpg'></mt-swipe-item>
  <mt-swipe-item><img src='../images/lb2.jpg'></mt-swipe-item>
  <mt-swipe-item><img src='../images/lb3.jpg'></mt-swipe-item>
  <mt-swipe-item><img src='../images/lb4.jpg'></mt-swipe-item>
</mt-swipe>
		</div>
		<div class="nav">
			<router-link class="nav_item" to='/singers' tag='div'>
				<i class="fa fa-users" aria-hidden="true"></i>
				<p>歌手</p>
			</router-link>
			<router-link class="nav_item" to='/singers' tag='div'>
				<i class="fa fa-signal" aria-hidden="true"></i>
				<p>排行</p>
			</router-link>
			<router-link class="nav_item" to='/singers' tag='div'>
				<i class="fa fa-tasks" aria-hidden="true"></i>
				<p>分类歌单</p>
			</router-link>
		</div>
		<div class="music">
			<div class="music_item" v-for='item in music_list'>
				<p class="name">{{item.name}}</p><br>
				<p class="singer">{{item.singer}}</p>
				<i class="fa fa-play" v-if='item_icon==0' @click='playTo(item.url, item.name, item.singer, item.avatar)'></i>
				<div class="playing" v-if='item_icon==1' @click='playTo(item.url, item.name, item.singer, item.avatar)'><mt-spinner type="double-bounce" color='#2ab071'></mt-spinner></div>
				<!-- <audio :src="'http://music.163.com/song/media/outer/url?id=' + item.url + '.mp3'" :id="'music' + item.id"></audio> -->
			</div>
			<div class="more">
				<mt-button plain @click='getMore()'>加载更多 >_< </mt-button>
			</div>
		</div>

		
	</div>
</template>

<script type="text/javascript">
	export default{
		data() {
			return {
				music_list: [],
				more_num: 0,
			}
		},
		methods: {
			getMore() {
				this.more_num += 10;
				this.$http.get('http://129.204.193.180:8080/getAllMusic?start=' + this.more_num).then(function(res) {
					var newList = JSON.parse(res.body.resBody.data)
					for(var i=0; i<newList.length; i++){
						this.music_list.push(newList[i]);
					}
				})
			},
			playTo(url, name, singer, avatar) {
				this.item_icon = !this.item_icon
				this.$emit('play', url, name, singer, avatar)
			}
		},
		created() {
			this.$http.get('http://129.204.193.180:8080/getAllMusic?start=0').then(function(res) {
					this.music_list = JSON.parse(res.body.resBody.data);
				});
			this.$emit('hideHeader', 1);
		},
		props: ['item_icon']
	}
</script>

<style lang="less" scoped>
	/* 轮播图区域 */
	.swipe{
		width:100%;
		height:150px;
		margin-top: 88px;
		img{width:100%;height:100%;}
	}
	/* 中部导航栏 */
	.nav{
		width:100%;
		height:88px;
		padding:10px;
		box-sizing: border-box;
		box-shadow: 0 0 2px #ccc;
		.nav_item{
			display: inline-block;
			width:32%;
			text-align: center;
			margin-top: 12px;
			i{color:#31c37c;font-size: 22px;}
			p{font-size: 14px;margin-top: 5px;}
		}
	}
	.music{
		width:100%;
		.music_item{
			width:100%;
			height:60px;
			padding:5px 15px;
			box-sizing: border-box;
			border-bottom: 1px solid #eee;
			position: relative;
			p{height:50%;line-height: 30px;display: inline-block;max-width: 45%;overflow: hidden;white-space:nowrap; text-overflow:ellipsis;}
			.name{font-size: 14px;font-weight: bold;}
			.singer{color:#ccc; font-size: 12px;}

			i{float:right;font-size: 22px;color:#31c37c;line-height: 0px;}
			i:active{color:#2ab071;}
			.playing{width:30px;height:30px;position: absolute;right:15px;top:15px;}
		}
		.more{
				width:100%;
				height:50px;
				background-color: #31c77c;
				margin-bottom: 70px;
				opacity: 0.5;
				border-top: 1px solid #2ab071;
				button{width:100%;margin-top: 5px;color:#fff;border: none;}
			}
	}
</style>