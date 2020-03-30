/*
Copyright ArxanChain Ltd. 2020 All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

import Vue from 'vue';
import App from './App';
import store from './store/index';

Vue.config.productionTip = true;
App.mpType = 'app';

Vue.prototype.$store = store; // 直接总原型上赋值 状态管理对象
const app = new Vue(App); // 构造对象
app.$mount(); // 挂在
