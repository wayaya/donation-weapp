<!--suppress HtmlDeprecatedTag, CheckTagEmptyBody, HtmlUnknownAttribute -->
<template>
  <view @click="routerUrl" class="_content">
    <view class='title_style'>{{pTitle}}</view>
    <image class='title_img' src="/static/icons/arrow-right-active.png"></image>
  </view>
</template>

<script>
  export default {
    // 组件属性
    props: {
      routerArray: {
        type: Array,
        default: ''
      },
      tabArray: {
        type: Array,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      headerArray: {
        type: Array,
        default: ''
      },
      itemArray: {
        type: Array,
        default: ''
      },
    },
    // 数据
    data() {
      return {
        pTitle: this.title || '', // 初始化属性
        thisData: {}
      };
    },
    // 方法列表
    methods: {
      // 路由函数
      routerUrl() {
        let that = this;

        console.log(that);
        console.log("routerArray:", that.routerArray);
        console.log("title:", that.title);

        // 找到匹配的数据
        let thisData = that.routerArray.find((ele, index) => {
          return ele.title === that.pTitle;
        });
        that.thisData = thisData;

        // 页面跳转
        let itemArray = JSON.stringify(that.itemArray); // 跳转传递数据参数
        wx.navigateTo({
          url: thisData.url + '?&headerArray=' + that.headerArray + '&itemArray=' + itemArray
        });
      },
    },
  }
</script>

<!--suppress CssInvalidPropertyValue -->
<style scoped>
  ._content {
    width: 95%;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    margin: 40rpx 0;
  }

  .title_img {
    width: 36rpx;
    height: 34rpx;
    margin-top: 8rpx;
  }

  .title_style {
    color: #717171;
    font-size: 30rpx;
  }
</style>
