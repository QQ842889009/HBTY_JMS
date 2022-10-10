<template>
  <div>
    <div class="header">
      <pre>{{ parameter.attributeName }}</pre>
      <el-divider direction="vertical" style="border: 5px"></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo1",
  data() {
    return {};
  },

  computed: {},

  props: {
    parameter: {
      type: Object,
      default: function () {
        return {
          attributeName: "",
        };
      },
    },
  },
  methods: {},
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