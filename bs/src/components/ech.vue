<template >
  <div>
    <lun></lun>
    <vnav></vnav>
    <div class="echa" ref="echa"></div>
    <h3>视频的点击数仅为当月的统计</h3>
    <vfood></vfood>
  </div>
</template>
<script>
import lun from "@/components/childer/lun";
import vnav from "@/components/childer/vnav";
import vfood from "@/components/childer/vfood";

export default {
  components: { lun, vnav, vfood },
  name: "ech",
  data: function () {
    return {
      d1: "",
      d2: null,
      titleFontSize: 0,
      xdata: ['dd'],
      serdata: ['90'],
    };
  },
  methods: {
    initech() {
      this.d1 = this.$echarts.init(this.$refs.echa);
      this.d2 = {
        title: {
          text: "top8",
          top: 13,
          left: "48%",
          textStyle: {
            color: "#999",
          },
        },
        xAxis: {
          name: "动物",
          nameLocation: "end",
          nameRotate: "30deg",
          type: "category",
          data: this.xdata,
        },
        yAxis: {
          name: "访问量",
          type: "value",
          show: true,
        },
        series: {
          type: "bar",
          data: this.serdata,
          label: {
            show: true,
            position: "top",
            distance: 5,
          },
        },
        tooltip: {
          show: true,
          trigger: "axis",
          formatter: "{b}视频的访问量为&nbsp;&nbsp{c}&nbsp;次",
        },
      };
      this.d1.setOption(this.d2);
      window.addEventListener("resize", this.screenAdapter);
      this.screenAdapter();
    },
    //  getdata
    screenAdapter() {
      this.titleFontSize = (this.$refs.echa.offsetWidth / 100) * 3.6;
      const d3 = {
        title: {
          textStyle: {
            fontSize: this.titleFontSize / 2,
          },
        },
        legend: {
          itemWidth: this.titleFontSize,
          itemHeight: this.titleFontSize,
          itemGap: this.titleFontSize / 2,
          textStyle: {
            fontSize: this.titleFontSize / 2,
          },
        },
        series: [
          {
            radius: this.titleFontSize * 4.5,
            center: ["50%", "60%"],
          },
        ],
      };
      this.d1.setOption(d3);
      this.d1.resize();
    },
  },
  mounted() {
    // this.initech();
  },
  created: function () {
    this.$ajax
      .get("/echa")
      .then((res) => {
        var echdata = res.data;
        // console.log(echdata)

        for (var i = 0; i <= echdata.length; i++) {
          // console.log(echdata[i]);
          for (var k in echdata[i]) {
            // console.log(echdata[i][k])
// console.log(typeof(k))
            this.xdata.push(""+k+ "");
            this.serdata.push(""+echdata[i][k]+"");
            // console.log(this.xdata)
          }
          this.initech()
          //           for(var v of echdata[i] ){
          //  console.log(v)
          //             this.serdata.push(v)

          //           }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.echa {
  width: 100%;
  height: 600px;
  background-color: #fff;
}
h3 {
  background-color: #fff;
  text-align: center;
}
</style> 