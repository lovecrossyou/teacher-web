<template>
  <div class="main">
    <TopNav title="填写教师信息"></TopNav>
    <div style="margin-top: 20px;"></div>
    <div style="padding: 0 10px;box-sizing: border-box;">
      <el-form :label-position="labelPosition" label-width="90px">
        <!-- <el-form-item label="*学校名称：">
          <el-input v-model="form.school"></el-input>
        </el-form-item>
        <el-form-item label="*班级名称：">
          <el-input v-model="form.class"></el-input>
        </el-form-item>-->
        <el-form-item label="*姓名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <!-- 性别 年龄 手机号码 任课教师 -->
        <el-form-item label="性别：">
          <el-radio-group v-model="form.sex">
            <el-radio :label="1" >男</el-radio>
            <el-radio :label="2" >女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="生日：">
          <el-date-picker
            value-format="yyyy-MM-dd"
            v-model="form.birthday"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="手机号码：">
          <el-input type="phone" v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item label="任教科目："></el-form-item>
        <el-checkbox-group class="checkbox-wrapper" v-model="checkList">
          <div style="width:40%; height:40px;" v-for="(c,index) in subjectData" :key="index">
            <el-checkbox :label="c"></el-checkbox>
          </div>
        </el-checkbox-group>
      </el-form>
    </div>

    <div class="footer">
      <el-button :loading="loading" class="btn-save" @click="saveInfo">保存</el-button>
      <!-- <div class="footer-btn btn-cancel">取消</div> -->
    </div>
  </div>
</template>
<script>
import TopNav from "@/components/top-nav.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    TopNav
  },
  data() {
    return {
      checkList: [],
      radio: 2,
      labelPosition: "left",
      form: {
        name: "",
        sex:'1',
        age: "",
        class: "",
        phone: "",
        birthday: "",
        subject: ""
      },
      loading: false
    };
  },
  computed: {
    ...mapState("schoolclass", ["subjectData"])
  },
  mounted() {
    this.subjectList();
  },
  methods: {
    ...mapActions("teacher", ["saveUserOrUpdate"]),
    ...mapActions("schoolclass", ["subjectList"]),
    handleChange(value) {
      console.log(value);
    },
    saveInfo() {
      console.log(this.form);
      this.loading = true;
      this.form.subject = this.checkList.reduce(
        (pre, curr) => pre + ";" + curr
      );
      this.saveUserOrUpdate(this.form, () => {
        this.$router.push("/");
        this.loading = false;
      });
    }
  }
};
</script>


<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ebebeb;
}

.checkbox-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-bottom: 20px;
}

.footer-btn {
  width: 126px;
  height: 37px;
  border-radius: 4px;
  color: #ffffff;
  text-align: center;
  line-height: 37px;
}

.btn-save {
  background-color: #005834;
  color: #ffffff;
}

.btn-cancel {
  background-color: #c4c3c9;
}
</style>