<template>
  <div class="item-wrapper">
    <div class="left-wrapper">
      <div>王舒望</div>
      <div style="margin-left:30px;margin-right:40px;">男</div>
      <div>数学/化学</div>
    </div>
    <div class="btn-wrapper">
      <div style="color:#57A5FC;font-size:14px;">通过</div>
      <div style="color:#FD6A22;font-size:14px;">拒绝</div> 
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item-wrapper {
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.btn-wrapper {
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  width: 84px;
}
</style>