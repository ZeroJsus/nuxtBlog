<template>
  <div>
    <!-- 这里是博客的导航 -->
    <topBar></topBar>
    <nuxt/>
  </div>
</template>
<script>
import topBar from './topBar.vue'
export default{
  name:'layout',
  components: {
    topBar
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/styles/index.scss';
</style>
