<template>
  <div>
    <div class="header">
      <pre>{{ parameter.attributeName }}</pre>
      <!--  el-divider分割线     -->
      <el-divider direction="vertical" style="border: 5px"></el-divider>
      <input
        type="number"
        :value="count"
        @keyup.enter="submit($event)"
        @focus="getFocus($event)"
        @blur="lostFocus"
        @input="limitValue($event)"
      />
      <!--       <input type="text" v-model.lazy="setValue"  @keyup.enter="submit($event)" onfocus="this.select()" @input = "limitValue($event)">-->
      <pre>{{ parameter.Unit }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo1",
  data() {
    return {
      setConValue: "0", //用于记录点击前的状态
      bind: true, //用于获取与失去焦点是否解除绑定
    };
  },
  computed: {
    count() {
      if (this.bind) {
        this.setConValue = this.parameter.getValue;
        return this.parameter.getValue;
      } else {
        return this.setConValue;
      }
    },
  },
  props: {
    parameter: {
      type: Object,
      default: function () {
        return {
          eventName: "", //发送事件的名称
          SidValue: "", //需要传递的是更改的那个站的站号，例如03
          setAttribute: "", //需要传递，改的属性，例如BP1SP
          getValue: "", //父组件过来的显示值，子组件不能更改
          minValue: 0,
          maxValue: 100,
          attributeName: "面积",
          Unit: "W㎡",
        };
      },
    },
  },
  methods: {
    //保证输入的值再最大值和最小值的范围之内
    limitValue(event) {
      if (event.target.type === "number") {
        if (event.target.value > this.parameter.maxValue) {
          event.target.value = this.parameter.maxValue;
        }
        if (event.target.value < this.parameter.minValue) {
          event.target.value = this.parameter.minValue;
        }
        //保证只能输入数字
        event.target.value = event.target.value.replace(/[^\d]/g, "");
      }
    },
    //失去焦点，绑定父组件的值
    lostFocus() {
      this.bind = true;
    },
    //获得焦点，打断计算属性中父组件的值
    getFocus(event) {
      event.target.select();
      this.bind = false;
    },
    submit(event) {
      let setValue = event.target.value.toString();
      let setAttribute = this.parameter.setAttribute;
      let msg = {
        Sid: this.parameter.SidValue.toString(),
        [setAttribute]: setValue,
      };

      if (this.$socket1) {
        this.$socket1.emit(this.parameter.eventName, msg);
        console.log(msg);
      } else {
        console.log("请求更改站内数据twInputPopNum失败");
      }

      //点击回车后失去焦点
      event.target.blur();
    },
  },
};
</script>

<style lang="less"  scoped>
/*  #radiox{*/

/*    width: 15%;*/
/*    height: 50%;*/
/*    padding-top: 20px;*/
/*    display: flex;*/

/*  }*/
/*div{*/
/*  margin-left: 50px;*/
/*}*/
/*  p{*/
/*    font-size: 12px;*/
/*    color: white;*/
/*  }*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
input {
  -moz-appearance: textfield;
  background: #ffffff;
  border: 2px solid gray;
  border-radius: 5px;
  width: 1.8rem;
  height: 0.6rem;
  font-size: 0.5rem;
}

/*  */
.header {
  /*width: 4.8rem;*/
  /*height: 1.11rem;*/
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  :first-child {
    color: white;
    font-size: 0.4rem;
    border-bottom: 3px solid #409eff;
    margin-left: 0.2rem;
  }
  :last-child {
    color: white;
    font-size: 0.4rem;
    border-bottom: 3px solid #409eff;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
}
</style>