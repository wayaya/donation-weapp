<!--suppress CheckTagEmptyBody, HtmlUnknownAttribute, HtmlUnknownTag, HtmlDeprecatedTag -->
<template>
  <view class="content">
    <!-- banner -->
    <view @click="tabBanner" :data-eventid="0">
      <image src="/static/images/zx_banner1.png" alt class="_img"></image>
    </view>

    <!-- 公益机构   -->
    <view class="organization-container">
      <title-context :routerArray="routerArray" title='公益机构'></title-context>
      <scroll-view scroll-x="true">
        <view class="public-container">
          <view class="public-content" v-for="(item,index) in organizationList" :key="index">
            <view>
              <view class="public-logo">
                <image :src="item.logo" class="puplic_img"></image>
              </view>
              <view class="public-title">
                {{item.title}}
              </view>
              <view class="public-sub-title"> {{item.status}}</view>
              <view class="public-desc-info">
                <label class="public_span">{{item.grant_count}}笔物资</label>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 获取用户头像与昵称  -->
    <button style="display:none;" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>

    <space :height="'16'"/>

    <!-- 捐赠者/机构公示 -->
    <view class="promulgate-container">
      <title-context :headerArray='headers' :itemArray='content' :routerArray="routerArray"
                     title='捐赠者/机构公示'></title-context>
      <donor-body :headerArray='headers' :itemArray='content'></donor-body>
    </view>

    <!-- 捐赠者/机构公示   -->
    <div class="promulgate-container" style="display: none;">
      <van-cell title="捐赠者/机构公示" size="large" is-link link-type="navigateTo" url="/pages/promulgateList/main"/>
      <van-tabs :active="avtiveTab" @change="tabChangeHanlder" line-width="28" color="#35CF82">
        <van-tab title="个人捐赠"/>
        <van-tab title="机构捐赠"/>
      </van-tabs>
      <scroll-view scroll-x="true" style="width: 100%">
        <table-component :headers='headers'
                         :content='content'
                         :onRowClick='onRowClickHandle'/>

      </scroll-view>
    </div>
    <!--    <tab-bar :selectNavIndex="0"></tab-bar>-->
  </view>
