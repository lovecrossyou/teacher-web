import { weChatOauth, saveUserOrUpdate } from "@/api/getData";


const state = {
  token:null
}

const actions = {
  async weChatOauth({ commit }, params) {
    try {
      const res = await weChatOauth(params);
      const { token } = res.data;
      if (token && token.length != 0) {
        localStorage.setItem('token', token)
      }
    } catch (err) {
      console.log(err.message)
    }
  },


}

export default {
  namespaced: true,
  state,
  actions,
}
