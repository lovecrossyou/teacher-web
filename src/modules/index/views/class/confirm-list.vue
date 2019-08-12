<template>
  <div class="main">
    <TopNav title="初一(1)班">
      <template v-slot:right>
        <div class="right-nav-wrapper">
          <div class="right-nav-item" @click="createCls">完成(1)</div>
        </div>
      </template>
    </TopNav>
    <div class="content">
      <div class="top-tips">共有1条审核</div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="老师" name="1">
          <ConfirmItem></ConfirmItem>
          <ConfirmItem></ConfirmItem>
        </el-collapse-item>
        <el-collapse-item title="家长/学生" name="2">
          <div>暂无审核消息</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/top-nav.vue";
import ConfirmItem from "./components/confirm-item";

export default {
  data() {
    return {
      activeNames: ["1"]
    };
  },
  components: {
    TopNav,
    ConfirmItem
  },
  methods: {
    createCls() {
      this.$router.push("/class-create");
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  height: 100%;
}

.content {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.top-tips{
  width: 100%;
  text-align: center;
  height: 30px;
  line-height: 30px;
  
  
}

.right-nav-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.right-nav-item {
  width: 64px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #ffffff;
  background: #0aa318;
  margin-right: 18px;
}
</style>