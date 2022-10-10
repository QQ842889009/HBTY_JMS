<template>
  <div class="mpTwBox">
    <el-tooltip
      :content="stylePosition.isTitle + xLeft + xTop"
      :disabled="tipShow"
    >
      <div
        class="clickLoc"
        @click="isClick"
        v-show="stylePosition.clickShow"
        :style="{ left: xLeft, top: xTop }"
        @mousedown="moveOne($event)"
      ></div>
    </el-tooltip>
    <div>
      <Modal
        :xShow="xShow"
        :title="stylePosition.isTitle"
        @hideModal="hideModal"
        :modalLeft="stylePosition.modalLeft"
        :modalTop="stylePosition.modalTop"
      >
        <div class="a" slot="text">
          <div class="a-a">
            <tw-input-pop-num :parameter="SPpar" />
          </div>
          <div class="a-b">
            <tw-text-pop-value :parameter="FBpar" />
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script>
import Modal from "views/Station/ProCtr2/gykzTabbar/Modal";
import twInputPopNum from "views/Station/ProCtr2/lable/twInputPopNum";
import twTextPopValue from "views/Station/ProCtr2/lable/twTextPopValue";
import dropMove from "views/Station/ProCtr2/dropMove";

export default {
  name: "FM",
  data() {
    return {
      // title:'阀门调整',
      xShow: false, //弹出框的显示和隐藏
      value: "", //阀门量的给定
      //描述移动的定位
      xLeft: "",
      xTop: "",
    };
  },
  created() {
    this.initPosition;
  },
  updated() {
    this.initPosition;
  },
  computed: {
    initPosition() {
      this.xLeft = this.stylePosition.clickLeft;
      this.xTop = this.stylePosition.clickTop;
    },

    tipShow() {
      return this.$store.state.tipShow;
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
          modalTop: "100px", //弹出框的偏移量
          isTitle: "供水阀门",
          clickLeft: "200px",
          clickTop: "100px",
        };
      },
    },
    //给定的值
    SPpar: {
      type: Object,
      default: function () {
        return {
          eventName: "", //发送事件的名称
          SidValue: "", //需要传递的是更改的那个站的站号，例如03
          setAttribute: "", //需要传递，改的属性，例如BP1SP
          getValue: 30, //父组件过来的显示值，子组件不能更改
          minValue: 0,
          maxValue: 100,
          attributeName: "阀门给定:",
          Unit: "%",
        };
      },
    },
    FBpar: {
      type: Object,
      default: function () {
        return {
          attributeName: "阀门给定:",
          getValue: 30, //父组件过来的显示值
          Unit: "%",
        };
      },
    },
  },
  components: {
    Modal,
    twInputPopNum,
    twTextPopValue,
  },

  methods: {
    //鼠标按下触发移动的动作，此处之移动的弹出框的点击位置，最后要记录这个位置，填写到父组件的默认值里。
    moveOne(event) {
      if (!this.tipShow) {
        let odiv = event.target; //获取目标元素
        //算出鼠标相对元素的位置
        let disX = event.layerX;
        let disY = event.layerY;
        document.onmousemove = (e) => {
          //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;

          //移动当前元素
          this.xLeft = left + "px";
          this.xTop = top + "px";
        };
        document.onmouseup = (e) => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    },

    hideModal() {
      this.xShow = false;
      this.stylePosition.clickShow = true;
    },

    isClick() {
      this.xShow = true;
      this.stylePosition.clickShow = false;
    },
    myKeyDown(value) {
      this.$emit("confirmXSP", value);
      console.log(value);
    },
  },
};
</script>
<style scoped lang="less">
div {
  font-size: 20px;
}
.clickLoc {
  width: 40px;
  height: 50px;

  position: absolute;
  cursor: pointer;
  background: rgba(102, 99, 99, 0.1);
  border-radius: 10px;
}
.a-b {
  margin-top: 10px;
}
.mpTwBox {
  position: relative;
  z-index: 6;
}
</style>
