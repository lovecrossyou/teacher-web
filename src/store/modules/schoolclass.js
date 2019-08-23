import { saveClass, subjectList, listClass } from "@/api/getData";
import { list } from "postcss";

const state = {
  subjectData: [],
  classList:[]
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

  async subjectList({ commit, state }, data) {
    try {
      const res = await subjectList();
      state.subjectData = res.data;
    } catch (err) {

    }
  },
  //
  async list({ commit, state }) {
    try {
      const res = await listClass();
      state.classList = res.data;
    } catch (err) {

    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
}
