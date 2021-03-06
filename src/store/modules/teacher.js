import { weChatOauth, saveUserOrUpdate } from "@/api/getData";

// 创建or更新用户
// http://www.bluefing.com/jsb-api/v1/common/user/saveUserOrUpdate
const state = {

}

const actions = {
  async weChatOauth({ commit }, params) {
    try {
      const res = await weChatOauth(params);
      const { token } = res.data;
      localStorage.setItem('token', token)
    } catch (err) {
      console.log(err.message)
    }
  },

  async saveUserOrUpdate({commit}, params){
    try {
      const res = await saveUserOrUpdate(params);
      params.cb && params.cb();
    } catch (err) {
      params.err && params.err();
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
}
