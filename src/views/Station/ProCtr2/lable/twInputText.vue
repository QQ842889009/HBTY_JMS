<template>
  <div>
    <div class="header">
      <pre>{{ parameter.attributeName }}</pre>
      <el-divider direction="vertical" style="border: 5px"></el-divider>
      <!--       <input type="text" v-model.lazy="count"  @keyup.enter="submit($event)" onfocus="this.select()" >-->
      <input
        type="text"
        :value="count"
        @keyup.enter="submit($event)"
        @focus="getFocus($event)"
        @blur="lostFocus"
      />

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
          getValue: "", //父组件过来的显示值，子组件不能更改例如BP1SP的值
          attributeName: "",
        };
      },
    },
  },
  methods: {
    //失去焦点，绑定父组件的值
    lostFocus() {
      this.bind = true;
    },
    //获得焦点，打断计算属性中父组件的值
    getFocus(event) {
      event.target.select();
      this.bind = false;
    },
    // submit(event){
    //   let setValue = event.target.value.toString();
    //   let setAttribute = this.parameter.setAttribute;
    //   let msg = {Sid:this.parameter.SidValue.toString(),[setAttribute]:setValue}

    //   if(this.$socket1){
    //     this.$socket1.emit(this.parameter.eventName,msg)
    //     console.log(msg);
    //   }else{
    //     console.log("请求更改站内数据twInputPopNum失败");
    //   }
    //   //点击回车后失去焦点
    //   event.target.blur();
    // }
    // ---------------------------------------------------------------------------
    submit(event) {
      let setValue = event.target.value.toString();
      let setAttribute = this.parameter.setAttribute;
      let setSid = this.parameter.SidValue;
      let msg = {
        sid: setSid.toString(),
        sname: "admin",
        fieldName: setAttribute,
        fieldValue: setValue,
      };

      console.log(this.$stompClient);
      if (this.$stompClient.connected === true) {
        this.$stompClient.send(
          this.parameter.eventName,
          {},
          JSON.stringify(msg)
        );
        console.log(JSON.stringify(msg));
        console.log(this.parameter.eventName);
        // this.$stompClient.subscribe("/info/wtOnStationInfo", (msg) => {
        //   //  msg.body存放的是服务端发送json字符串的形式，需要转化为json对象的形式，然后拿到里面的map对象，直接点是不行的
        //   // console.log(JSON.parse(msg.body).map); // msg.body存放的是服务端发送给我们的信息
        //   console.log("我正在监听更改后的信息数据");
        //   console.log(JSON.parse(msg.body));
        //   // manageData.manageInfoData(JSON.parse(msg.body));
        // });
      } else {
        console.log("请求更改站内数据twInputText失败");
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
  width: 2.2rem;
  height: 0.65rem;
  font-size: 0.5rem;
}

/*  */
.header {
  /*width: 5.2rem;*/
  /*height: 1.11rem;*/
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
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