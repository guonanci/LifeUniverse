<template>
	<view class="head">
		<swiper :indicator-dots="false" :autoplay="false" previous-margin="30rpx" next-margin="30rpx" :circular="false"
				current="0" style="height: 100vh;">
			<swiper-item  class="bianxian">
				<view class="fengmian" >
					<view style="font-size: 50rpx;font-weight: bold;color: #f8ddb2;position: relative;top: 80rpx;">
						<view class="biaoti" >
							{{familyinfo.nickName || ''}} 
						</view>
					</view>
				</view>
			</swiper-item>
			
			<swiper-item  class="bianxian"  v-for="(item,index) in mululist" :key="index">
				<view class="yemian" style="display: flex;">
					<view class="leftbiaoti" style="display: flex;">
						{{familyinfo.nickName}}
						<view style="margin-top: 30rpx;">&nbsp;目录&nbsp;{{daijifun(index)}} 页</view>
					</view>
					<view class="" style="height: 1000rpx;display: flex;align-items: center;">
						<view class="" style="height: 900rpx;">
							<muludiv :datalist="item"></muludiv>
						</view>
					</view>
				</view>
			</swiper-item>
			
			<swiper-item  class="bianxian"  v-for="(item1,index1) in familyMap" :key="index1" >
				<view class="yemian" style="display: flex;border: 1px solid #000;padding: 15rpx;">
					<view class="leftbiaoti" style="display: flex;">
						{{familyinfo.nickName}}
						<view style="margin-top: 30rpx;">&nbsp; 世系图 &nbsp;{{daijifun(index1)}} 页</view>
					</view>
					<view class=""  style="height: 1000rpx;display: flex;align-items: center;">
						<view style="height: 950rpx;">
							<shixitu  :datalist="item1" style="" ></shixitu>
						</view>
						
					</view>
				</view>
			</swiper-item>
			
			<swiper-item  class="bianxian"  v-for="(item2,index2) in infolist" :key="index2" v-if="type == 4">
				<view class="yemian" style="display: flex;">
					<view class="leftbiaoti" style="display: flex;">
						{{familyinfo.nickName}}
						<view style="margin-top: 30rpx;">&nbsp; 资料表 &nbsp;{{daijifun(index2)}} 页</view>
					</view>
					<view class="" style="height: 1000rpx;display: flex;align-items: center;">
						<view class="" style="height: 900rpx;">
							<leibiao :datalist="item2"></leibiao>
						</view>
					</view>
				</view>
			</swiper-item>
			
			<swiper-item  class="bianxian"  v-for="(item2,index2) in infolist" :key="index2" v-if="type == 5">
				<view class="yemian" style="display: flex;">
					<view class="leftbiaoti" style="display: flex;">
						{{familyinfo.nickName}}
						<view style="margin-top: 30rpx;">&nbsp; 档案表 &nbsp;{{daijifun(index2)}} 页</view>
					</view>
					<view class="" style="height: 1000rpx;display: flex;align-items: center;">
						<view class="" style="height: 900rpx;">
							<dangan :datalist="item2" ></dangan>
						</view>
					</view>
				</view>
			</swiper-item>
			
			<swiper-item  class="bianxian">
				<view class="beimian" >
					<view style="font-size: 50rpx;font-weight: bold;color: #f8ddb2;position: relative;top: 80rpx;">
						
					</view>
				</view>
			</swiper-item>
			
		</swiper>					
	</view>
</template>

