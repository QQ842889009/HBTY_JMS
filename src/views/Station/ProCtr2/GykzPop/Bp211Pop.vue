<template>
  <div>
    <b-p
      :stylePosition="stylePosition"
      :switchOnOff="switchOnOff"
      :SPpar="SPpar"
      :FBpar="FBpar"
    />
  </div>
</template>

<script>
import BP from "views/Station/ProCtr2/gykzTabbar/BP";
export default {
  name: "Bp211Pop",
  data() {
    return {};
  },
  computed: {
    switchOnOff() {
      return {
        tipName: "水泵启停",
        onText: "启动",
        offText: "关闭",
        setConAttribute: "BP21C", //设置的控制的属性BP1C或者BP2C
        getConValue: this.statX.BP21C,

        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
      };
    },
    SPpar() {
      return {
        SidValue: this.statX.Sid, //需要传递的是更改的那个站的站号，例如03
        setAttribute: "BP21SP", //需要传递，改的属性，例如BP1SP
        getValue: this.statX.BP21SP, //父组件过来的显示值，子组件不能更改
        minValue: 0,
        maxValue: 50,
        attributeName: "频率给定:",
        Unit: "Hz",
      };
    },

    FBpar() {
      return {
        getValueS: this.statX.BP21S,
        getValueA: this.statX.BP21A,
        attributeName: "频率反馈:",
        getValue: this.statX.BP21FB, //父组件过来的显示值
        Unit: "Hz",
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
          modalTop: "10px", //弹出框的偏移量
          isTitle: "循环水泵",
          clickLeft: "300px",
          clickTop: "10px",
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
    BP,
  },
};
</script>

<style scoped></style>
