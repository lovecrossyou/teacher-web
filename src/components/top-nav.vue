<template>
  <div class="nav-wrapper">
    <slot name="left">
      <div></div>
    </slot>
    <div class="title">{{title}}</div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.nav-wrapper {
  background-color: #005834;
  height: 44px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.title {
  color: #ffffff;
}
</style>