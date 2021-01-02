<template >
  <div>
    <lun></lun>
    <vnav></vnav>
    <b-form-group>
      <!-- {{ this.$refs.ly }} -->
      <b-form-input
        ref="ly"
        v-model="liuy"
        placeholder="留个脚印吧"
      ></b-form-input>
      <b-button @click="fab">发表</b-button>
    </b-form-group>
    <b-list-group>
      <b-list-group-item v-for="(iten, i) in listmess" :key="i">{{
        iten
      }}</b-list-group-item>
    </b-list-group>
    <vfood></vfood>
  </div>
</template>
<script>
import lun from "@/components/childer/lun";
import vnav from "@/components/childer/vnav";
import vfood from "@/components/childer/vfood";
export default {
  components: { lun, vnav, vfood },
  name: "mess",

  data: function () {
    return {
      liuy: "",
      listmess: [],
    };
  },
  created: function () {
    this.$ajax
      .get("/mess")
      .then((res) => {
        var messdata = res.data;
        // console.log(echdata)

        for (var i = 0; i <= messdata.length; i++) {
          for (var k in messdata[i]) {
            this.listmess.push(messdata[i][k]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    fab() {
      this.listmess.unshift(this.liuy);
      console.log(typeof this.liuy);
      this.$ajax
        .post("/mess", { k: this.liuy })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        });
      this.liuy = "";
    },
  },
};
</script>
<style scoped>
.bclass {
  margin-top: 0.75rem;
}
</style> 