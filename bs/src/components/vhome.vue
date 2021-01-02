<template >
  <div>
    <lun></lun>
    <vnav></vnav>
    <div class="homegroud">
        <!-- <p>{{hometxt}}kkkkk</p> -->
      <p v-html= hometxt ></p>
    </div>
    <vfood></vfood>
  </div>
</template>
<script>
import lun from "@/components/childer/lun";
import vnav from "@/components/childer/vnav";
import vfood from "@/components/childer/vfood";
export default {
  components: { lun, vnav,  vfood },
  name:'vhome',
  data: function () {
    return {
      hometxt: "",
    };
  },
  created: function () {
    this.$ajax
      .get("/home")
      .then((res)=> {
        this.hometxt=res.data
      })
      .catch((err)=> {
        this.hometxt=err
      })
      
  },
};
</script>
<style scoped>
.homegroud{
    background-color: rgb(188, 191, 197);
}
p{
  font-weight: 400px;  
  text-indent:2em;


}
</style> 
