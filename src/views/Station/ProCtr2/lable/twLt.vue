<template>
  <div>
    <!--  向外暴露 相对位置、显示隐藏、填写的变量、单位-->
    <!--  要单独暴露，显示位置的标签的显示和隐藏,默认值是隐藏的-->
    <div
      class="textValue"
      v-if="stylePosition.textShow"
      :style="{ left: xLeft, top: xTop }"
      @mousedown="moveTwo($event)"
    >
      <el-tooltip
        placement="top"
        :content="stylePosition.attributeName"
        effect="light"
      >
        <el-tooltip :content="xLeft + xTop" :disabled="tipShow">
          <div class="header">
            <div class="bloke" :style="{ height: getValue }"></div>
          </div>
        </el-tooltip>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo1",
  data() {
    return {
      xLeft: "",
      xTop: "",
    };
  },
  computed: {
    initPosition() {
      this.xLeft = this.stylePosition.textLeft;
      this.xTop = this.stylePosition.textTop;
    },
    tipShow() {
      return this.$store.state.tipShow;
    },
  },
  created() {
    this.initPosition;
  },
  updated() {
    this.initPosition; //保证了每次更改位置的时候都会变化，否则不能改变每个变量在不同站的位置
  },
  props: {
    getValue: {
      type: String,
      default: "10%",
    }, //父组件过来的显示值，子组件不能更改
    stylePosition: {
      type: Object,
      default: function () {
        return {
          textShow: true,
          textLeft: "285px",
          textTop: "791px",
          attributeName: "液位:",
        };
      },
    },
  },
  methods: {
    moveTwo(event) {
      if (!this.tipShow) {
        let disX = event.layerX;
        let disY = event.layerY;
        document.onmousemove = (e) => {
          let left = e.clientX - disX;
          let top = e.clientY - disY;
          this.xLeft = left + "px";
          this.xTop = top + "px";
        };
        document.onmouseup = (e) => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    },
  },
};
</script>

<style lang="less" scoped>
.textValue {
  position: absolute;
  z-index: 5;
}

/*  */
.header {
  // border: 2px solid rgb(100, 97, 97);
  width: 75px;
  height: 135px;
  display: flex;
  flex-direction: column-reverse;
  // background-color: #fff;
  .bloke {
    width: 100%;
    background-color: rgb(15, 241, 27);
  }
}
</style>
