<template>
  <div>
    <div class="header">
      <pre>{{ parameter.attributeName }}</pre>
      <span>{{ parameter.getValue }}</span>
      <pre>{{ parameter.Unit }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo1",
  data() {
    return {};
  },
  created() {},
  props: {
    parameter: {
      type: Object,
      default: function () {
        return {
          attributeName: "阀门给定:",
          getValue: 30, //父组件过来的显示值，子组件不能更改
          Unit: "%",
        };
      },
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
/*  */
.header {
  color: rgb(20, 20, 20);
  font-weight: bolder;
  border-radius: 5px;
  display: flex;
  // justify-content: space-around;
  align-items: center;
  span {
    width: 95px;
    height: 32.5px;
    font-size: 25px;
    line-height: 32.5px;
    // background: chocolate;
  }
  :first-child {
    width: 105px;
    /*color: white;*/
    font-size: 22px;
    // /*border-bottom: 3px solid #409EFF;*/
    margin-right: 10px;
    // padding-right: 28px;
    // background: crimson;
  }
  :last-child {
    width: 25px;
    /*color: white;*/
    font-size: 22px;
    /*border-bottom: 3px solid #409EFF;*/
    // margin-left: 10px;
    margin-right: 5px;
  }
}
</style>
