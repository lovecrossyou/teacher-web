<template>
  <el-form ref="form" :model="form" label-width="120px" size="medium">
    <!-- 比赛类型 -->
    <div class="border-line">
      <el-form-item label="比赛类型">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <!-- 描述 -->
      <el-form-item label="描述">
        <el-input v-model="form.summary"></el-input>
      </el-form-item>
    </div>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { addCategoryM } from "@/api/getData";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        name: "",
        summary: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      let res = await addCategoryM(this.form);
      this.$message({
        message: res.message,
        type: "success"
      });
    }
  }
};
</script>

<style>
.border-line {
  border: dashed 1px #e1e1e1;
  margin-bottom: 10px;
  padding: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>
