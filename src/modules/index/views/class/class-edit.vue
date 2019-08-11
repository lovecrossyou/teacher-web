<template>
  <div class="main">
    <TopNav title="编辑班级"></TopNav>
    <div style="margin-top: 20px;"></div>
    <div style="padding: 0 10px;box-sizing: border-box;">
      <el-form :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
        <el-form-item label="学校名称：">
          <el-input v-model="formLabelAlign.name" placeholder="北京市中学"></el-input>
        </el-form-item>
        <el-form-item label="班级名称：">
          <el-input v-model="formLabelAlign.region" placeholder="初一(1)班"></el-input>
        </el-form-item>
        <el-form-item label="班级描述：">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div class="footer">
      <div class="footer-btn btn-save" @click="saveInfo">保存</div>
      <div class="footer-btn btn-cancel">取消</div>
    </div>
  </div>
</template>
<script>
import TopNav from "@/components/top-nav.vue";
export default {
  components: {
    TopNav
  },
  data() {
    return {
      classes: [
        "语文",
        "数学",
        "英语",
        "物理",
        "化学",
        "生物",
        "历史",
        "地理",
        "音乐",
        "形体"
      ],
      checkList: [],
      radio: 2,
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    saveInfo() {
      this.$router.push("/class-create");
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
}

.btn-cancel {
  background-color: #c4c3c9;
}
</style>