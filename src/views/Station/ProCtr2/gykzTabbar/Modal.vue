<template>
  <div>
    <el-tooltip :content="xLeft + xTop">
      <!--        <div class="modal-container" :style="{left:xleft,top:xtop,width:xWidth,height:xHeight}" v-show="xShow">-->
      <!--内容层容器:class="position" @mousemove="modalMove" @mouseup="cancelMove"-->
      <div
        class="modal-container"
        v-show="xShow"
        :style="{ left: xLeft, top: xTop, width: xWidth, height: xHeight }"
        @mousedown="moveTwo($event)"
      >
        <!--内容层容器:class="position" @mousemove="modalMove" @mouseup="cancelMove"-->

        <div class="modal-header">
          <!--内容层表头 -->
          <!--标题和关闭按钮-->
          <span>{{ title }}</span>
          <el-button
            type="danger"
            icon="el-icon-close"
            circle
            size="mini"
            @click="hideModal"
          />
        </div>
        <div class="modal-main">
          <!--主体-->
          <slot name="text"></slot>
        </div>
      </div>
    </el-tooltip>
  </div>
  <!--</div>-->
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      xLeft: "",
      xTop: "",
    };
  },

  computed: {
    initPosition() {
      this.xLeft = this.modalLeft;
      this.xTop = this.modalTop;
    },
  },
  created() {
    this.initPosition;
  },
  updated() {
    this.initPosition;
  },
  props: {
    modalLeft: {
      type: String,
      default: "300px",
    },
    modalTop: {
      type: String,
      default: "100px",
    },

    xShow: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "弹出框",
    },
    xWidth: {
      type: String,
      default: "300px",
    },
    xHeight: {
      type: String,
      default: "150px",
    },
  },
  methods: {
    // //鼠标按下触发移动的动作，此处之移动弹出框
    // moveTwo(event){
    //   let odiv = event.target;        //获取目标元素
    //   //算出鼠标相对元素的位置
    //   let disX = event.layerX - odiv.offsetLeft
    //   let disY = event.layerY - odiv.offsetTop;
    //   document.onmousemove = (e)=>{       //鼠标按下并移动的事件
    //     //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
    //     let left = e.layerX - disX;
    //     let top = e.layerY - disY;
    //
    //     //移动当前元素
    //     this.xleft = left + 'px';
    //     this.xtop = top + 'px';
    //
    //   };
    //   document.onmouseup = (e) => {
    //     document.onmousemove = null;
    //     document.onmouseup = null;
    //   };
    // },
    //
    //
    moveTwo(event) {
      //这里重点理解layer是针对的被移动元素的定位的父元素的距离，
      console.log(event); //
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
        this.xLeft = left + "px";
        this.xTop = top + "px";
      };
      //这里事件本应该时被点击对象的，但是当移动对象和别的标签重合时，会失去事件触发
      //所以改为全局的document的事件。
      //鼠标抬起同时停止移动事件停止鼠标按下事件
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },

    //

    //只需要传一个动作，不需要传值，动作过去直接将外部显示值复位即可
    hideModal() {
      this.$emit("hideModal");
    },
  },
};
</script>

<style scoped lang="less">
.modal-container {
  font-size: 25px;
  background: gainsboro;
  border-radius: 0.22rem; //圆角
  overflow: hidden; //自动撑开
  position: absolute;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.modal-header {
  /*padding决定了框的大小*/
  padding: 7.5px 10px;
  background: whitesmoke;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: move;
}

.modal-main {
  margin: 20px 25px;
}
.item {
  margin: 4px;
}
</style>
