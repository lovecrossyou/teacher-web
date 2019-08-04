<template>
  <div class="main">
    <TopNav title="填写教师信息"></TopNav>
    <div style="margin-top: 20px;"></div>
    <div style="padding: 0 10px;box-sizing: border-box;">
      <el-form :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
        <el-form-item label="*学校名称：">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="*班级名称：">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="*姓名：">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>

        <!-- 性别 年龄 手机号码 任课教师 -->
        <el-form-item label="性别：">
          <el-radio-group v-model="radio">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="年龄：">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>

        <el-form-item label="手机号码：">
          <el-input type="number" v-model="formLabelAlign.region"></el-input>
        </el-form-item>

        <el-form-item label="任教科目："></el-form-item>
        <el-checkbox-group class="checkbox-wrapper" v-model="checkList">
          <div style="width:40%; height:40px;" v-for="(c,index) in classes" :key="index">
            <el-checkbox :label="c"></el-checkbox>
          </div>
        </el-checkbox-group>
      </el-form>
    </div>


    <div class="footer">
      <div class="footer-btn btn-save">保存</div>
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