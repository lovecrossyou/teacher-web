<template>
  <div class="main">
    <TopNav title="初一(1)班">
      <template v-slot:right>
        <div class="right-nav-wrapper">
          <div class="right-nav-item" @click="createCls">设置</div>
        </div>
      </template>
    </TopNav>
    <div style="width:100%;">
      <ClassItem logo="师" title="初一(1)班教师" v-on:goTeacher="goTeacher">
        <template v-slot:right>
          <img class="qrcode" src="http://qnimage.xiteng.com/qrcode-default.jpg" alt />
        </template>
      </ClassItem>
      <ClassItem logo="生" title="初一(1)班">
        <template v-slot:right>
          <img class="qrcode" src="http://qnimage.xiteng.com/qrcode-default.jpg" alt />
        </template>
      </ClassItem>
    </div>
    <a
      href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx04ed87ff27f7385a&redirect_uri=REDIRECT_URI&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
      class="btn-login"
    >授权登陆</a>
  </div>
</template>

<script>
import TopNav from "@/components/top-nav.vue";
import ClassItem from "@/components/class-item";
import qrcode from "@static/home/lock.png";
export default {
  data() {
    return {};
  },
  components: {
    TopNav,
    ClassItem
  },
  methods: {
    login() {},
    createCls() {
      this.$router.push("/class-create");
    },
    goTeacher() {
      this.$router.push("/teacher-list");
    }
  }
};
</script>

<style scoped>
.btn-login {
  width: 90px;
  height: 40px;
  background-color: aquamarine;
  line-height: 40px;
  text-align: center;
}
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

.qrcode {
  width: 32px;
  height: 32px;
  margin-right: 20px;
}
</style>