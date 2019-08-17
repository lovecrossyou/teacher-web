<template>
  <div>
authredirect
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    } ,
    mounted(){
      const code = this.$route.query.code;
      console.log('code ### ', code);
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>

</style>