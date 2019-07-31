import Vue from 'vue'
import Vuex from 'vuex'
import { getAdminInfo } from '@/api/getData'


Vue.use(Vuex)

const state = {
        lottery: {
                home_team: "",
                guest_team: "",
                game_type: "",
                game_result: "",
                picture_bifa: "",
                picture_jc: "",
                picture_renqi: "",
                picture_pankou_zhuke: "",
                picture_pankou_shengjiang: "",
                picture_peilv: "",
                picture_gailv_zhuan: "",
                picture_peifu_control: "",
                picture_10: "",
                picture_10_duike: "",
                picture_taidu: ""
        }
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
        modules: {},
        state,
        actions,
        mutations,
})
