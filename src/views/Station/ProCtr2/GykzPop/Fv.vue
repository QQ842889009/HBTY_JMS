<template>
  <div>
    <f-m :stylePosition="stylePosition" :SPpar="SPpar" :FBpar="FBpar" />
  </div>
</template>

<script>
import FM from "views/Station/ProCtr2/gykzTabbar/FM";
export default {
  name: "Fv",
  computed: {
    //给定的值
    SPpar() {
      return {
        eventName: "/hbty/fySetDataAA", //发送事件的名称
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "FV1SP", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.FV1SP, //父组件过来的显示值，子组件不能更改
        minValue: 0,
        maxValue: 100,
        attributeName: "阀门给定:",
        Unit: "%",
      };
    },
    FBpar() {
      return {
        attributeName: "阀门反馈:",
        getValue: this.statX.FV1FB, //父组件过来的显示值
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
          modalLeft: "6rem", //弹出框的偏移量
          modalTop: "2rem", //弹出框的偏移量
          isTitle: "供水阀门",
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
