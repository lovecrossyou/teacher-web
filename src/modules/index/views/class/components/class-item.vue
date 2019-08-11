<template>
  <div >
    <div class="item-wrapper">
      <div class="item-logo">班</div>
      <div class="item-content">
        <div class="title">初一 班</div>
        <div class="desc">北京市中学</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.item-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 100%;
  border-bottom: solid 1px #e1e1e1;
}

.item-logo {
  margin-left: 20px;
  width: 29px;
  height: 29px;
  background-color: #005834;
  text-align: center;
  line-height: 29px;
  color: #ffffff;
  font-size: 12px;
}

.title {
  font-size: 13px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(2, 1, 7, 1);
  line-height: 19px;
}

.item-content {
  margin-left: 10px;
}

.desc {
  font-size: 12px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(125, 125, 127, 1);
}

.body {
  background: #ffffff;
}
</style>