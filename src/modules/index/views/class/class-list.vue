<template>
  <div class="main">
    <TopNav title="班级管理">
      <template v-slot:right>
        <div class="right-nav-wrapper">
          <div class="right-nav-item" @click="createCls">创建班级</div>
          <div class="right-nav-item">消息认定</div>
        </div>
      </template>
    </TopNav>
    <div style="width:100%;">
      <ClassItem />
      <ClassItem />
      <ClassItem />
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
  methods:{
    createCls(){
      this.$router.push('/class-create')
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
</style>