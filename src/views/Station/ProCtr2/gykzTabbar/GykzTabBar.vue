<template>
  <div>
    <el-dropdown
      split-button
      type="primary"
      trigger="click"
      @command="handleCommand"
    >
      {{ title }}
      <el-dropdown-menu slot="dropdown" class="dropdownMenu">
        <el-dropdown-item :command="item" v-for="item in Sta" :key="item.id">{{
          item
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "gykzTabBar",
  data() {
    return {
      title: this.Sta[0] || "请选择站点",
      indext: 0,
    };
  },
  props: {
    // 需要装载站点的数组
    Sta: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  destroyed() {
    console.log("我被销毁");
  },
  methods: {
    handleCommand(command) {
      this.title = command;
      let indext = this.selectedSta(command);
      // 同时将数组的索引和值一起传递给父组件
      let refInfo = { command, indext };
      // console.log(indext);
      this.$emit("selectedStation", refInfo);
    },
    // 下面的函数是一个根据传递过来的数组的一个值，找到相应的值在数组内的的索引值
    selectedSta(command) {
      let len = this.Sta.length;
      for (let i = 0; i < len; i++) {
        if (command === this.Sta[i]) {
          return i;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 1vw;
}
.dropdownMenu {
  height: 500px;
  width: 150px;
  overflow: auto;
}
</style>
