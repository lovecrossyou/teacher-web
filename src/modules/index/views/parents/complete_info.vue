<template>
  <div class="main">
    <TopNav title="完善家长信息"></TopNav>
    <div style="margin-top: 20px;"></div>
    <div style="padding: 0 10px;box-sizing: border-box;">
      <el-form :label-position="labelPosition" label-width="90px">
        <el-form-item label="*家长信息：">
          <el-input v-model="form.school"></el-input>
        </el-form-item>
        <el-form-item label="*家长名称：">
          <el-input v-model="form.class"></el-input>
        </el-form-item>
        <el-form-item label="*家长职业：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="*学生姓名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="班级名称：">
          <el-input disabled v-model="form.phone"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div class="footer">
      <el-button :loading="loading" class=" btn-save" @click="saveInfo">保存</el-button>
      <el-button class="btn-cancel">取消</el-button>
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
        sex: "1",
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
      if (this.checkList.length == 0) {
        this.$message({
          message: "请选择科目",
          type: "error"
        });
        return;
      }
      this.loading = true;
      this.form.subject = this.checkList.reduce(
        (pre, curr) => pre + ";" + curr
      );
      this.form.cb = () => {
        this.$router.push("/");
        this.loading = false;
      };
      this.form.err = () => {
        this.loading = false;
      };
      this.saveUserOrUpdate(this.form);
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