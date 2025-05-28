<template>
  <view style="display: flex;flex-direction:column; flex-wrap:wrap;height: 850rpx;width: 500rpx;border: 2px solid #000;border-radius: 15rpx;">
    <view v-for="(item,index) in datalist" :key="index" style="width: 250rpx;padding: 10rpx;">

        <view style="width: 50%;" v-if="item.page != null">
          <view style="display: flex;justify-content: space-between;font-size: 20rpx;">
            <view>{{item.name}}</view>
            <view>{{item.page}}页</view>
          </view>
        </view>
        <view style="width: 50%;" v-else>
          <view style="display: flex;justify-content: center;align-items: center;">
            <view style="background-color: #000; border-radius: 15rpx; color: #fff;width: 100rpx;height: 30rpx;display: flex;justify-content: center;align-items: center;">
              <view style="font-size: 20rpx;text-align: center;padding: 5rpx;">第{{item.name}}代</view>
            </view>
          </view>

        </view>

    </view>
  </view>
</template>

<script>
  export default {
    name: "Mululist",
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

    },
    methods: {

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
    height: 10px;
    border-left:  3px solid #1890ff;
    position: relative;
    left: 5px;
    top:  0px;
  }
  .xaixian{
    padding: 0px;
    flex-grow: 1;
    width: 0px;
    height: 15px;
    border-left:  3px solid #1890ff;
    position: relative;
    left: 20px;
    top:  5px;
  }
  .daiji{
    width:20px;
    font-family: 楷体;
    font-weight: bold;
    text-align: center;
    color: white;
    background-color: black;
    border-radius: 15px;
    padding-top: 5px;
  }
</style>
