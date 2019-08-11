<template>
  <div class="main">
    <TopNav title="初一(1)班家长/学生"></TopNav>
    <div style="width:100%;">
      <ClassItem title="张晓涵" desc="学号：1   家长人数：3">
        <template v-slot:left>
          <img class="logo" src="http://qnimage.xiteng.com/logo.jpeg" alt />
        </template>
      </ClassItem>
      <ClassItem title="李小牧" desc="学号：2   家长人数：3">
        <template v-slot:left>
          <img class="logo" src="http://qnimage.xiteng.com/logo_144.png" alt />
        </template>
      </ClassItem>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/top-nav.vue";
import ClassItem from "./components/class-item";
export default {
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