<template>
	<div class="someone">
		<div class="top">
			<router-link class="fa fa-arrow-left" aria-hidden="true" to='/singers' tag='i'></router-link>
			<img :src="img">
			<p class="name">{{name}}</p>
			<p class="fans">1343万粉丝</p>
			<div class="button">
				<mt-button plain>关注</mt-button>
				<mt-button plain>勋章</mt-button>
			</div>
		</div>
		<div class="music">
			<div class="music_item" v-for='item in songs_list'>
				<p class="name">{{item.name}}</p><br>
				<p class="singer">{{name}}</p>
				<i class="fa fa-play" v-if='item_icon==0' @click='playTo(item.url, item.name, item.singer, img)'></i>
				<div class="playing" v-if='item_icon==1' @click='playTo(item.url, item.name, item.singer, img)'><mt-spinner type="double-bounce" color='#2ab071'></mt-spinner></div>
				<!-- <audio :src="'http://music.163.com/song/media/outer/url?id=' + item.url + '.mp3'" :id="'music' + item.id"></audio> -->
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data() {
			return {
				img: '',
				id: '',
				name: '',
				songs_list: [],
				item_icon: 0
			}
		},
		methods: {
			playTo(url, name, singer, avatar) {
				this.$emit('play', url, name, singer, avatar)
			}
		},
		created() {
			this.$emit('hideHeader', 0);
			console.log(this.$route.query)
			this.img = this.$route.query.img;
			this.id = this.$route.query.id;
			this.name = this.$route.query.name;
			this.$http.get('http://129.204.193.180:8080/getSomeSongs?id='+this.id).then(function(res) {
					this.songs_list = JSON.parse(res.body.resBody.data);
					console.log(this.songs_list)
				});
		},
		props: ['item_icon']
	}
</script>

<style lang="less" scoped>
	.top{
		width:100%;
		height:200px;
		position: relative;
		top:0;
		img{width:100%;height:100%;}
		i{position: absolute;left:10px;top:15px;color:#31c77c;opacity: 0.8;font-size: 22px;}
		.name{position: absolute;width:100%;color:#fff;font-weight:bold;text-align: center;font-size: 24px;bottom:60px;}
		.fans{position: absolute;width:100%;color:#ccc;bottom:38px;font-size:14px;text-align: center;}
		.button{position: absolute;bottom:5px;width:100%;height:25px;text-align: center;
			button{height:25px;border:1px solid #31c77c;color:#fff;border-radius: 10px;font-size: 14px;padding:0 15px;line-height: 25px;}
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
		.music_item:last-child{
				margin-bottom: 80px;
			}
	}
</style>