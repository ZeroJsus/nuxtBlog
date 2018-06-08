<template>
  <main class="name">
    <div class="container">
      <ul>
        <li v-for="(item,index) in listitem" :key="index">
          <a :href="`/posts/single/${item}`">
            {{item}}
          </a>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
const axios = require('axios');
export default{
    name:'',
    data(){
       return{
         listitem:[]
       }
    },
    methods:{
      getList(){
        let path = require('file-loader!../../posts/normallist.json');
        axios.get(`${path}`).then((res)=>{
          this.listitem = res.data.list
          console.log(res.data)
        })
      }
    },
    created(){
      this.getList();
    }
}
</script>
<style lang='scss' scoped>

</style>
