/*
Copyright ArxanChain Ltd. 2020 All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

const state = {
  isIphoneX: false // 判断苹果机型
};

const mutations = {
  GET_SYSTEMINFO_SUCCESS: (state, isIphoneX) => {
    state.isIphoneX = isIphoneX
  }
};

const actions = {
  getSystemInfo({commit, state}) {
    return new Promise((resolve, reject) => {
      // 获取设备信息
      wx.getSystemInfo({
        success(res) {
          const isIphoneX = res.model.includes('iPhone X');
          commit('GET_SYSTEMINFO_SUCCESS', isIphoneX);
          resolve(isIphoneX);
        },
        fail(err) {
          reject(err);
        }
      })
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
