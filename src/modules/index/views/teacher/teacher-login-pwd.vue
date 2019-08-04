<template>
  <div class="main">
    <img class="logo" :src="logo" alt />
    <div style="margin-top:14px;">中小学教师邦</div>

    <div class="desc">中小学教师邦是一款智能的协助老师更好的布置 作业，督促孩子学习的软件。中小学教师邦是一 款智能的协助老师更好的布置作业</div>

    <div class="box-wrapper">
      <div class="box-title">输入班级密码</div>

      <div class="line"></div>

      <div class="box-pwd-wrapper">
        <img :src="lock_icon" class="lock_icon" />
        <el-input type="text" placeholder="请输入班级密码"></el-input>
      </div>
    </div>


    <div class="btn">加入</div>
  </div>
</template>

<script>
import logo from "../../../../../static/home/logo.png";
import lock_icon from "../../../../../static/home/lock.png";
export default {
  data() {
    return {
      logo,
      lock_icon
    };
  }
};
</script>

<style scoped>
.main {
  display: flex;
  height: 100%;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: center;
  background: #ffffff;
}

.logo {
  margin-top: 14px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.desc {
  color: #7d7d7f;
  font-size: 14px;
  margin-top: 20px;
  padding: 0 40px;
}

.box-wrapper {
  margin-top: 35px;
  width: 300px;
  height: 138px;

  background: #f8f8f8;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: solid 1px #e1e1ee;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-title {
  color: #005737;
  font-size: 17px;
  margin-top: 20px;
}

.line {
  margin-top: 20px;
  width: 246px;
  height: 1px;
  background: rgba(220, 220, 220, 1);
}

.icon {
  width: 30px;
  height: 30px;
  /* background: #7d7d7f; */
  margin-right: 19px;
}

.lock_icon {
  width: 17px;
  height: 19px;
  margin-right: 19px;
}

.box-pwd-wrapper {
  display: flex;
  flex-direction: row;
  height: 30px;
  align-items: center; /* 交叉轴  */
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  margin-top: 30px;
}

.btn {
  width: 300px;
  height: 43px;
  background: rgba(0, 87, 55, 1);
  border-radius: 4px;
  color: #ffffff;
  line-height: 43px;
  text-align: center;
  margin: 73px 0px;
  font-size: 18px;
}
</style>