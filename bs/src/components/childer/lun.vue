<template >
    <div>
          
       <b-carousel class='lunstyle'
         id="lun"
         v-model="slide"
         :interval="4000"
         controls
         indicators
         background="#ababab"
         img-width="512"
         img-height="240"
         style="text-shadow: .0625rem .0625rem .125rem #333;"
         @sliding-start="onSlideStart"
         @sliding-end="onSlideEnd"
       >
        <b-carousel-slide img-src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2837799228,776641844&fm=26&gp=0.jpg">
           <h1>雄狮</h1>
         </b-carousel-slide>
         
   
         <b-carousel-slide img-src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2357499568,3342476451&fm=26&gp=0.jpg">
           <h1>老虎</h1>
         </b-carousel-slide>

         <b-carousel-slide img-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3331665880,2001605345&fm=26&gp=0.jpg">
           <h1>猎豹</h1>
         </b-carousel-slide>

         <b-carousel-slide img-src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2865654323,268983110&fm=26&gp=0.jpg">
           <h1>海燕</h1>
         </b-carousel-slide>

         <b-carousel-slide img-src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2299666113,943185105&fm=26&gp=0.jpg">
           <h1>鲨鱼</h1>
         </b-carousel-slide>
   </b-carousel>
       </div>
</template>
<script>
export default {
     data() {
      return {
        slide: 0,
        sliding: null
      }
    },
     methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script  >
<style scoped >
   
</style>
