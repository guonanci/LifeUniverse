<template>
  <view>

    <view v-for="(item,index) in listyufun(datalist)" :key="index"  class="" style="margin-top: 10rpx;">
		  <view style="display: flex;">
				<view class="daiji">第{{daijifun(index)}}世</view>
				
				 <view v-for="(value, k) in item" :key="k" class="dingwei" :style="[leftStyle(k,index,value)]" style="margin-top: 35rpx;">
					<view v-if="value.type == 1" 	style="border: 1rpx solid #000; width:40rpx;position: absolute;left: 10rpx;top: -35rpx;" ></view>
					<view v-if="value.type == 2" 	style="border: 1rpx solid #000; width:50rpx;position: absolute;left: -30rpx;top: -35rpx;"></view>
					<view v-if="value.type == 3" 	style="border: 1rpx solid #000; width:40rpx;position: absolute;left: -30rpx;top: -35rpx;"></view>
					<view v-if="value.name != null" style="border: 1rpx solid #000; height: 25rpx; position: absolute;left: 10rpx;top: -35rpx; " ></view>
					
					<view>
						  <view  v-if="value.name != null"  style="border: 2rpx solid #000; border-radius: 50%; width: 25rpx; height: 25rpx;position: absolute;left: 0rpx;top: -10rpx;"></view>
						  <view style="width: 0.5rpx;font-family: 楷体;font-weight: bold;text-align: center;display: flex;margin-top: 20rpx;font-size: 25rpx;">{{value.name|| ''}}
						 <view v-if="value.infopage != null" style="width: 0.5rpx;font-family: 楷体;font-weight: bold;text-align: center;font-size: 20rpx;">
							{{value.infopage}}页
						  </view>
						  <view style="font-size: 20rpx;  position: absolute;absolute;left: 0px;top: 100rpx;">{{pagefun(value.page)}}</view>
						  </view>
						  <view v-if="value.infopage != null" style="width: 0.5rpx;
						  font-family: 楷体;font-weight: bold;text-align: center;font-size: 25rpx;position: absolute;left: 0rpx;top: -8rpx;
						  ">
							{{value.sex|| '女'}}
						  </view>
						
						</view>
				 </view>
		  </view>
    </view>
  </view>
</template>

<script>

  export default {
    name: "Treelist",
      props: {
      	datalist: {
      		type: Object,
      		default: null
      	},

      },
    data() {
      return {

      }
    },

    computed: {
      listyufun(){
        return(e)=>{
          if(e){
            console.log(e)
            console.log(e.length)
            return e;
          }
        }
      },
	  daijifun(){
	    return (e) => {
	      return this.shuzifun((e));
	    };
	  },
      leftStyle() {
        return (k,index,value) => {
          let zuobiao = k;
          let zuobiao1 = 0;
          if(zuobiao >= 270 ){
            zuobiao1 = (zuobiao%270)+30;
          }else{
             zuobiao1 = zuobiao;
          }
		  
		  zuobiao1 = (zuobiao1*1.7)
          return { left: zuobiao1 + 'rpx' };
        };
      },
      pagefun(){
        return(e)=>{
          if(e){
            return '转'+e+'页';
          }
        }
      }
    },
    inject:[],
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

    }
  }
</script>

<style lang="scss" scoped>

  .dingwei{
    position: relative;
  }


  .shuxian{
    padding: 0rpx;
    flex-grow: 1;
    width: 0rpx;
    height: 10rpx;
    border-left:  3rpx solid #1890ff;
    position: relative;
    left: 5rpx;
    top:  0rpx;
  }

  .xaixian{
    padding: 0rpx;
    flex-grow: 1;
    width: 0rpx;
    height: 15rpx;
    border-left:  3rpx solid #1890ff;
    position: relative;
    left: 20rpx;
    top:  5rpx;
  }

  .daiji{
    width:20px;
    font-family: 楷体;
    font-weight: bold;
    text-align: center;
    color: white;
    background-color: black;
    border-radius: 15rpx;
    padding-top: 5rpx;
  }

</style>
