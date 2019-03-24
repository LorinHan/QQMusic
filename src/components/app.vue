<template>
	<!-- 移动端~~韩罗霖 -->
	<div id="app">
		<div class="header" v-if='header'>
			<div class="top">
				<i class="fa fa-bars" aria-hidden="true"></i>
				<router-link to='/recommend' tag='span'>推荐</router-link>
				<router-link to='/main' tag='span'>音乐馆</router-link>
				<router-link to='/find' tag='span'>发现</router-link>
				<i class="fa fa-plus" aria-hidden="true"></i>
			</div>
			<mt-search v-model="value"></mt-search>
		</div>
		<transition mode='out-in'><router-view @play='play' :item_icon='item_icon' @hideHeader='hideHeader'></router-view></transition>
		<div class="footer">
			<div :class="classObj">
				<img :src="avatar">
			</div>
			<div class="info">
				<p class="name">{{name}}</p>
				<p class="singer">{{singer}}</p>
			</div>
			<div class="play" @click='play(musicid)'><i :class="control_icon" aria-hidden="true"></i> </div>
			<audio :src="'http://music.163.com/song/media/outer/url?id=' + musicid + '.mp3'" id='music0' v-if='show' controls>
			</audio>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data() {
			return {
				header: true,
				played: 0,
				control_icon: 'fa fa-play',
				musicid: '210049',
				music_list: [],
				avatar: `https://p2.music.126.net/o-FjCrUlhyFC96xiVvJZ8g==/109951163111191410.jpg?param=130y130`,
				name: '布拉格广场',
				singer: '周杰伦',
				music_id: 'music0',
				show: 1,
				routate: 'routate',
				classObj: {'avatar': true, 'routate': false},
				item_icon: 0
			}
		},
		methods: {
			play(url, name, singer, avatar) {
				// if(audio_id != 'music0') {
				// 	this.music_id = audio_id;
				// }
				if(url != this.musicid) {
					this.show = 0;
					this.name = name;
					this.singer = singer;
					this.avatar = avatar;
				}
				this.musicid = url;
				this.show = 1;
				if (this.played == 0) {
					this.played = 1;
					this.control_icon = 'fa fa-pause';
					this.item_icon = 1;
					this.classObj.routate = true;
					var t=setTimeout(function () {
						var a = document.getElementById('music0').play();
					},500);
					
				} else {
					this.played = 0;
					this.control_icon = 'fa fa-play';
					this.item_icon = 0
					document.getElementById('music0').pause();
					this.classObj.routate = false;
				}
			},
			hideHeader(hide) {
				this.header = hide;
			}
		}
	}
</script>

<style lang="less">
	*{
		margin:0;
		padding:0;
	}
	#app{max-width: 500px; margin: 0 auto;}
	.header{
		max-width: 500px;
		width:100%;
		height:88px;
		padding:5px;
		position: fixed;
		top:0;
		z-index: 800;
		background-color: #31c77c;
		box-sizing: border-box;
		.top{
			width:100%;
			height:50%;
			font-size: 16px;
			line-height: 44px;
			color:#eee;
			text-align: center;
			i{
				float:left;
				color:#fff;
				font-size: 20px;
				line-height: 44px;
			}
			i:last-child{
				float:right;
			}
			span{
				margin: 0 10px;
			}
			.active{
				font-size: 20px;
				color:#fff;
				font-weight: bold;
			}
		}
		.mint-search{
			height:40px;
			.mint-searchbar{padding:0;background-color: #2ab071;}
			.mint-searchbar-inner{
				background-color: #2ab071;
				input{background-color: #2ab071;padding-left: 5px;}
				input::placeholder{color:#eee;}
			}
			.mint-searchbar-inner .mintui-search{color: #eee;}
			.mint-searchbar-cancel{display: none;}
		}
	}
	.footer{
		box-sizing: border-box;
		width:100%;
		height:70px;
		position: fixed;
		bottom:0;
		padding:10px;
		box-shadow: 0 -1px 2px #ccc;
		background-color: #eee;
		max-width: 500px;
		audio{position: absolute; top:10px;left:20px;}
		.avatar{
			display: inline-block;
			width:50px;
			height:50px;
			border-radius: 50%;
			background-color: #fff;
			z-index: 999;
			position: absolute;
			img{width:100%;height:100%;border-radius: 50%;}
		}
		@keyframes circle{
			0%{ transform: rotate(0deg); }
			100%{ transform: rotate(360deg); }
		}
		.routate{
			animation: circle 10s infinite linear;
		}
		.info{
			display: inline-block;
			width:80px;
			height:100%;
			margin: 0px 0 5px 5px;
			z-index: 999;
			position: absolute;
			left:60px;
			background-color: #eee;
			p{font-size: 14px;}
			.name{margin-bottom: 5px;font-weight: bold;}
			.singer{color:#31c77c;}
		}
		.play{
			width:40px;
			height:40px;
			border-radius: 50%;
			line-height: 40px;
			text-align: center;
			margin-top: 8px;
			position: absolute;
			right:10px;
			z-index: 999;
			i{font-size: 26px;color:#2ab071;}
		}
	}
	.v-enter,
		.v-leave-to{
			opacity: 0;
		}
		.v-enter-active,
		.v-leave-active{
			transition: all 0.5s ease;
		}

</style>