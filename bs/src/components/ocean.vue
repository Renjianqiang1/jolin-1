<template >
  <div>
    <lun></lun>
    <vnav></vnav>
    <div class="bclass">
      <div class="clear"></div>
      <b-card
        v-for="i in oceadata"
        :key=i.url
        :title=i.text
        :img-src=i.img
        :img-alt=i.text
        img-top
        tag="article"
        style="max-width: 17rem; float: left; margin-right: 4px"
        class="mb-2"
      >
        <b-card-text v-text=i.url>
          
        </b-card-text>

        <b-button :href=i.url variant="primary">观看视频</b-button>
      </b-card>
    </div>
    <vfood></vfood>
  </div>
</template>
<script>
import lun from "@/components/childer/lun";
import vnav from "@/components/childer/vnav";
import vfood from "@/components/childer/vfood";
export default {
  components: { lun, vnav, vfood },
  name: "ocean",
  data: function () {
    return {
      oceadata:null
    };
  },
  created: function () {
    this.$ajax
      .get("/ocean")
      .then((res) => {
        this.oceadata = res.data;
        
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.bclass {
  margin-top: 0.75rem;
}
</style> 