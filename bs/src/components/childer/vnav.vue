<template >
    <div>
    <b-nav justified  align pills  >
        <b-nav-item  exact-active-class="active" to='./' >主页</b-nav-item>
        <b-nav-item  exact-active-class="active" to='./sky'>天空动物</b-nav-item>
        <b-nav-item  exact-active-class="active" to='./ocean' >海洋动物</b-nav-item>
        <b-nav-item  exact-active-class="active" to='./land'>陆地动物</b-nav-item>
        <b-nav-item  exact-active-class="active" to='./mess'>留言板</b-nav-item>
        <b-nav-item  exact-active-class="active" to='./ech'>排行榜</b-nav-item>
    </b-nav>
    </div>
</template>
<script>
import { NavPlugin } from 'bootstrap-vue'

export default {
    components:{NavPlugin},
    methods: {
        cbg(){
            console.log(this)
        }
    },

}
</script>
<style scoped  >
  .nav{
      background-color: #cff5e3;
      
  }  
</style>