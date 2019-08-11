<template>
  <div class="class-item" @click="itemClick">
    <div class="item-wrapper">
      <slot name="left">
        <div class="item-logo">{{logoName}}</div>
      </slot>

      <div class="item-content">
        <div class="title">{{title}}</div>
        <div class="desc">{{desc}}</div>
      </div>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
    <div class="line" />
  </div>
</template>

<script>
export default {
  props: ["logo", "title", "desc",''],
  computed: {
    logoName() {
      if (!this.logo) return "班";
      return this.logo;
    }
  },
  methods:{
    itemClick(){
      console.log('xxxxx');
      this.$emit('goTeacher')
    }
  }
};
</script>

<style  scoped>
.class-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}

.line {
  position: absolute;
  bottom: 0;
  height: 1px;
  width: 100%;
  background: #e1e1e1;
}
.item-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 100%;
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