<script>
	import muludiv from './components/tashi/mulu/mulu.vue';
	import shixitu from './components/tashi/info/info.vue';
	import leibiao from './components/tashi/leibiao/leibiao.vue';
	import dangan from './components/dangan/dangan/dangan.vue';
	import {tashifun} from "@/utils/api/family.js"
	export default {
		components: {
			muludiv,
			shixitu,
			leibiao,
			dangan
		},
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				type:1,
				familyid:null,
				familyinfo:{
					familyinfo:null
				},
				familyMap:null,
				infolist:null,
				mululist:null,
			}
		},
		onLoad(option) {
			uni.showLoading({
				title: '加载中',
				mask:true
			});
			console.log(option.id); //打印出上个页面传递的参数。
			this.familyid = option.id;
			this.type = option.type;
			this.tashifunfun();
		},
		computed: {
			daijifun(){
			  return (e) => {
			    return this.shuzifun((e));
			  };
			}
		},
		methods: {
			//数字转文字  
			shuzifun(e){
			  let money = e;
			  	//汉字的数字
			  	var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
			  	//基本单位
			  	var cnIntRadice = new Array('', '拾', '佰', '仟');
			  	//对应整数部分扩展单位
			  	var cnIntUnits = new Array('', '万', '亿', '兆');
			  	//对应小数部分单位
			  	//整型完以后的单位
			  	var cnIntLast = '';
			  	//最大处理的数字
			  	var maxNum = 999999999999999;
			  	//金额整数部分
			  	var integerNum;
			  	//金额小数部分
			  	var decimalNum;
			  	//输出的中文金额字符串
			  	var chineseStr = '';
			  	//分离金额后用的数组，预定义
			  	var parts;
			  	if (money == '') { return ''; }
			  	money = parseFloat(money);
			  	if (money >= maxNum) {
			  		//超出最大处理数字
			  		return '';
			  	}
			  	if (money == 0) {
			  		chineseStr = cnNums[0] + cnIntLast;
			  		return chineseStr;
			  	}
			  	//转换为字符串
			  	money = money.toString();
			  	if (money.indexOf('.') == -1) {
			  		integerNum = money;
			  		decimalNum = '';
			  	} else {
			  		parts = money.split('.');
			  		integerNum = parts[0];
			  		decimalNum = parts[1].substr(0, 4);
			  	}
			  	//获取整型部分转换
			  	if (parseInt(integerNum, 10) > 0) {
			  		var zeroCount = 0;
			  		var IntLen = integerNum.length;
			  		for (var i = 0; i < IntLen; i++) {
			  			var n = integerNum.substr(i, 1);
			  			var p = IntLen - i - 1;
			  			var q = p / 4;
			  			var m = p % 4;
			  			if (n == '0') {
			  				zeroCount++;
			  			} else {
			  				if (zeroCount > 0) {
			  					chineseStr += cnNums[0];
			  				}
			  				//归零
			  				zeroCount = 0;
			  				chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
			  			}
			  			if (m == 0 && zeroCount < 4) {
			  				chineseStr += cnIntUnits[q];
			  			}
			  		}
			  		chineseStr += cnIntLast;
			  	}
			
			  	if (chineseStr == '') {
			  		chineseStr += cnNums[0] + cnIntLast ;
			  	}
			  	return chineseStr;
			},
			tashifunfun(){
				tashifun(this.familyid,this.type).then(res=>{
					console.log(res)
					if(res.code == 200){
						this.familyinfo =res.data;
						this.familyMap = this.familyinfo.listss.familyMap;
						this.infolist = this.familyinfo.listss.infolist;
						this.mululist =this.familyinfo.listss.mululist;
					}
					uni.hideLoading();
				})
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-x {
		width: 750rpx;
		height: 1100rpx;
	}

	.bianxian{
		 display: flex;
		 justify-content: center;
		 align-items: center;
	}
	
	.fengmian{
		background: url('https://api.t2234.cn/static/index/book.png');
		width: 650rpx;
		height: 953rpx;
		background-size: 100% 100%;
	}
	.yemian{
		background: #fff;
		width: 650rpx;
		height: 953rpx;
		background-size: 100% 100%;
		border: 1px solid #000;
		border-radius: 15rpx;
	}
	.biaoti{
		writing-mode: vertical-rl;
		color: #000;
		position: relative;
		top: 40rpx;
		right: -75%;
		font-size: 65rpx;
	}
	.beimian{
		background: url('https://api.t2234.cn/static/index/beimian.png');
		width: 650rpx;
		height: 953rpx;
		background-size: 100% 100%;
	}
	.leftbiaoti{
		writing-mode: vertical-rl;
		color: #000;
		position: relative;
		top: 10%;
		font-size: 55rpx;
		font-family: 楷体;
		font-weight: bold;
		
	}

</style>
