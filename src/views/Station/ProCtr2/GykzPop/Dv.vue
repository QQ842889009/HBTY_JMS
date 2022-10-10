<template>
  <div>
    <f-m :stylePosition="stylePosition" :SPpar="SPpar" :FBpar="FBpar" />
  </div>
</template>

<script>
import FM from "views/Station/ProCtr2/gykzTabbar/FM";
export default {
  name: "Xv",
  computed: {
    //给定的值
    SPpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "DVSP", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.DVSP, //父组件过来的显示值，子组件不能更改
        minValue: 0,
        maxValue: 100,
        attributeName: "阀门给定:",
        Unit: "%",
      };
    },
    FBpar() {
      return {
        attributeName: "阀门反馈:",
        getValue: this.statX.DVFB, //父组件过来的显示值
        Unit: "%",
      };
    },
  },
  props: {
    //决定点击的位置
    stylePosition: {
      type: Object,
      default: function () {
        return {
          clickShow: true, //点击位置显示和隐藏
          modalLeft: "300px", //弹出框的偏移量
          modalTop: "10px", //弹出框的偏移量
          isTitle: "二网阀门",
          clickLeft: "200px",
          clickTop: "100px",
        };
      },
    },
    statX: Object,
    //决定是否显示这个弹出框
  },
  components: {
    FM,
  },
};
</script>

<style scoped></style>
