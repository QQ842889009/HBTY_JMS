<template>
  <div>
    <qsp
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
import Qsp from "views/Station/ProCtr2/gykzTabbar/Qsp";

export default {
  name: "Qsp1",
  data() {
    return {};
  },
  computed: {
    switchOnOff() {
      return {
        tipName: "水泵启停",
        onText: "启动",
        offText: "关闭",
        setConAttribute: "SBPC", //设置的控制的属性BP1C或者BP2C
        getConValue: this.statX.SBPC,

        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
      };
    },
    switchAutoMan() {
      return {
        tipName: "手自动切换",
        onText: "自动",
        offText: "手动",
        setConAttribute: "MA_SBP", //设置的控制的属性BP1C或者BP2C
        getConValue: this.statX.MA_SBP,

        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
      };
    },
    // 这个给定没有任何的作用，但是不能删除
    LTLLpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "LT_LL", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.LT_LL, //父组件过来的显示值，子组件不能更改
        minValue: 0.0,
        maxValue: 3.0,
        attributeName: "液位低低:",
        Unit: "m",
      };
    },
    // 有的水泵是有反馈的的，可以引用一下，但是主要还是看状态。
    FBpar() {
      return {
        getValueS: this.statX.MP2S,
        getValueA: this.statX.MP2A,
        attributeName: "频率反馈:",
        getValue: this.statX.MP2FB, //父组件过来的显示值
        Unit: "Hz",
      };
    },
    LTHpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "LT_H", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.LT_H, //父组件过来的显示值，子组件不能更改
        minValue: 0.0,
        maxValue: 3.0,
        attributeName: "停泵液位:",
        Unit: "m",
      };
    },

    LTpar() {
      return {
        getValueS: this.statX.MP2S,
        getValueA: this.statX.MP2A,
        attributeName: "液    位:",
        getValue: this.statX.LT, //父组件过来的显示值
        Unit: "m",
      };
    },
    // 压力高高给定值
    LTLpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "LT_L", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.LT_L, //父组件过来的显示值，子组件不能更改
        minValue: 0.0,
        maxValue: 3.0,
        attributeName: "起泵液位:",
        Unit: "m",
      };
    },
  },

  props: {
    stylePosition: {
      type: Object,
      default: function () {
        return {
          clickShow: true, //点击位置显示和隐藏
          modalLeft: "6rem", //弹出框的偏移量
          modalTop: "2rem", //弹出框的偏移量
          isTitle: "潜水泵",
          clickLeft: "6rem",
          clickTop: "1rem",
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
    Qsp,
  },
};
</script>

<style scoped></style>
