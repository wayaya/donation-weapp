<!--suppress HtmlUnknownTag, EqualityComparisonWithCoercionJS, HtmlUnknownTarget, HtmlUnknownAttribute -->
<template>
  <div class="tabbar-wrap" :class="isIphoneX? 'isIphoneX':''">
    <ul class="tabbar">
      <li class="tabbar-item" v-for="(item, index) in navList"
          :key="index"
          @click="selectNavItem(index, item.pagePath)"
      >
        <block v-if="index === 1">
          <div class="tabbar-icon tabbar-icon-center">
            <button class=".btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">
             <img
               alt="tabbar-icon"
               :src="selectNavIndex == index? item.selectedIconPath : item.iconPath"
             >
            </button>
          </div>
        </block>
        <block v-else>
          <div class="tabbar-icon">
            <img
              alt="tabbar-icon"
              :src="selectNavIndex == index? item.selectedIconPath : item.iconPath"
            >
          </div>
          <div class="tabbar-text" :class="selectNavIndex == index? 'active':''">
            {{item.text}}
          </div>
        </block>
      </li>
    </ul>
  </div>




</template>

<script>
  export default {
    props: ['selectNavIndex'],
    data() {
      return {
        color: '#CCCCCC',
        selectedColor: '#35CF82',
        navList: [
          {
            'text': '首页',
            'pagePath': '/pages/home/main',
            'iconPath': '/static/tabs/home.png',
            'selectedIconPath': '/static/tabs/home-active.png'
          }, {
            'text': '',
            'pagePath': '/pages/pub/main',
            'iconPath': '/static/tabs/center.png',
            'selectedIconPath': '/static/tabs/center.png'
          }, {
            'text': '我的',
            'pagePath': '/pages/mine/main',
            'iconPath': '/static/tabs/my.png',
            'selectedIconPath': '/static/tabs/my-active.png'
          }
        ]
      }
    },
    methods: {
      /**
       * 点击导航栏
       */
      selectNavItem(index, pagePath) {
        if (index === this.selectNavIndex) {
          return false
        }
        this.bindNavigateTo(pagePath)
      },

      /**
       * 路由跳转
       */
      bindNavigateTo(url) {
        wx.switchTab({
          url
        })
      },
      // 获取用户信息
      onGotUserInfo: function (e) {
        // console.log(e.mp.detail.errMsg);
        let userInfo = e.mp.detail.userInfo;
        console.log(e.mp.detail.userInfo);
        // console.log(e.mp.detail.rawData);

        // 在本地缓存用户信息
        wx.setStorage({
          key: 'userInfo',
          data: userInfo,
          success: function (res) {
            console.log('异步保存成功')
          }
        });
        wx.setStorageSync('userInfo', userInfo);
        console.log('同步保存成功');
      }
    },
    computed: {
      isIphoneX() {
        return this.$store.getters.isIphoneX
      }
    }
  }
</script>

<!--suppress CssInvalidPropertyValue, CssUnknownTarget -->
<style lang="scss">
  @import "@/style/common.scss";

  .tabbar-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    height: $tabbar-height;
    width: 100%;
    background: $tabbar-background-color;
    box-shadow: 0px -1px 6px 1px rgba(204, 204, 204, 0.2);

    &.isIphoneX {
      padding-bottom: $is-phonx-bottom;
    }

    .tabbar {
      display: flex;
      flex: 1;
      height: $tabbar-height;
      width: 100%;

      .tabbar-item {
        display: flex;
        flex: 1;
        height: $tabbar-height;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .tabbar-icon {
          height: $icon-height-54;

          img {
            width: $icon-height-54;
            height: $icon-height-54;
          }
        }

        .tabbar-icon-center {
          height: $tabbar-height;

          img {
            width: $tabbar-height;
            height: $tabbar-height;
          }
        }

        .tabbar-text {
          text-align: center;
          color: $default-text-color;
          font-size: $font-size-20;

          &.active {
            color: $active-text-color;
          }
        }
      }
    }
  }

  .btn {
    border: none;
    background: none;
    width: 96rpx;
    height: 96rpx;
  }

  .btn::after {
    /*border: none;*/
    /*width: 20rpx;*/
    /*height: 20rpx;*/
  }
</style>
