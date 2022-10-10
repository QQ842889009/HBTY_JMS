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
      />
    </el-tooltip>
    <div style="margin-top: auto">
      <Modal
        :xShow="xShow"
        :title="stylePosition.isTitle"
        @hideModal="hideModal"
        xWidth="575px"
        xHeight="300px"
        :modalLeft="stylePosition.modalLeft"
        :modalTop="stylePosition.modalTop"
      >
        <!--:title="title"-->

        <!--调节部分-->

        <div class="a" slot="text">
          <div class="adjust">
            <div class="b-a">
              <tw-input-pop-num :parameter="SPHpar" />
            </div>
            <div class="b-b">
              <tw-input-pop-num :parameter="SPLpar" />
            </div>
          </div>
          <!--限制部分-->
          <div class="adjust">
            <div class="b-a">
              <tw-input-pop-num :parameter="SPpar" />
            </div>
            <div class="b-b">
              <tw-text-pop-value :parameter="FBpar" />
            </div>
          </div>
        </div>
        <div class="a" slot="text">
          <!--手自动部分-->
          <div>
            <tw-on-off :parameter="switchAutoMan" />
          </div>
          <!--运行状态-->
          <div class="state"></div>
          <!--压力设定部分-->
          <div class="adjust PT">
            <!-- <div class="b-a"> -->
            <div>
              <tw-input-pop-num :parameter="PTSPpar" />
            </div>
            <!-- <div class="b-b"> -->
            <div>
              <tw-text-pop-value :parameter="PTFBpar" />
            </div>
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
import twOnOff from "views/Station/ProCtr2/lable/twOnOff";
export default {
  name: "BP",
  data() {
    return {
      title: "一网阀门调节",
      xShow: false,

      setConValue: "", //开关的状态1/2
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
          clickShow: "true", //点击位置显示和隐藏
          modalLeft: "300px", //弹出框的偏移量
          modalTop: "100px", //弹出框的偏移量
          isTitle: "一网阀门",
          clickLeft: "300px",
          clickTop: "50px",
        };
      },
    },

    switchAutoMan: {
      type: Object,
      default: function () {
        return {
          tipName: "手自动切换",
          onText: "自动",
          offText: "手动",
          setConAttribute: "MA_FV1_TE21", //设置的控制的属性BP1C或者BP2C
          getConValue: 0,

          SidValue: "88", //需要传递的是更改的那个站的站号，例如03
        };
      },
    },
    //频率给定的值
    SPpar: {
      type: Object,
      default: function () {
        return {
          SidValue: "", //需要传递的是更改的那个站的站号，例如03
          setAttribute: "", //需要传递，改的属性，例如BP1SP
          getValue: 30, //父组件过来的显示值，子组件不能更改
          minValue: 0,
          maxValue: 100,
          attributeName: "开度设定:",
          Unit: "%",
        };
      },
    },
    FBpar: {
      type: Object,
      default: function () {
        return {
          attributeName: "开度反馈:",
          getValue: "30", //父组件过来的显示值
          Unit: "%",
        };
      },
    },

    //高限给定的值
    SPHpar: {
      type: Object,
      default: function () {
        return {
          SidValue: "", //需要传递的是更改的那个站的站号，例如03
          setAttribute: "", //需要传递，改的属性，例如BP1SP
          getValue: 30, //父组件过来的显示值，子组件不能更改
          minValue: 0,
          maxValue: 100,
          attributeName: "开度高限:",
          Unit: "%",
        };
      },
    },
    SPLpar: {
      type: Object,
      default: function () {
        return {
          SidValue: "", //需要传递的是更改的那个站的站号，例如03
          setAttribute: "", //需要传递，改的属性，例如BP1SP
          getValue: 30, //父组件过来的显示值，子组件不能更改
          minValue: 0,
          maxValue: 100,
          attributeName: "开度低限:",
          Unit: "%",
        };
      },
    },

    //压力给定的值
    PTSPpar: {
      type: Object,
      default: function () {
        return {
          SidValue: "", //需要传递的是更改的那个站的站号，例如03
          setAttribute: "", //需要传递，改的属性，例如BP1SP
          getValue: 0.3, //父组件过来的显示值，子组件不能更改
          minValue: 0.0,
          maxValue: 150.0,
          attributeName: "温度设定:",
          Unit: "℃",
        };
      },
    },
    PTFBpar: {
      type: Object,
      default: function () {
        return {
          attributeName: "二供温度:",
          getValue: "30", //父组件过来的显示值
          Unit: "℃",
        };
      },
    },
  },
  components: {
    Modal,
    twInputPopNum,
    twTextPopValue,
    twOnOff,
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
    myKeyDown(OValue) {
      this.$emit("confirmWSP", OValue);
      console.log(OValue);
    },
    change() {
      this.$confirm("是否修改？")
        .then(() => {
          this.$emit("confirmOneValue", this.value);
          console.log(this.value);
        })
        .catch(() => {
          this.value = !this.value;
        });
    },

    confirmConValue(setConValue) {},
  },
};
</script>
<style scoped lang="less">
div {
  font-size: 20px;
}
.mpTwBox {
  position: relative;
  z-index: 8;
}
.clickLoc {
  width: 50px;
  height: 50px;
  position: absolute;
  cursor: pointer;
  background: rgba(128, 110, 110, 0.1);
  border-radius: 10px;
}
.state {
  /*font-size:35px;*/
  width: 60px;
  height: 90px;
  border: 2px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.d-a {
  font-size: 35px;
}
.d-d {
  color: red;
}
.a {
  /*height: 100px;*/
  /*width:500px;*/
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
}

.adjust {
  border: 2px solid gray;
  width: 250px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.PT {
  height: 95px;
  padding-left: 10px;
}
</style>
