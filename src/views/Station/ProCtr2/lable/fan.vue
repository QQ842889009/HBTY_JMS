<template>
  <!-- 总的盒子，要考虑层数 -->
  <div class="mpTwBox">
    <!--  向外暴露 相对位置、显示隐藏、填写的变量、单位-->
    <!--  要单独暴露，显示位置的标签的显示和隐藏,默认值是隐藏的-->
    <!-- 整体的模块，它的位置决定了这个组件的位子，鼠标移动的就是此div的位置 -->
    <div
      class="textValue"
      v-if="stylePosition.textShow"
      :style="{ left: xLeft, top: xTop }"
      @mousedown="moveTwo($event)"
    >
      <!-- 头部的标签直接吸收外部变量传递过来的参数名称 -->
      <el-tooltip placement="top" :content="stylePosition.attributeName">
        <!-- 主体 -->

        <!-- 底部标签显示，主要显示的是当前盒子的位置，可以通过全局变量关掉显示 -->
        <el-tooltip :content="xLeft + xTop" :disabled="tipShow">
          <div class="header">
            <img :src="varImag" style="float: left; z-index: 9" />
          </div>
        </el-tooltip>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import FAN from "assets/img/gykz/fan.gif";
import SFAN from "assets/img/gykz/sFan.png";
export default {
  name: "Demo1",
  data() {
    return {
      xLeft: "",
      xTop: "",
      FAN,
      SFAN,
      varImag: FAN,
      imageShow: true, //用来表示主体是否隐藏
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
    // this.fanShow;
  },
  updated() {
    this.initPosition; //保证了每次更改位置的时候都会变化，否则不能改变每个变量在不同站的位置
    // this.fanShow;
  },
  watch: {
    getValue: {
      handler(newVal, oldVal) {
        if (newVal > 3 || newVal == true) {
          this.varImag = this.FAN;
        } else {
          this.varImag = this.SFAN;
        }
      },
      // deep:true,
      immediate: true, //立即执行函数
    },
  },
  props: {
    getValue: {
      type: Number,
      default: 99.9,
    }, //父组件过来的显示值，子组件不能更改
    stylePosition: {
      type: Object,
      default: function () {
        return {
          textShow: true,
          textLeft: "400px",
          textTop: "400px",
          attributeName: "一次网风扇:",
        };
      },
    },
  },
  methods: {
    // fanShow(){
    // if(this.getValue>5){

    //   this.varImag =this.FAN;
    // }else{
    //   this.varImag =this.SFAN;
    // }

    // },
    moveTwo(event) {
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
  //   border-bottom: 2px #dcdfe6 solid;
  //   display: flex;
  //   justify-content: flex-start;
  //   align-items: center;
  //   color: white;
  //   font-weight: 300;
  //   span {
  // width: 1rem;
  // height: 1.65rem;
  //     font-size: 0.5rem;
  //     line-height: 0.65rem;
  //     /*background-color: red;*/
  // }
}
.mpTwBox {
  position: relative;
  z-index: 0;
}
</style>
