<template>
  <view>
    <view v-for="(item,index) in datalist" :key="index" style="width: 650rpx;">
      <view style="border: 1px solid #000;width: 550rpx;">
		 
		 <view class="" style="display: flex;width: 100%;">
		 	<view class="" style="width: 10%;">
		 		第{{daijifun(item)}}代
		 	</view>
			<view class="" style="display: flex;flex-direction: column;width: 35%;font-size: 25rpx;font-weight: bold;">
				<view class="">
				姓名: {{'' + item.name || ''}}	
				</view>
				<view class="">
				别名：{{contentfun(item,1)}}
				</view>
				<view class="">
				字号：{{contentfun(item,2)}}
				</view>
				<view class="">
				字辈：{{contentfun(item,3)}}
				</view>
			</view>
			<view class="" style="display: flex;flex-direction: column;width: 35%;font-size: 25rpx;font-weight: bold;">
				<view class="">
				性别:	{{contentfun(item,4)}}
				</view>
				<view class="">
				状态：	{{contentfun(item,5)}}
				</view>
				<view class="">
				学历： {{contentfun(item,6)}}
				</view>
				<view class="">
				职业：{{contentfun(item,7)}}
				</view>
			</view>
			<view class="" style="width: 120rpx; height: 120rpx;">
				<view class="">
					<image :src="contentfun(item,8)" style="width: 120rpx; height: 120rpx;border-radius: 15rpx;" mode=""></image>
				</view>
			</view>
		 </view> 
		 
		 <view class="" style="display: flex;width: 100%;margin-top: 15rpx;">
			<view class="" style="display: flex;font-size: 25rpx;font-weight: bold;">
				配偶名称:		
			</view>
			<view class="" style="display: flex;font-size: 25rpx;font-weight: bold;">
				{{contentfun(item,10)}}
			</view>
		 </view>
		  <view class="" style="display: flex;width: 100%;margin-top: 15rpx;">
				<view class="" style="display: flex;font-size: 25rpx;font-weight: bold;">
					孩子名称:		
				</view>
				<view class="" style="display: flex;font-size: 25rpx;font-weight: bold;">
					{{contentfun(item,11)}}
				</view>
		  </view>
		   <view class="" style="display: flex;width: 100%;margin-top: 15rpx;">
				<view class="" style="display: flex;font-size: 25rpx;font-weight: bold;">
					个人简介:		
				</view>
				<view class="" style="display: flex;font-size: 25rpx;font-weight: bold;">
					{{contentfun(item,14)}}
				</view>
		   </view> 
		   <view class="" style="display: flex;width: 100%;margin-top: 15rpx;">
				<view class="" style="display: flex;font-size: 25rpx;font-weight: bold;">
					生平事迹:		
				</view>
				<view class="" style="display: flex;font-size: 25rpx;font-weight: bold;">
					{{contentfun(item,15)}}
				</view>
		   </view> 
         
		 
		 
      </view>
    </view>
  </view>
</template>

