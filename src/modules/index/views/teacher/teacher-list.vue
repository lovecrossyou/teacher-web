<template>
  <div class="main">
    <TopNav title="初一(1)班老师"></TopNav>

    <el-input placeholder="搜索" v-model="seatch_input" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

    <div style="width:100%;">
      <ClassItem title="王老师（班主任）" desc="美术 / 舞蹈">
        <template v-slot:left>
          <img class="logo" src="http://qnimage.xiteng.com/logo.jpeg" alt />
        </template>
      </ClassItem>
      <ClassItem title="李老师" desc="美术 / 舞蹈">
        <template v-slot:left>
          <img class="logo" src="http://qnimage.xiteng.com/logo_144.png" alt />
        </template>
      </ClassItem>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/top-nav.vue";
import ClassItem from "@/components/class-item";
export default {
  data(){
    return {
      seatch_input:''
    }
  },
  components: {
    TopNav,
    ClassItem
  },
  methods: {
    createCls() {
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
  align-items: center;
  background-color: #ffffff;
  height: 100%;
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

.logo {
  width: 32px;
  height: 32px;
  margin-left: 20px;
}

.qrcode {
  width: 32px;
  height: 32px;
  margin-right: 20px;
}
</style>