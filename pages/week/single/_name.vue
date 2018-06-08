<template>
  <main class="name">
    <div class="container" v-html="mdhtml">

    </div>
  </main>
</template>
<script>
const showdown = require('showdown'),
      converter = new showdown.Converter();
const axios = require('axios');
const path = require('path');
export default{
    validate ({ params }) {
      // 校验进入的数据是不是已经有文件对应
      return /^\w+$/.test(params.id)
    },
    name:'',
    data(){
       return{
         mdhtml:''
       }
    },
    methods:{},
    created(){
      // 使用path组件来获取路径列表
      let name = this.$route.params.name;
      let file = require(`file-loader!../../../posts/week/${name}.markdown`)
      axios.get(`${file}`).then((data)=>{
        let text = data.data;
        this.mdhtml = converter.makeHtml(text);
      })
    }
}
</script>
<style lang='scss' scoped>

</style>