<script>

  export default {
    name: "infolist",
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
		//计算塔式家谱详情
		contentfun(){
			return (e,a) => {
				console.log('【】',e,a)
				 if(e.data){
					return this.zhangfu(e.data,a); 
				 }else{
					return this.peioufun(e,a); 
				 }
			}
		},
		daijifun(){
		  return (e) => {
			  // console.log("e：",e)
			  if(e.data){
				 return this.shuzifun(e.data.level); 
			  }else{
				 return this.shuzifun(e.level); 
			  }
		    
		  };
		},
        // //计算代际
        // daijifun() {
        //   return (e) => {
        //     if(e.page){
        //       return '第'+e.lveing+'代';
        //     }else{
        //       return  '配偶';
        //     }
        //   };
        // },
        namefun() {
          return (e) => {
            if(e.page){
              return e.name;
            }else{
              return  e.name;
            }
          };
        },
        infofun(){
          return (e) => {
            if(e.page){

              return e.page+'页';
            }else{
              let str = '';
              return  e.name;
            }
          };
        },
        zhuanpage(){
          return (e) => {
            if(e.page){
              return '转'+e.page+'页';
            }else{
              return;
            }
          };
        },
        // contentfun(){
        //   return (e) => {
        //     if(e.page){
        //       return ;
        //     }else{
        //       return;
        //     }
        //   };
        // }
    },
    inject:[],
    methods: {
		//丈夫数据
		zhangfu(e,a){
			let str = '';
			console.log(e)
			console.log("a",a)
			if(a == 1){
				//别名
				if(e.zpFamilyPeople.familyName){
					str=str+e.zpFamilyPeople.familyName;
				}
				return str;
			}
			
			if(a == 2){
				if(e.zpFamilyPeople.nickName){
					str=str+e.zpFamilyPeople.nickName;
				}
				return str;
			}
			
			if(a == 3){
				if(e.zpFamilyPeople.familyGenealogyId){
					str=str+e.zpFamilyPeople.familyGenealogyId;
				}
				return str;
			}
			
			if(a == 4){
				if(e.sex == 1){
					str=str+'男 '
				}else{
					str=str+'女 '
				}
				return str;
			}
			
			if(a == 5){
				// if(e.zpFamilyPeople.familyGenealogyId){
				// 	str=str+''+e.zpFamilyPeople.familyGenealogyId + ' ';
				// }
				// return str;
				
				if(e.zpFamilyPeople.alive == 1){
					str=str+'去世'
				}else{
					str=str+'在世 '
				}
				return str;
			}
			
			
			if(a == 6){
				if(e.zpFamilyPeople.achievement){
					str=str+e.zpFamilyPeople.achievement + ' ';
				}
				return str;
			}
			
			if(a == 7){
				if(e.zpFamilyPeople.occupation){
					str=str+e.zpFamilyPeople.occupation + ' ';
				}
				return str;
			}
			
			if(a == 8){
				if(e.photo){
					return e.photo;
				}
				return str;
			}
			
			if(a == 10){
				if(e.peiouList){
					let peiou = e.peiouList;
					let peiname = '';
					for(var p = 0;  p < peiou.length;p++ ){
						peiname = peiname + peiou[p].name + ' '
					}
					
					str=str+peiname;
				}
			}
			
			if(a == 11){
				if(e.zpFamilyTreeVoList){
					let peious = e.zpFamilyTreeVoList;
					let peiname = '';
					for(var p = 0;  p < peious.length;p++ ){
						peiname = peiname + peious[p].name + ' '
					}
					
					str=str+peiname;
				}
			}
			
			
			if(a == 14){
				if(e.zpFamilyPeople.content){
					str=str+e.zpFamilyPeople.content + ' ';
				}
				return str;
			}
			
			
			if(a == 15){
				if(e.zpFamilyPeople.deeds){
					str=str+e.zpFamilyPeople.deeds + ' ';
				}
				return str;
			}
			
			
		
			
		// 	if(e.zpFamilyPeople.birthday){
		// 		str=str+'生日:'+e.zpFamilyPeople.birthday + ' ';
		// 	}
		// 	if(e.zpFamilyPeople.birthplace){
		// 		str=str+'籍贯:'+e.zpFamilyPeople.birthplace + ' ';
		// 	}
		// 	if(e.zpFamilyPeople.deathday){
		// 		str=str+'殁于:'+e.zpFamilyPeople.deathday + ' ';
		// 	}
		// 	if(e.zpFamilyPeople.sleepPlace){
		// 		str=str+'葬于:'+e.zpFamilyPeople.sleepPlace + ' ';
		// 	}
		// 	if(e.zpFamilyPeople.age){
		// 		str=str+'享年:'+e.zpFamilyPeople.age + ' ';
		// 	}
			
		
		// 	//父母
		// 	if(e.fumuname){
		// 		str=str+'父母:'+e.fumuname + ' ';
		// 	}
			
			
			
			
			
		// 	if(e.peiouList){
		// 		let peiou = e.peiouList;
		// 		let peiname = '';
		// 		for(var p = 0;  p < peiou.length;p++ ){
		// 			peiname = peiname + peiou[p].name + ' '
		// 		}
				
		// 		str=str+'配偶:'+peiname + ' ';
		// 	}
			
		// 	if(e.haiziList){
		// 		let peious = e.haiziList;
		// 		let peiname = '';
		// 		for(var p = 0;  p < peious.length;p++ ){
		// 			peiname = peiname + peious[p].name + ' '
		// 		}
				
		// 		str=str+'子女:'+peiname + ' ';
		// 	}
			
		
			return str;
		},
		peioufun(e,a){
			let str = '';
			
			if(a == 1){
				//别名
				if(e.zpFamilyPeople.familyName){
					str=str+e.zpFamilyPeople.familyName+ ' ';
				}
				return str;
			}
			
			if(a == 2){
				if(e.zpFamilyPeople.nickName){
					str=str+e.zpFamilyPeople.nickName + ' ';
				}
				return str;
			}
			
			if(a == 3){
				if(e.zpFamilyPeople.familyGenealogyId){
					str=str+e.zpFamilyPeople.familyGenealogyId + ' ';
				}
				return str;
			}
			
			if(a == 4){
				if(e.sex == 1){
					str=str+'男 '
				}else{
					str=str+'女 '
				}
				return str;
			}
			
			if(a == 5){
				if(e.zpFamilyPeople.alive == 1){
					str=str+'去世'
				}else{
					str=str+'在世 '
				}
				return str;
			}
			
			
			if(a == 6){
				if(e.zpFamilyPeople.achievement){
					str=str+e.zpFamilyPeople.achievement + ' ';
				}
				return str;
			}
			
			if(a == 7){
				if(e.zpFamilyPeople.occupation){
					str=str+e.zpFamilyPeople.occupation + ' ';
				}
				return str;
			}
			
			if(a == 8){
				if(e.photo){
					return e.photo;
				}
				return str;
			}
			
			
			
			if(a == 14){
				if(e.zpFamilyPeople.content){
					str=str+e.zpFamilyPeople.content + ' ';
				}
				return str;
			}
			
			
			if(a == 15){
				if(e.zpFamilyPeople.deeds){
					str=str+e.zpFamilyPeople.deeds + ' ';
				}
				return str;
			}
			
					
			return str;
		},
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
    padding: 0px;
    flex-grow: 1;
    width: 0px;
    height: 10rpx;
    border-left:  3rpx solid #1890ff;
    position: relative;
    left: 5rpx;
    top:  0px;
  }

  .xaixian{
    padding: 0px;
    flex-grow: 1;
    width: 0px;
    height: 15rpx;
    border-left:  3rpx solid #1890ff;
    position: relative;
    left: 20rpx;
    top:  5rpx;
  }

  .daiji{
    width:20rpx;
    font-family: 楷体;
    font-weight: bold;
    text-align: center;
    color: white;
    background-color: black;
    border-radius: 15rpx;
    padding-top: 5rpx;
  }

</style>
