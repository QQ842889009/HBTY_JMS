<template>
  <div class="control">
    <div>{{ parameter.tipName }}</div>
    <div>
      <el-switch
        :value="count"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="1"
        inactive-value="0"
        :active-text="parameter.onText"
        :inactive-text="parameter.offText"
        @change="change($event)"
      >
      </el-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "twOnOff",
  data() {
    return {
      setConValue: "0", //用于记录点击前的状态
      bind: true, //用于获取与失去焦点是否解除绑定
    };
  },
  computed: {
    count() {
      if (this.bind) {
        this.setConValue = this.parameter.getConValue.toString();
        return this.parameter.getConValue.toString();
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
          tipName: "水泵启停",
          onText: "启动",
          offText: "关闭",
          setConAttribute: "BP1C", //设置的控制的属性BP1C或者BP2C
          getConValue: 1,

          SidValue: "??", //需要传递的是更改的那个站的站号，例如03
        };
      },
    },
  },
  methods: {
    change(event) {
      this.bind = false;
      console.log(event + "------------------");
      this.$confirm("是否修改？")
        .then(() => {
          let setValue = event.toString();
          let setAttribute = this.parameter.setConAttribute;
          let msg = {
            userName: "admin",
            sid: this.parameter.SidValue.toString(),
            plcTag: setAttribute,
            tagValue: setValue,
          };
          if (this.$stompClient.connected === true) {
            this.$stompClient.send(
              this.$store.getters.wtS7EventB,
              {},
              JSON.stringify(msg)
            );
            console.log(JSON.stringify(msg));
            console.log(this.$store.getters.wtS7EventB);
          }

          // if (this.$socket1) {
          //   this.$socket1.emit(this.parameter.eventName, msg);
          //   console.log(this.parameter.eventName, msg);
          // }
          else {
            console.log("水泵控制失败");
          }
          this.bind = true;
        })
        .catch(() => {
          this.bind = true;
        });
    },
  },
};
</script>

<style scoped>
.el-switch__core {
  width: 30px !important;
  height: 16px;
}
.el-switch__core::after {
  width: 14px;
  height: 14px;
  margin-top: -1px;
}
.el-switch.is-checked .el-switch__core::after {
  margin-left: -15px;
}
.control {
  color: rgb(20, 20, 20);
  width: 130px;
  height: 90px;
  border: 2px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
