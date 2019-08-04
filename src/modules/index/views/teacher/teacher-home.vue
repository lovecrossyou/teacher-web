<template>
  <div class="main">
    <TopNav title="中小学教师邦"></TopNav>

    <!-- banner -->
    <div class="content">
      <div class="banner">
        <img
          class="banner-img"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564929731715&di=65efc4b81a1dc7285b603ad416b8840e&imgtype=0&src=http%3A%2F%2Ffile5.youboy.com%2Fd%2F175%2F71%2F82%2F7%2F594167s.jpg"
          alt
        />
      </div>

      <div class="main-con">
        <div class="desc">70年前的教育，是“先念书、后读书”的教育，是四两拨千斤的教育。70年前的教育，是“先念书、后读书”的教育。</div>

        <div class="use-desc">使用说明</div>
        <div class="use-desc">创建班级</div>
        <div class="use-desc">输入登陆密码</div>
      </div>
    </div>
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
.content {
  padding: 15px;
  box-sizing: border-box;
}

.use-desc {
  color: #005737;
  font-size: 13px;
  margin-top: 12px;
  box-sizing: border-box;
}

.main-con {
  background: #ffffff;
  padding: 15px;
  box-sizing: border-box;
}

.banner-img {
  width: 100%;
  max-width: 100%;
}

.desc {
  font-size: 14px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(2, 1, 7, 1);
  box-sizing: border-box;
}
</style>