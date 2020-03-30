/*
Copyright ArxanChain Ltd. 2020 All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

// noinspection NpmUsedModulesInstalled
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import settings from './modules/settings'

Vue.use(Vuex); // 启用插件

const store = new Vuex.Store({
  // 模块
  modules: {
    settings
  },
  // 获取
  getters
});

export default store;
