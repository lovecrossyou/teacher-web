import { saveClass, subjectList } from "@/api/getData";

const state = {
  subjectData:[]
}

const actions = {
  async saveClass({ commit }, params) {
    try {
      const res = await saveClass(params);
      params.cb && params.cb();
    } catch (err) {
      params.err && params.err();
    }
  },

  async subjectList({commit, state},data){
    try {
      const res = await subjectList();
      state.subjectData = res.data;
    } catch (err) {
      
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
}
