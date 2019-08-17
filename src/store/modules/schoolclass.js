import { saveClass, subjectList } from "@/api/getData";
// 班级列表
// /v1/wap/teacher/class/list
// 教师创建班级
// /v1/wap/teacher/class/saveClass
// 学科列表
// /v1/common/subject/list

const state = {
  subjectData:[]
}

const actions = {
  async saveClass({ commit }, params) {
    try {
      const res = await saveClass(params);
      const { token } = res.data;
    } catch (err) {
      console.log(err.message)
    }
  },

  async subjectList({commit, state},data){
    try {
      const res = await subjectList();
      state.subjectData = res.data;
    } catch (err) {
      console.log(err.message)
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
}
