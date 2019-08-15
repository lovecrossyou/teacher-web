<template>
  <div class="main">
    <TopNav title="创建新班级"></TopNav>
    <div style="padding: 10px;box-sizing: border-box;">
      <el-form label-position="left" label-width="40%" :model="formLabelAlign">
        <el-form-item label="*所在城市">
          <el-cascader
            size="large"
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>

        <el-form-item label="*学校名称：">
          <el-input v-model="formLabelAlign.name" placeholder="请输入学校名称"></el-input>
        </el-form-item>
        <el-form-item label="*班级名称：">
          <el-input v-model="formLabelAlign.region" placeholder="请输入班级名称"></el-input>
        </el-form-item>

        <el-form-item label="班级描述："></el-form-item>
        <el-input
          type="textarea"
          :rows="4"
          maxlength="250"
          placeholder="请输入内容"
          show-word-limit
          v-model="textarea"
        ></el-input>
      </el-form>
    </div>

    <!-- 填写教师信息  教师名单上传 -->
    <div class="teacher-wrapper">
      <div class="teacher-item" @click="goTeacher">填写教师信息</div>
      <div class="teacher-item">教师名单上传</div>
      <div class="teacher-item">教师名单上传</div>
    </div>

    <div class="btn" @click="createClass">创建班级</div>
  </div>
</template>

<script>
import { regionData } from "element-china-area-data";
import {weChatOauth} from "@/api/getData";
import TopNav from "@/components/top-nav.vue";
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      textarea: "",
      options: regionData,
      selectedOptions: [],
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  },
  components: {
    TopNav
  },
  mounted(){
    const params = {
        code:'',
        wechatType:0
      }
    this.weChatOauth(params);
  },
  methods: {
    ...mapActions('login',['weChatOauth']),
    goTeacher() {
      this.$router.push("/teacher-info");
    },
    handleChange(value) {},
    createClass() {
      this.$router.push("/class-mgr");
    }
  }
};
</script>

<style scoped>
.teacher-wrapper {
  height: 105px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.teacher-item {
  width: 50px;
  background-color: #005834;
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  word-wrap: wrap;
  padding: 10px 5px;
}

.btn {
  width: 60%;
  height: 43px;
  background: rgba(0, 87, 55, 1);
  border-radius: 4px;
  color: #ffffff;
  line-height: 43px;
  text-align: center;
  margin: 40px auto;
}
</style>