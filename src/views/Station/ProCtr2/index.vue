<template>
  <div class="gykz">
    <gykz-tab-bar
      :Sta="stationX"
      @selectedStation="changedStation"
      style="float: left"
    />

    <gykz-box
      :statX="statX"
      :stylePosition="stylePositionFix"
      :flowSheet="flowSheet"
      :getStation="getStation"
    ></gykz-box>
  </div>
</template>

<script>
// GykzTabBar引入菜单
import GykzTabBar from "views/Station/ProCtr2/gykzTabbar/GykzTabBar";

import twTextValue from "views/Station/ProCtr2/lable/twTextValue";
import { sta_sid } from "views/Station/ProCtr2/filtTool";
// GykzBox编辑画面要显示的变量，但是具体每个变量的位置要在下面的函数stylePosition进行预设值
import GykzBox from "views/Station/ProCtr2/GykzStation/GykzBox";
//sta111为一类站的参数信息，再这里更改每个站的单个点的位置信息，以及是否显示隐藏等等
import stylePosition from "views/Station/ProCtr2/Sta111";

//引入图片
import jms01 from "assets/img/gykz/jms01.png";
import jms02 from "assets/img/gykz/jms02.png";

import jms from "assets/img/gykz/JMS.png";
export default {
  name: "Gykz",
  data() {
    return {
      flowSheet: jms01,
      jms01,
      jms02,

      stylePosition,
      // 给将要引用的站的变量赋一个初值，不然的话不会实时性
      // stylePositionFix: stylePosition.stylePositionX,
      stylePositionFix: {},
      getStation: "1#站(天福东)高",
      changedSid: 1,
      varPar: {
        showX: "true", //点击位置显示和隐藏
        varType: "AI",
        varName: "BP1FB",
        clickLeft: "600PX",
        clickTop: "100PX",
      },
    };
  },
  created() {
    this.staPosition;
  },
  computed: {
    //利用js文件内的导出数据，赋值给计算属性的函数,给第一个画面初始值
    staPosition() {
      this.stylePositionFix = this.stylePosition.stylePosition01;
    },
    wtS7DatasX() {
      return this.$store.getters.stationDataAndInfo;
    },
    statX() {
      let arr = this.$store.getters.stationDataAndInfo;
      return arr[this.changedSid];
    },
    stationX() {
      return this.$store.getters.wtS7SplitData.station;
    },
  },
  methods: {
    changedStation(refInfo) {
      this.changedSid = sta_sid(this.wtS7DatasX, refInfo.command);
      console.log(this.changedSid);
      this.getStation = refInfo.command;
      //更改站点对应的图和站点对应的变量位置佳木斯因为偷懒只用了一张图实现，并没有写站点
      switch (refInfo.command) {
        case "1#站(天福东)高":
        case "2#站(天福城)A":
        case "3#站(天福西)挂":
        case "3#站(天福西)小":
        case "4#站(天福D)低":
        case "4#站(天福D)高":
        case "5#站(鱼水情)":
        case "7#站(水利三处)":
        case "8#站(四丰小镇)东":
        case "8#站(四丰小镇)西":
        case "9#(御园)":
        case "学城名筑低区":
        case "学城名筑高区":
        case "体育场":
          this.flowSheet = this.jms01;
          this.stylePositionFix = this.stylePosition.stylePosition01;
          break;
        case "1#站(天福东)挂":
        case "1#站(天福东)低":
        case "3#站(天福西)低":
        case "3#站(天福西)高":
        case "6#站(四丰湖)外":
        case "6#站(四丰湖)里":
          this.flowSheet = this.jms02;
          this.stylePositionFix = this.stylePosition.stylePosition02;
          break;
      }
    },
    moveOne(event) {
      //这里重点理解layer是针对的被移动元素的定位的父元素的距离，
      // console.log(event);//enebt
      //mousedown { target: div.tuo, buttons: 1, clientX: 574, clientY: 123, layerX: 121, layerY: 88 }
      //触发此事件后生成clientX: 574, clientY: 123,----当前鼠标相对浏览器的位置
      //layerX: 121, layerY: 88 ----当前鼠标相对于被点击标签的相对位置
      //如果没有这一步，每次点击完标签，鼠标都会跑到左上角，按照左上角进行定位
      //有了此步，下面的位置减去这个值，保证鼠标点击的位置重新定位而不再是左上角
      let disX = event.layerX;
      let disY = event.layerY;

      //获取鼠标的位置
      document.onmousemove = (e) => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;
        //移动当前元素
        this.bleft = left + "px";
        this.btop = top + "px";
      };
      //这里事件本应该时被点击对象的，但是当移动对象和别的标签重合时，会失去事件触发
      //所以改为全局的document的事件。
      //鼠标抬起同时停止移动事件停止鼠标按下事件
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
  },
  components: {
    GykzTabBar,
    twTextValue,
    GykzBox,
  },
};
</script>

<style lang="less" scoped>
.gykz {
  position: relative;
  width: 100%;
  height: 100%;

  // background: #6699a1;
  background: rgba(13, 196, 26, 0.5);
}
</style>
