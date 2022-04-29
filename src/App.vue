<template>
	<div id="app">
		<div id="app-page">
			<router-view v-slot="{ Component, route }">
                <transition :name="route.meta.transition || 'fade'" mode="out-in">
					<keep-alive>
						<div>
							<component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
						</div>
					</keep-alive>
				</transition>
			</router-view>
		</div>
		<div id="app-nav" v-if="this.$route.meta.showTab">
			<div class="nav-tab" :class="'p'+this.$route.meta.index"></div>
			<div v-for="(item, index) in nav" :key="index" @click="onPressRouter(item.router, index)" :class="this.$route.meta.index === index && 'active'">
				<img :src="item.logo" alt="error"/>
				<!-- <p>{{item.name}}</p> -->
			</div>
		</div>		
	</div>
</template>

<script>

export default {
	name: "App",
	components: {

	},
	data() {
		return {
			active: 0,
			nav: [
				{name: '首页', logo: this.$assets.Images.tab_home, router: '/'},
				{name: '商城', logo: this.$assets.Images.tab_shop, router: '/shop'},
				{name: '购物车', logo: this.$assets.Images.tab_cart, router: '/cart'},
				{name: '我的', logo: this.$assets.Images.tab_mine, router: '/mine'},
			]
		}
	},
	created() {
		
	},
	methods: {
		onPressRouter(router, index, link="") {
			this.active = index;
            let url = window.location.href;
            if (router === 'web') {
                console.log('url+link', url+link)
                window.location.href = url+link;
            } else {
                this.$router.push({path: router})
            }
        },
	}
};
</script>

<style lang="less">
* {
	margin: 0;
	padding: 0;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
input {
    border: 0;
    outline: none; // 去除选中状态边框
    background-color: rgba(0, 0, 0, 0);// 透明背景
}
@themeColor: #757cff;
#app {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	> #app-page {
		flex: 1;
		overflow: hidden;

		> div {
			width: 100%;
			height: 100%;
		}
	}

	> #app-nav {
		position: relative;
		height: 60px;
		display: flex;
		align-items: center;
		box-shadow: 0 0 10px #e1e1e1;

		> .nav-tab {
			position: absolute;
			width: 56px;
			height: 22px;
			border-radius: 5px;
			background: rgb(255, 196, 157);
			transition: left .2s;
		}
		> .p0 {left: calc(12.5% - 25px)}
		> .p1 {left: calc(37.5% - 25px)}
		> .p2 {left: calc(62.5% - 25px)}
		> .p3 {left: calc(87.5% - 25px)}

		> div {
			position: relative;
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			> div {
				position: absolute;
				width: 50px;
				height: 50px;
				border-radius: 25px;
				background: rgb(255, 196, 157);
			}

			> img {
				position: relative;
				width: 40px;
				height: 40px;
				transition: width .2s, height .2s;
			}

			> p {
				font-weight: 600;
				font-size: 15px;
				color: #949494;
				text-shadow: 2px 2px #ffe434;
			}
		}

		> .active {

			> img {
				position: relative;
				width: 50px;
				height: 50px;
			}

			> p {
				font-size: 15px;
				color: #757cff;
			}
		}
	}
}
</style>
