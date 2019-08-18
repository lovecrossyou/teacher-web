import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import teacher from './modules/teacher'
import schoolclass from './modules/schoolclass'
const REDIRECT_URI = "http://www.baidu.com/authredirect#wechat_redirect";
const authUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx04ed87ff27f7385a&response_type=code&scope=snsapi_userinfo&state=STATE";
const redirectUrl = "&redirect_uri=" + REDIRECT_URI;

Vue.use(Vuex)

const state = {
        authUrl: authUrl + redirectUrl
}

const mutations = {
        savelottery(state, lottery) {
                state.lottery = lottery;
        }
}

const getters = {
        hasLogin: state => {
                const token = localStorage.getItem('token');
                return token && token != null;
        }
}

const actions = {
        async updatelottery({ commit }, params) {
                try {
                        const res = await updateLottery(params);
                } catch (err) {
                        // console.log(err.message)
                }
        }
}

export default new Vuex.Store({
        modules: { login, teacher, schoolclass },
        state,
        getters,
        actions,
        mutations,
})
