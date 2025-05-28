<template>
  <view>
    <view v-for="(item,index) in datalist" :key="index" style="width: 650rpx;">
      <view style="border: 1px solid #000;display: flex;width: 550rpx;">
          <!-- <view  style="width: 10%;font-size: 10px;text-align: center;"></view> -->
          <view style="width: 12%;font-size: 20rpx;
		  border-left: 1px solid #000; 
		  border-right: 1rpx solid #000;
		  display: flex;
		 justify-content: center;
		  flex-direction: column;">
			<view class="" style="font-weight: bold;">
				  {{namefun(item) || ''}}
			</view>
			<view>
				{{daijifun(item) || ''}}
			</view>
			<view>
				{{zhuanpage(item) || ''}}
			</view>
		  </view>
          <view style="width: 88%;font-size: 20rpx;
          font-family: 楷体;
          font-weight: bold;">{{contentfun(item)}}</view>
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
			return (e) => {
				console.log('【】',e)
				 if(e.data){
					return this.zhangfu(e.data); 
				 }else{
					return this.peioufun(e); 
				 }
			}
		},
        //计算代际
        daijifun() {
          return (e) => {
			 
            if(e.data){
				
			let daiji = this.shuzifun(e.lveing);
              return '第'+daiji+'代';
            }else{
              return  '配偶';
            }
          };
        },
        namefun() {
          return (e) => {
			   return e.name;
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
        }
    },
    inject:[],
    methods: {
		//丈夫数据
		zhangfu(e){
			let str = '';
			console.log(e)
			//别名
			if(e.zpFamilyPeople.familyName){
				str=str+'别名:'+e.zpFamilyPeople.familyName+ ' ';
			}
			if(e.zpFamilyPeople.nickName){
				str=str+'字号:'+e.zpFamilyPeople.nickName + ' ';
			}
			if(e.sex == 1){
				str=str+'性别:男 '
			}else{
				str=str+'性别:女 '
			}
			if(e.zpFamilyPeople.familyGenealogyId){
				str=str+'字辈:'+e.zpFamilyPeople.familyGenealogyId + ' ';
			}
			if(e.zpFamilyPeople.birthday){
				str=str+'生日:'+e.zpFamilyPeople.birthday + ' ';
			}
			if(e.zpFamilyPeople.birthplace){
				str=str+'籍贯:'+e.zpFamilyPeople.birthplace + ' ';
			}
			if(e.zpFamilyPeople.deathday){
				str=str+'殁于:'+e.zpFamilyPeople.deathday + ' ';
			}
			if(e.zpFamilyPeople.sleepPlace){
				str=str+'葬于:'+e.zpFamilyPeople.sleepPlace + ' ';
			}
			if(e.zpFamilyPeople.age){
				str=str+'享年:'+e.zpFamilyPeople.age + ' ';
			}
			
		
			//父母
			if(e.fumuname){
				str=str+'父母:'+e.fumuname + ' ';
			}
			
			if(e.zpFamilyPeople.achievement){
				str=str+'学历:'+e.zpFamilyPeople.achievement + ' ';
			}
			
			if(e.zpFamilyPeople.occupation){
				str=str+'职业:'+e.zpFamilyPeople.occupation + ' ';
			}
			
			if(e.peiouList){
				let peiou = e.peiouList;
				let peiname = '';
				for(var p = 0;  p < peiou.length;p++ ){
					peiname = peiname + peiou[p].name + ' '
				}
				
				str=str+'配偶:'+peiname + ' ';
			}
			
			if(e.haiziList){
				let peious = e.haiziList;
				let peiname = '';
				for(var p = 0;  p < peious.length;p++ ){
					peiname = peiname + peious[p].name + ' '
				}
				
				str=str+'子女:'+peiname + ' ';
			}
			
		
			return str;
		},
		peioufun(e){
			let str = '';
			console.log(e)
			//别名
			if(e.zpFamilyPeople.familyName){
				str=str+'别名:'+e.zpFamilyPeople.familyName+ ' ';
			}
			if(e.zpFamilyPeople.nickName){
				str=str+'字号:'+e.zpFamilyPeople.nickName + ' ';
			}
			if(e.sex == 1){
				str=str+'性别:男 '
			}else{
				str=str+'性别:女 '
			}
			if(e.zpFamilyPeople.familyGenealogyId){
				str=str+'字辈:'+e.zpFamilyPeople.familyGenealogyId + ' ';
			}
			if(e.zpFamilyPeople.birthday){
				str=str+'生日:'+e.zpFamilyPeople.birthday + ' ';
			}
			if(e.zpFamilyPeople.birthplace){
				str=str+'籍贯:'+e.zpFamilyPeople.birthplace + ' ';
			}
			if(e.zpFamilyPeople.deathday){
				str=str+'殁于:'+e.zpFamilyPeople.deathday + ' ';
			}
			if(e.zpFamilyPeople.sleepPlace){
				str=str+'葬于:'+e.zpFamilyPeople.sleepPlace + ' ';
			}
			if(e.zpFamilyPeople.age){
				str=str+'享年:'+e.zpFamilyPeople.age + ' ';
			}
			
					
			//父母
			if(e.fumuname){
				str=str+'父母:'+e.fumuname + ' ';
			}
			
			if(e.zpFamilyPeople.achievement){
				str=str+'学历:'+e.zpFamilyPeople.achievement + ' ';
			}
			
			if(e.zpFamilyPeople.occupation){
				str=str+'职业:'+e.zpFamilyPeople.occupation + ' ';
			}
			
			if(e.peiouList){
				let peiou = e.peiouList;
				let peiname = '';
				for(var p = 0;  p < peiou.length;p++ ){
					peiname = peiname + peiou[p].name + ' '
				}
				
				str=str+'配偶:'+peiname + ' ';
			}
			
			if(e.haiziList){
				let peious = e.haiziList;
				let peiname = '';
				for(var p = 0;  p < peious.length;p++ ){
					peiname = peiname + peious[p].name + ' '
				}
				
				str=str+'子女:'+peiname + ' ';
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
