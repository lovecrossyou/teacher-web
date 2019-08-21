<template>
  <div class="main">
    <TopNav title="创建新班级"></TopNav>
    <div style="padding: 10px;box-sizing: border-box;">
      <el-form label-position="left" label-width="40%" :model="formData">
        <el-form-item label="*所在城市">
          <el-cascader
            size="large"
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>

        <el-form-item label="*学校名称：">
          <el-input v-model="formData.schoolName" placeholder="请输入学校名称"></el-input>
        </el-form-item>
        <el-form-item label="*班级名称：">
          <el-input v-model="formData.className" placeholder="请输入班级名称"></el-input>
        </el-form-item>

        <el-form-item label="班级描述："></el-form-item>
        <el-input
          type="textarea"
          :rows="4"
          maxlength="250"
          placeholder="请输入内容"
          show-word-limit
          v-model="formData.summary"
        ></el-input>
      </el-form>
    </div>

    <!-- 填写教师信息  教师名单上传 -->
    <div class="teacher-wrapper">
      <div class="teacher-item" @click="goTeacher">填写教师信息</div>
      <div class="teacher-item">教师名单上传</div>
      <div class="teacher-item">教师名单上传</div>
    </div>

    <div class="footer">
      <el-button v-if="hasLogin" :loading="loading" class="btn-el" @click="createClass">创建班级(已登陆)</el-button>
      <a v-if="!hasLogin" class="btn" :href="authUrl">创建班级(已登陆)</a>
    </div>
  </div>
</template>

<script>
import { regionData } from "element-china-area-data";
import { weChatOauth } from "@/api/getData";
import TopNav from "@/components/top-nav.vue";
import { mapActions, mapState,mapGetters } from "vuex";

export default {
  data() {
    return {
      textarea: "",
      options: regionData,
      selectedOptions: [],
      formData: {
        schoolName: "",
        className: "",
        classCode: "",
        summary: ""
      },
      loading: false,
    };
  },
  components: {
    TopNav
  },
  computed: {
    ...mapState(["authUrl"]),
    ...mapGetters(["hasLogin"])
  },
  mounted() {
    const code = this.$route.query.code;
    const params = {
      code,
      wechatType: 0
    };
    this.weChatOauth(params);
  },
  methods: {
    ...mapActions("login", ["weChatOauth"]),
    ...mapActions("schoolclass", ["saveClass"]),
    goTeacher() {
      this.$router.push("/teacher-info");
    },
    handleChange(value) {},
    createClass() {
      console.log("formData ", this.formData);
      this.loading = true;
      this.formData.cb = () => {
        this.loading = false;
        this.$router.push("/class-mgr");
      };
      this.formData.err = () => {
        this.loading = false;
      };
      this.saveClass(this.formData);
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

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-bottom: 20px;
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

.btn-el {
  background: rgba(0, 87, 55, 1);
  border-radius: 4px;
  color: #ffffff;
  text-align: center;
  margin: 40px auto;
}

.btn {
  background: rgba(0, 87, 55, 1);
  border-radius: 4px;
  color: #ffffff;
  line-height: 43px;
  height: 43px;
  text-align: center;
  margin: 40px auto;
}

.btn > a {
  color: #ffffff;
  text-decoration: none;
}
</style>