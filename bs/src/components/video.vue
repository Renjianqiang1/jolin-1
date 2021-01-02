<template >
  <div>
    <lun></lun>
    <vnav></vnav>
    <b-row>
      <b-col> </b-col>
    </b-row>

    <vfood></vfood>
  </div>
</template>
<script>
import lun from "@/components/childer/lun";
import vnav from "@/components/childer/vnav";
import vfood from "@/components/childer/vfood";
export default {
  components: { lun, vnav, vfood },
//   created: function () {
//     this.$ajax
//       .get("/home")
//       .then((res) => {
//         this.hometxt = res.data;
//       })
//       .catch((err) => {
//         this.hometxt = err;
//       });
//   },
};
</script>
<style >
</style>