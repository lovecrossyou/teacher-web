<template>
  <div class="main">
    <TopNav title="王艳霞"></TopNav>

    <div class="class-name">北京市中学 | 初一 班</div>

    <div class="desc">中小学教师邦中小学教师邦中小学教师邦中小学教师邦中小学教师邦中小学教师邦中小学教师邦中小学教师邦中小学教师</div>

    <img src="http://qnimage.xiteng.com/qrcode-default.jpg" class="qrcode"/>

    <div>教师二维码</div>
    <div>教师密码：133ter</div>

    <div class="btn">邀请加入</div>

    <img src="http://qnimage.xiteng.com/qrcode-default.jpg" class="qrcode"/>

    <div>教师二维码</div>
    <div>教师密码：133ter</div>

    <div class="btn">邀请加入</div>
  </div>
</template>

<script>
import TopNav from "@/components/top-nav.vue";
export default {
  components: {
    TopNav
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebebeb;
  height: 100%;
}
.class-name {
  height: 38px;
  line-height: 38px;
  text-align: center;
}

.desc {
  background-color: #ffffff;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}

.qrcode {
  width: 108px;
  height: 108px;
  background-color: aqua;
  margin-top: 10px;
}

.btn {
  width: 126px;
  height: 37px;
  background: rgba(0, 87, 55, 1);
  border-radius: 4px;
  color: #ffffff;
  line-height: 37px;
  text-align: center;
  margin: 12px 0px;
}
</style>