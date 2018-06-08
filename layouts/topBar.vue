<template>
  <nav>
    <ul>
      <li :class="{'active':1}"><a href="/">首页</a></li>
      <li><a href="/article">文章</a></li>
      <li><a href="/week">周报</a></li>
      <li><a href="/about">关于我</a></li>
    </ul>
  </nav>
</template>
<script>
export default{
    name:'topBar',
    data(){
       return{}
    },
    methods:{},
}
</script>
<style lang='scss' scoped>

</style>
