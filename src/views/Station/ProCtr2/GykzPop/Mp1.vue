<template>
  <div>
    <mp-tw
      :stylePosition="stylePosition"
      :switchOnOff="switchOnOff"
      :switchAutoMan="switchAutoMan"
      :SPpar="SPpar"
      :FBpar="FBpar"
      :PTSPHpar="PTSPHpar"
      :PTSPLpar="PTSPLpar"
      :PTSPHHpar="PTSPHHpar"
    />
  </div>
</template>

<script>
import MpTw from "views/Station/ProCtr2/gykzTabbar/MpTw";

export default {
  name: "Mp1",
  data() {
    return {};
  },
  computed: {
    switchOnOff() {
      return {
        tipName: "水泵启停",
        onText: "启动",
        offText: "关闭",
        setConAttribute: "MP1C", //设置的控制的属性BP1C或者BP2C
        getConValue: this.statX.MP1C,

        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
      };
    },
    switchAutoMan() {
      return {
        tipName: "手自动切换",
        onText: "自动",
        offText: "手动",
        setConAttribute: "MA_MP", //设置的控制的属性BP1C或者BP2C
        getConValue: this.statX.MA_MP,
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
      };
    },
    SPpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "MP1SP", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.MP1SP, //父组件过来的显示值，子组件不能更改
        minValue: 0,
        maxValue: 50,
        attributeName: "频率给定:",
        Unit: "Hz",
      };
    },

    FBpar() {
      return {
        getValueS: this.statX.MP1S,
        getValueA: this.statX.MP1A,
        attributeName: "频率反馈:",
        getValue: this.statX.MP1FB, //父组件过来的显示值
        Unit: "Hz",
      };
    },
    PTSPHpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "PT22SP_H", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.PT22SP_H, //父组件过来的显示值，子组件不能更改
        minValue: 0,
        maxValue: 50,
        attributeName: "停泵高限:",
        Unit: "Mpa",
      };
    },
    PTSPLpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "PT22SP_L", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.PT22SP_L, //父组件过来的显示值，子组件不能更改
        minValue: 0,
        maxValue: 50,
        attributeName: "起泵低限:",
        Unit: "Mpa",
      };
    },

    // PTFBpar() {
    //   return {
    //     getValueS: this.statX.MP1S,
    //     getValueA: this.statX.MP1A,
    //     attributeName: "二回压力:",
    //     getValue: this.statX.PT22, //父组件过来的显示值
    //     Unit: "Mpa",
    //   };
    // },
    // 压力高高给定值
    PTSPHHpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "PT22SP_HH", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.PT22SP_HH, //父组件过来的显示值，子组件不能更改
        minValue: 0.0,
        maxValue: 1.6,
        attributeName: "压力高高:",
        Unit: "Mpa",
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
          isTitle: "补水泵",
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
    MpTw,
  },
};
</script>

<style scoped></style>
