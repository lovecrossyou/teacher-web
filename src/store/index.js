import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import teacher from './modules/teacher'
import schoolclass from './modules/schoolclass'

Vue.use(Vuex)

const state = {
}

const mutations = {
        savelottery(state, lottery) {
                state.lottery = lottery;
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
        actions,
        mutations,
})
