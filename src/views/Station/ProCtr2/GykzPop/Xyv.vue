<template>
  <div>
    <xyv
      :stylePosition="stylePosition"
      :switchOnOff="switchOnOff"
      :switchAutoMan="switchAutoMan"
      :LTLLpar="LTLLpar"
      :FBpar="FBpar"
      :LTHpar="LTHpar"
      :LTpar="LTpar"
      :LTLpar="LTLpar"
    />
  </div>
</template>

<script>
import Xyv from "views/Station/ProCtr2/gykzTabbar/Xyv";

export default {
  name: "Qsp1",
  data() {
    return {};
  },
  computed: {
    switchOnOff() {
      return {
        tipName: "阀门开关",
        onText: "打开",
        offText: "关闭",
        setConAttribute: "XYVC", //设置的控制的属性BP1C或者BP2C
        getConValue: this.statX.XYVC,

        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
      };
    },
    switchAutoMan() {
      return {
        tipName: "手自动切换",
        onText: "自动",
        offText: "手动",
        setConAttribute: "MA_XYV", //设置的控制的属性BP1C或者BP2C
        getConValue: this.statX.MA_XYV,

        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
      };
    },
    // 这个给定没有任何的作用，但是不能删除
    LTLLpar() {
      return {
        // SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        // setAttribute: "PT22XY_H", //需要传递，改的属性，例如BP1SP
        // getValue: this.statX.PT22XY_H, //父组件过来的显示值，子组件不能更改
        // minValue: 0.0,
        // maxValue: 1.6,
        // attributeName: "液位低低:",
        // Unit: "m",
      };
    },
    // 有的水泵是有反馈的的，可以引用一下，但是主要还是看状态。
    FBpar() {
      return {
        // getValueS: this.statX.MP2S,
        // getValueA: this.statX.MP2A,
        // attributeName: "频率反馈:",
        // getValue: this.statX.MP2FB, //父组件过来的显示值
        // Unit: "Hz",
      };
    },
    LTHpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "PT22XY_H", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.PT22XY_H, //父组件过来的显示值，子组件不能更改
        minValue: 0.0,
        maxValue: 16.0,
        attributeName: "开阀压力:",
        Unit: "bar",
      };
    },

    LTpar() {
      return {
        getValueS: this.statX.MP2S,
        getValueA: this.statX.MP2A,
        attributeName: "二供压力:",
        getValue: this.statX.PT21, //父组件过来的显示值
        Unit: "bar",
      };
    },
    // 压力高高给定值
    LTLpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "PT22XY_L", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.PT22XY_L, //父组件过来的显示值，子组件不能更改
        minValue: 0.0,
        maxValue: 16.0,
        attributeName: "关阀压力:",
        Unit: "bar",
      };
    },
  },

  props: {
    stylePosition: {
      type: Object,
      default: function () {
        return {
          clickShow: true, //点击位置显示和隐藏
          modalLeft: "300px", //弹出框的偏移量
          modalTop: "100px", //弹出框的偏移量
          isTitle: "潜水泵",
          clickLeft: "300px",
          clickTop: "50px",
        };
      },
    },
    statX: Object,
    popShow: {
      type: String,
      default: "true",
    },
  },
  components: {
    Xyv,
  },
};
</script>

<style scoped></style>
