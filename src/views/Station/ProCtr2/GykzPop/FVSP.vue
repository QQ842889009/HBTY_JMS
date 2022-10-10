<template>
  <div>
    <fv-tw
      :stylePosition="stylePosition"
      :switchAutoMan="switchAutoMan"
      :SPHpar="SPHpar"
      :SPLpar="SPLpar"
      :SPpar="SPpar"
      :FBpar="FBpar"
      :PTSPpar="PTSPpar"
      :PTFBpar="PTFBpar"
    />
  </div>
</template>

<script>
import FvTw from "views/Station/ProCtr2/gykzTabbar/FvTw";

export default {
  name: "FVSP",
  data() {
    return {};
  },
  computed: {
    SPHpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "FV1SP_H", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.FV1SP_H, //父组件过来的显示值，子组件不能更改
        minValue: 0,
        maxValue: 100,
        attributeName: "开度高限:",
        Unit: "%",
      };
    },
    SPLpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "FV1SP_L", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.FV1SP_L, //父组件过来的显示值，子组件不能更改
        minValue: 0,
        maxValue: 100,
        attributeName: "开度低限:",
        Unit: "%",
      };
    },

    switchAutoMan() {
      return {
        tipName: "手自动切换",
        onText: "自动",
        offText: "手动",
        setConAttribute: "MA_FV1", //设置的控制的属性BP1C或者BP2C
        getConValue: parseInt(!this.statX.MA_FV1),

        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
      };
    },
    SPpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "FV1SP", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.FV1SP, //父组件过来的显示值，子组件不能更改
        minValue: 0,
        maxValue: 100,
        attributeName: "开度给定:",
        Unit: "%",
      };
    },

    FBpar() {
      return {
        attributeName: "开度反馈:",
        getValue: this.statX.FV1FB, //父组件过来的显示值
        Unit: "%",
      };
    },
    PTSPpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "TE21SP", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.TE21SP, //父组件过来的显示值，子组件不能更改
        minValue: 0.0,
        maxValue: 150.0,
        attributeName: "温度设定:",
        Unit: "℃",
      };
    },

    PTFBpar() {
      return {
        attributeName: "二供温度:",
        getValue: this.statX.TE21, //父组件过来的显示值
        Unit: "℃",
      };
    },
  },

  props: {
    stylePosition: {
      type: Object,
      default: function () {
        return {
          clickShow: true, //点击位置显示和隐藏
          modalLeft: "30px", //弹出框的偏移量
          modalTop: "100ox", //弹出框的偏移量
          isTitle: "一网阀门",
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
    FvTw,
  },
};
</script>

<style scoped></style>
