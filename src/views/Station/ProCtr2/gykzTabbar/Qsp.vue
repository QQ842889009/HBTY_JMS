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
        xWidth="11.5rem"
        xHeight="6rem"
        :modalLeft="stylePosition.modalLeft"
        :modalTop="stylePosition.modalTop"
      >
        <!--:title="title"-->
        <div class="a" slot="text">
          <!--启动开关部分-->
          <div>
            <tw-on-off :parameter="switchOnOff" />
          </div>
          <!--运行状态-->
          <div class="state">
            <div
              v-show="FBpar.getValueS && !FBpar.getValueA"
              style="color: seagreen; font-weight: bold"
            >
              <p>运行</p>
              <div class="d-a">
                <i class="search-icon el-icon-circle-check"></i>
              </div>
            </div>
            <div v-show="!FBpar.getValueS && !FBpar.getValueA">
              <p>停止</p>
              <div class="d-a">
                <i class="search-icon el-icon-remove-outline"></i>
              </div>
            </div>
            <div v-show="FBpar.getValueA">
              <p>故障</p>
              <div class="d-a d-d">
                <i class="search-icon el-icon-warning"></i>
              </div>
            </div>
          </div>
          <!--调节部分-->
          <div class="adjust">
            <div class="b-a">
              <tw-text-pop-value :parameter="FBpar" />
            </div>
            <div class="b-b">
              <tw-input-pop-num :parameter="LTLLpar" />
            </div>
          </div>
        </div>
        <div class="a" slot="text">
          <!--手自动部分-->
          <div>
            <tw-on-off :parameter="switchAutoMan" />
          </div>
          <!--运行状态-->
          <div class="state">
            <!-- <div
              v-show="FBpar.getValueS && !FBpar.getValueA"
              style="color: seagreen; font-weight: bold"
            >
              <p>运行</p>
              <div class="d-a">
                <i class="search-icon el-icon-circle-check"></i>
              </div>
            </div>
            <div v-show="!FBpar.getValueS && !FBpar.getValueA">
              <p>停止</p>
              <div class="d-a">
                <i class="search-icon el-icon-remove-outline"></i>
              </div>
            </div>
            <div v-show="FBpar.getValueA">
              <p>故障</p>
              <div class="d-a d-d">
                <i class="search-icon el-icon-warning"></i>
              </div>
            </div> -->
          </div>
          <!--压力设定部分-->
          <div class="adjust PT">
            <!-- <div class="b-a"> -->
            <div>
              <tw-input-pop-num :parameter="LTHpar" />
            </div>
            <!-- <div class="b-b"> -->
            <div>
              <tw-text-pop-value :parameter="LTpar" />
            </div>
            <div>
              <tw-input-pop-num :parameter="LTLpar" />
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
  name: "QSP",
  data() {
    return {
      title: "潜水泵",
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
          modalLeft: "6rem", //弹出框的偏移量
          modalTop: "2rem", //弹出框的偏移量
          isTitle: "深水井水泵",
          clickLeft: "6rem",
          clickTop: "1rem",
        };
      },
    },
    // 启动停止开关
    switchOnOff: {
      type: Object,
      default: function () {
        return {
          tipName: "水泵启停",
          onText: "启动",
          offText: "关闭",
          setConAttribute: "SBPC", //设置的控制的属性BP1C或者BP2C
          getConValue: 0,

          SidValue: "88", //需要传递的是更改的那个站的站号，例如03
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
          setConAttribute: "MP1_MA", //设置的控制的属性BP1C或者BP2C
          getConValue: 0,

          SidValue: "88", //需要传递的是更改的那个站的站号，例如03
        };
      },
    },
    //频率给定的值
    LTLLpar: {
      type: Object,
      default: function () {
        return {
          SidValue: "", //需要传递的是更改的那个站的站号，例如03
          setAttribute: "", //需要传递，改的属性，例如BP1SP
          getValue: 30, //父组件过来的显示值，子组件不能更改
          minValue: 0,
          maxValue: 100,
          attributeName: "液位低低:",
          Unit: "m",
        };
      },
    },
    FBpar: {
      type: Object,
      default: function () {
        return {
          getValueS: true,
          getValueA: false,
          attributeName: "频率反馈:",
          getValue: "30", //父组件过来的显示值
          Unit: "Hz",
        };
      },
    },
    //压力给定的值
    LTHpar: {
      type: Object,
      default: function () {
        return {
          SidValue: "", //需要传递的是更改的那个站的站号，例如03
          setAttribute: "", //需要传递，改的属性，例如BP1SP
          getValue: 0.3, //父组件过来的显示值，子组件不能更改
          minValue: 0,
          maxValue: 1.6,
          attributeName: "停泵液位:",
          Unit: "m",
        };
      },
    },
    LTpar: {
      type: Object,
      default: function () {
        return {
          getValueS: true,
          getValueA: false,
          attributeName: "当前液位:",
          getValue: "30", //父组件过来的显示值
          Unit: "m",
        };
      },
    },
    // 压力高高给定值
    LTLpar: {
      type: Object,
      default: function () {
        return {
          SidValue: "", //需要传递的是更改的那个站的站号，例如03
          setAttribute: "", //需要传递，改的属性，例如BP1SP
          getValue: 0.3, //父组件过来的显示值，子组件不能更改
          minValue: 0,
          maxValue: 1.6,
          attributeName: "起泵液位:",
          Unit: "m",
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
  font-size: 0.4rem;
}
.mpTwBox {
  position: relative;
  z-index: 8;
}
.clickLoc {
  width: 1rem;
  height: 1rem;
  position: absolute;
  cursor: pointer;
  background: rgba(128, 110, 110, 0.1);
  border-radius: 10px;
}
.state {
  /*font-size:35px;*/
  width: 1.2rem;
  height: 1.8rem;
  border: 2px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.d-a {
  font-size: 0.7rem;
}
.d-d {
  color: red;
}
.a {
  /*height: 100px;*/
  /*width:500px;*/
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
}

.adjust {
  border: 2px solid gray;
  width: 5rem;
  height: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.PT {
  height: 1.9rem;
  padding-left: 10px;
}
</style>
