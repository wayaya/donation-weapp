<!--suppress HtmlUnknownTag, HtmlUnknownAttribute, EqualityComparisonWithCoercionJS -->
<template>
  <view>
    <scroll-view scroll-x="true" style="width: 100%" class="_scroll-view">
      <view class='log'>
        <view v-for="(item,index) in titleArray" :data-index="item.index" :key="title"
              :class="index==currentTab ? 'pad_width selected':'pad_width'" @click='switchNav'>
          {{item.name}}
        </view>
      </view>
    </scroll-view>

    <scroll-view :current='currentTab' @change='bindChange' scroll-x="true" style="width: 100%" class="_scroll-view">
      <view class="_ul table_component">
        <view class="_li ">
          <view class="_ul table_header">
            <view :key="index" v-for="(item,index) in headerArray" class="_li">
              {{item}}
            </view>
          </view>
        </view>
        <view :key="col" class="_ul content_col" v-for="(col,index) in itemArray">
          <view :key="i" v-for="(item,i) in col.data" class="_li ">
            {{item}}
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script>
  export default {
    // 属性参数
    props: {
      tabArray: {
        type: Array,
        value: ''
      },
      headerArray: {
        type: Array,
        value: ''
      },
      itemArray: {
        type: Array,
        value: ''
      },
    },

    // 初始化数据
    data() {
      return {
        currentTab: 0,
        titleArray: [
          {
            name: '个人捐赠',
            index: 0
          },
          {
            name: '机构捐赠',
            index: 1
          },
        ],
      }
    },

    // 组件方法
    methods: {
      switchNav: function (e) {
        let that = this;
        let index = e.target.dataset.index;
        that.currentTab = index;
      },
      bindChange: function (e) {
        let that = this;
        that.setData({
          currentTab: e.detail.current
        });
      },
    },
    computed: {}
  };
</script>

<!--suppress CssInvalidPropertyValue, CssUnusedSymbol -->
<style scoped>
  ._ul.table_component {
    overflow-y: hidden;
  }

  ._ul.table_component ._ul.table_header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 76rpx;
  }

  ._ul.table_component ._ul.table_header > ._li {
    border-top: 1rpx solid #ddd;
    border-bottom: 1rpx solid #ddd;
    height: 76rpx;
    line-height: 76rpx;
    width: 200rpx;
    flex-shrink: 0;
    color: #999;
    font-size: 26rpx;
    text-align: left;
  }

  ._ul.table_component ._ul.content_col {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 80rpx;
    border-bottom: 1rpx solid #ddd;
  }

  ._ul.table_component ._ul.content_col > ._li {
    border-bottom: 1rpx solid #ddd;
    height: 80rpx;
    line-height: 80rpx;
    width: 160rpx;
    padding-left: 40rpx;
    flex-shrink: 0;
    font-size: 28rpx;
    color: #3a3a3a;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  ._ul.table_component ._ul.content_col > ._li:first-child {
    padding-left: 0;
  }

  .log {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 32rpx;
  }

  .pad_width {
    padding: 24rpx;
    position: relative;
  }

  .selected {
    color: #35cf82;
  }

  .selected:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 36%;
    height: 6rpx;
    background-color: #35cf82;
    transform: translateX(-50%);
  }
</style>
