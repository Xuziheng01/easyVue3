<template>
	<div id="home">
        <div class="line1">
            <div>
                <p>欢迎回来!</p>
                <span>你好, Huanhuan</span>
            </div>
            <span class="iconfont icon-messagecenter"></span>
        </div>
        <div class="line2">
            <div class="search">
                <input placeholder="Search event..."/>
                <span class="iconfont icon-search"></span>
            </div>
            <div class="setting">
                <span class="iconfont icon-category"></span>
            </div>
        </div>
        <div class="line3">
            <div class="header">
                <p>大热单曲</p>
                <span>查看更多</span>
            </div>
            <div class="scroll">
                <div v-for="(item, index) in dataSource1" :key="index">
                    <img :src="item.img">
                    <div>
                        <p>{{item.name}}</p>
                    </div>
                    <div>
                        <b>￥{{item.price}}/</b>
                        <span>每份</span>
                    </div>
                    <div>
                        <span v-if="item.like" class="iconfont icon-favorites-fill"></span>
                        <span v-else class="iconfont icon-favorites"></span>
                        <p>{{item.person}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="line4">
            <div class="header">
                <p>大热专辑</p>
                <span>查看更多</span>
            </div>
            <div class="list">
                <div v-for="(item, index) in dataSource2" :key="index">
                    <img :src="item.img">
                    <div class="center">
                        <P>Lantern</P>
                        <div>
                            <img :src="$assets.Images.tab_home">
                            <p>HongKong</p>
                        </div>
                    </div>
                    <div class="right">
                        <p>Feb</p>
                        <p>18</p>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
export default {
	data() {
		return {
            dataSource1: [
                {img: this.$assets.Images.list1, price: 30, name: 'Black Pumas', like: false, person: 1576},
                {img: this.$assets.Images.list3, price: 60,name: 'Suffer', like: true, person: 3211},
                {img: this.$assets.Images.list4, price: 100,name: 'Gone', like: false, person: 2813},
                {img: this.$assets.Images.list5, price: 20,name: 'Dirty Shoes', like: false, person: 7894},
                {img: this.$assets.Images.list6, price: 26,name: 'sunny', like: false, person: 3956},
                {img: this.$assets.Images.list7, price: 99,name: '21', like: true, person: 8923},
                {img: this.$assets.Images.list8, price: 30,name: 'Black Pumas', like: false, person: 3472},
                {img: this.$assets.Images.list9, price: 100,name: 'I Love You 3000', like: false, person: 5635},
                {img: this.$assets.Images.list10, price: 50,name: 'Homage', like: false, person: 3451},
                {img: this.$assets.Images.list11, price: 1,name: '豆瓣酱', like: true, person: 8467},
            ],
            dataSource2: [
                {img: this.$assets.Images.list_second1},
                {img: this.$assets.Images.list_second2},
                {img: this.$assets.Images.list_second3},
                {img: this.$assets.Images.list_second4},
                {img: this.$assets.Images.list_second5},
            ]
		}
	},
	created() {
		// this.requestData();
	},
	methods: {
		async requestData() {
			let url = this.$api.sysUserList;
			let params = {

			};
			let result = await this.$post(url, params);
			if (result.code === this.$serve.SUCCESS_CODE) {

			} else {

			}
		},
	}
};
</script>
<style lang="less" scoped>
@themeColor: #757cff;
#home {
    background: #f6f7f8;
    width: 100%;
	height: 100%;
	overflow-y: scroll;

    > .line1 {
        padding: 20px;
        display: flex;
        align-items: center;

        > div {
            flex: 1;

            > p {
                margin-bottom: 10px;
                font-size: 16px;
                color: #333;
                font-weight: 600;
            }

            > span {
                font-size: 14px;
                color: #333;
            }
        }

        > span {
            font-size: 40px;
            color: #333;
        }
    }

    > .line2 {
        padding: 0 20px;
        display: flex;

        > .search {
            flex: 1;
            margin-right: 10px;
            padding: 0 10px;
            border-radius: 10px;
            background: #757cff16;
            display: flex;
            align-items: center;

            > input {
                flex: 1;
            }

            > span {
                font-size: 20px;
            }
        }

        > .setting {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            background: @themeColor;
            display: flex;
            align-items: center;
            justify-content: center;

            > span {
                font-size: 30px;
                color: #fff;
            }
        }
    }

    > .line3 {
        width: 100%;

        > .header {
            padding: 20px;
            display: flex;
            align-items: center;

            > p {
                flex: 1;
                color: #333;
                font-weight: bold;
                font-size: 16px;
            }

            > span {
                font-size: 14px;
                color: @themeColor;
            }
        }

        > .scroll::after {
            content: "···";
            line-height: 180px;
            font-size: 30px;
            color: @themeColor;
            padding: 0 10px;
        }

        > .scroll {
            width: 100%;
            display: flex;
            overflow-x: scroll;

            > div {
                width: 180px;
                margin-left: 20px;

                > img {
                    width: 180px;
                    height: 180px;
                    border-radius: 15%;
                    box-shadow: 5px 5px 5px #e1e1e1;
                }

                > div {
                    width: 100%;
                    margin-top: 6px;
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    text-overflow:ellipsis;
                    overflow:hidden;

                    > b {
                        font-size: 16px;
                        color: #333;
                    }

                    > span {
                        font-size: 14px;
                        color: #333;
                    }

                    > p {
                        font-size: 14px;
                        color: #333;
                        //white-space: nowrap;
                        //text-overflow:ellipsis;
                        //overflow:hidden;
                    }

                    > .iconfont {
                        font-size: 16px;
                        margin-right: 6px;
                        color: @themeColor;
                    }
                }
            }
        }
    }

    > .line4 {
        width: 100%;

        > .header {
            padding: 20px;
            display: flex;
            align-items: center;

            > p {
                flex: 1;
                color: #333;
                font-weight: bold;
                font-size: 16px;
            }

            > span {
                font-size: 14px;
                color: @themeColor;
            }
        }

        > .list {

            > div {
                height: 100px;
                padding: 0 20px;
                display: flex;
                align-items: center;

                > img {
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                    background: #00A0E9;
                }

                > .center {
                    flex: 1;
                    margin: 0 10px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;

                    > p {
                        font-size: 14px;
                        color: #333;
                    }

                    > div {
                        display: flex;
                        align-items: center;

                        > img {
                            width: 16px;
                            height: 16px;
                            margin-right: 6px;
                        }

                        > p {
                            font-size: 14px;
                            color: #333;
                        }
                    }
                }

                > .right {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    > p {
                        font-size: 14px;
                        color: #666;
                    }
                }
            }
        }
    }
}

::-webkit-scrollbar {
    width: 0;
}
</style>