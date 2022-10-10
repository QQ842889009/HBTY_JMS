<template>
  <div class="DLmain">
    <!--  向外暴露 相对位置、显示隐藏、填写的变量、单位-->
    <!--  要单独暴露，显示位置的标签的显示和隐藏,默认值是隐藏的-->
    <div
      class="textValue"
      v-if="stylePosition.textShow"
      :style="{ left: xLeft, top: xTop }"
      @mousedown="moveTwo($event)"
    >
      <div :content="xLeft + xTop" :disabled="tipShow">
        <div class="header">
          <div class="svgBox">
            <div class="svgIco">
              <icon-svg icon-class="wudianzha" v-show="getValueA < 360" />
              <icon-svg icon-class="dianzha" v-show="getValueA > 360" />
              <icon-svg icon-class="wudianzha" v-show="getValueB < 360" />
              <icon-svg icon-class="dianzha" v-show="getValueA > 360" />
              <icon-svg icon-class="wudianzha" v-show="getValueA < 360" />
              <icon-svg icon-class="dianzha" v-show="getValueA > 360" />
            </div>
            <div class="svgABC">
              <div class="svgText">
                <span>{{ getValueA }}</span>
                <pre>{{ stylePosition.Unit }}</pre>
              </div>
              <div class="svgText">
                <span>{{ getValueB }}</span>
                <pre>{{ stylePosition.Unit }}</pre>
              </div>
              <div class="svgText">
                <span>{{ getValueC }}</span>
                <pre>{{ stylePosition.Unit }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    getValueA: {
      type: Number,
      default: 999,
    }, //父组件过来的显示值，子组件不能更改
    getValueB: {
      type: Number,
      default: 999,
    }, //父组件过来的显示值，子组件不能更改
    getValueC: {
      type: Number,
      default: 999,
    }, //父组件过来的显示值，子组件不能更改
    stylePosition: {
      type: Object,
      default: function () {
        return {
          textShow: true,
          textLeft: "100px",
          textTop: "100px",
          attributeName: "一供温度:",
          Unit: "℃",
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
// .DLmain {
//   width: 100px;
//   height: 100px;
// }
.textValue {
  position: absolute;
  z-index: 5;
}

/*  */
.header {
  width: 200px;
  border-radius: 5px;
  // border: 1px solid #000;
  background: rgba(13, 71, 158, 0.5);
  // display: flex;
  // justify-content: flex-start;
  // align-items: center;
  color: black;
  font-weight: 100;
  .svgBox {
    display: flex;
    flex-direction: column;
    .svgIco {
      // border: 1px solid #000;
      display: flex;
      justify-content: space-between;
    }
    .svgABC {
      border-top: 1px solid #000;
      display: flex;
      justify-content: space-between;
      .svgText {
        display: flex;
        span {
          /*width: 1px;*/
          /*height: 0.65px;*/
          font-size: 25px;
          line-height: 32.5px;
          /*background-color: red;*/
        }

        :last-child {
          /*background-color: red;*/
          /*color: white;*/
          font-size: 20px;
          transform: translateY(5px);
          // color: lightslategrey;
          color: black;
          /*border-bottom: 3px solid #409EFF;*/
          /*margin-left: 5px;*/
          /*margin-right: 10px;*/
        }
      }
    }
  }
}
</style>