</template>
<!--suppress NpmUsedModulesInstalled -->
<script>
  import organCard from '@/components/card/organCard';
  import space from '@/components/space/space';
  import table from '@/components/table/table';
  import tabBar from '@/components/tabbar/tabBar';
  import titleContext from '@/components/title/title';
  import donors from '@/components/donors/donors';

  export default {
    components: {
      organCard,
      space,
      'table-component': table,
      tabBar,
      'title-context': titleContext,
      'donor-body': donors
    },
    data() {
      return {
        routerArray: [
          {
            title: '公益机构',
            url: '/pages/organizationList/main',
          }, {
            title: '捐赠者/机构公示',
            url: '/pages/promulgateList/main',
          },
        ],
        avtiveTab: 0,
        organizationList: [
          {
            logo: '/static/images/img1.png',
            title: '武汉红十字会',
            grant_count: 12322,
            status: '已分发',
          },
          {
            logo: '/static/images/yi.png',
            title: '壹基金',
            grant_count: 12322,
            status: '未分发',
          },
          {
            logo: '/static/images/hanhong.png',
            title: '韩红基金',
            grant_count: 12322,
            status: '已分发',
          },
          {
            logo: '/static/images/shuidi.png',
            title: '谁滴基金',
            grant_count: 12322,
            status: '已分发',
          },
          {
            logo: '/static/images/img1.png',
            title: '武汉红十字会',
            grant_count: 12322,
            status: '已分发',
          },
          {
            logo: '/static/images/img1.png',
            title: '武汉红十字会',
            grant_count: 12322,
            status: '已分发'
          }
        ],
        headers: ['捐赠者', '物资', '数量/金额', '受赠者', '公示时间'],
        content: [
          {
            id: 1,
            type: 2,
            data: ['1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20']
          },
          {
            id: 1,
            type: 2,
            data: ['1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20']
          },
          {
            id: 1,
            type: 2,
            data: ['1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20']
          },
          {
            id: 1,
            type: 2,
            data: ['1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20']
          },
          {
            id: 1,
            type: 2,
            data: ['1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20']
          },
          {
            id: 1,
            type: 2,
            data: ['1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20']
          },
          {
            id: 1,
            type: 2,
            data: ['1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20']
          }
        ]
      }
    },
    methods: {
      handleProxy() {
        console.log('handleProxy');
      },
      // banner图片跳转
      tabBanner() {
        console.log("tabBanner");
      },
      // 关于我们
      goAboutUsPage() {
        wx.navigateTo({
          url: '/pages/organList/main'
        })
      },
      tabChangeHanlder(e) {
        console.log(e);
        this.avtiveTab = e.target.index;
        console.log(this.avtiveTab)
      },
      onRowClickHandle(id, type) {
        console.log(id + ',' + type)
        // wx.navigateTo({
        //   url: '/pages/promulgateDetail/main'
        // })
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
    // 初始化页面
    created() {
      // console.log('page index created', this);
    },
    onLoad() {
      // console.log('page index onLoad', this);
    },
    onShow() {
      // console.log('onShow', this);
    },
    onReady() {
      // console.log('page index onReady', this);
    },
    mounted() {
      // console.log('mounted', this);
    },
    onUnload() {
      // console.log('onUnload', this);
    },
    onHide() {
      // console.log('onHide', this);
    }
  }
</script>

<!--suppress CssUnknownTarget, CssInvalidPropertyValue -->
<style lang="scss">
  @import "@/style/common.scss";

  .homel-container {
    background: #fff;

    .organization-container {
      margin-bottom: 20rpx;
      padding: 0 30rpx;
      box-sizing: border-box;
    }

    .organization-box {
      display: flex;
      flex-direction: row;
      padding: 10rpx 0 20rpx;

      .item {
        margin-right: 40rpx;
      }
    }

    .van-cell {
      line-height: 30rpx;
      font-size: 30rpx;
      color: #717171;
      padding: 30rpx 0rpx;

      &:after {
        border: none;
      }
    }

    .van-cell__left-icon-wrap, .van-cell__right-icon-wrap {
      height: 36rpx;
    }

    .van-hairline--top-bottom::after {
      border-top-width: 0;
      border-bottom-width: 1rpx;
      border-color: #ddd;
    }

    .promulgate-container {
      padding: 0 30rpx;
      box-sizing: border-box;
    }

    .van-tabs__line {
      height: 4px;
    }

    .van-tabs--line .van-tabs__wrap {
      height: 70rpx;
    }

    .van-tab {
      line-height: 70rpx;
      font-size: 30rpx;
      color: #666;
      font-weight: 500;
    }

    .van-tabs--line {
      padding-top: 70rpx;
    }

    .banner-con {
      width: 100%;

      img {
        width: 100%;
        height: 320rpx;
      }
    }
  }


</style>
<!--suppress CssUnusedSymbol, CssInvalidPropertyValue -->
<style>
  .homel-container .van-icon {
    color: #6299E6;
  }

  .content {
    background: #fff;
  }

  ._img {
    width: 100%;
    height: 320rpx;
  }

  .organization-container {
    margin-bottom: 20rpx;
    padding: 0 30rpx;
    box-sizing: border-box;
  }

  .promulgate-container {
    padding: 0 30rpx;
    box-sizing: border-box;
  }


  .public-container {
    display: flex;
    flex-direction: row;
    padding: 10rpx 0 20rpx;
    max-width: 190rpx;
  }

  .public-content {
    text-align: center;
    font-size: 28rpx;
    color: #3A3A3A;
    margin-right: 40rpx;
  }


  .public-logo {
    height: 70rpx;
  }

  .puplic_img {
    width: 70rpx;
    height: 70rpx;
  }

  .public-title {
    width: 100%;
    margin-top: 11rpx;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .public-sub-title {
    font-size: 24rpx;
    color: #ADADAD;
    font-weight: 400;
  }

  .public-desc-info {
    font-size: 24rpx;
    color: #333;
    font-weight: 500;
  }

  .public_span {
    color: #5790FF;
    white-space: nowrap;
  }
</style>
