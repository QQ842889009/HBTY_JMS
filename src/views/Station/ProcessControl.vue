
/** 换热站 工艺图*/
<template>
  <div class="card">
    <div class="card-box-container">
      <el-row :gutter="10">
        <el-col :span="3">
          <span class="t"></span>
          <span class="title">热力站列表</span>
          <div class="grid-content bg-purple">
            <div
              class="listCss"
              v-for="(item, index) in listArr"
              :key="index"
              :class="{ activeCss: activeVar == index }"
              @click="activeFunyi(item, index)"
            >
              {{ item }}
            </div>
          </div></el-col
        >
        <el-col :span="5">
          <span class="t"></span>
          <span class="title">单元列表</span>
          <div class="grid-content bg-purple">
            <div
              class="listCss"
              v-for="(item2, index) in optionc"
              :key="item2.label"
            >
              <div
                v-for="(item4, i) in item2.children"
                :key="item4.label"
                @click="activeFuner(item4, i)"
                :class="{ activeCss: activeVarER == i }"
              >
                {{ item4.value }}
              </div>
            </div>
          </div></el-col
        >
        <el-col :span="16">
          <span class="t"></span>
          <span class="title">用户列表</span>
          <div class="grid-content bg-purple">
            <DoorCard :tableData="ShowData"></DoorCard>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="card-line">{{ ShowData }}</div>
  </div>
</template>

<script>
import DoorCard from "./DoorCard";
import dataStaPlan from "assets/js/sjzlData/sjzlDataPlanMeter";
export default {
  data() {
    return {
      activeVar: 0,
      activeVarER: 0,
      dataStaPlan,
      zfc: ["琥珀小区三期", "一号楼", "一单元"], //二级菜单拆分的字符串
      StationData: [], //数据列表

      ShowData: [], //展示数据
      listArr: ["二十五号站", "二十六号站"],
      screeningCondition: "二十五号站",
      optionc: [],
      options: [
        {
          value: "二十五号站",
          label: "47",
          children: [
            {
              value: "琥珀小区三期/一号楼/一单元",
              label: "1",
            },
            {
              value: "琥珀小区三期/一号楼/二单元",
              label: "2",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "3",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "4",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "5",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "6",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "7",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "8",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "9",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "10",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "11",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "12",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "13",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",

              label: "14",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "15",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "16",
            },
          ],
        },
        {
          value: "二十六号站",
          label: "147",
          children: [
            {
              value: "琥珀小区r期/一号楼/一单元",
              label: "11",
            },
            {
              value: "琥珀小区r期/一号楼/二单元",
              label: "12",
            },
            {
              value: "琥珀小区r期/一号楼/三单元",
              label: "13",
            },
          ],
        },
      ],
    };
  },
  created() {
    this.initDataFun();
    // this.activeFuner();
  },
  mounted() {
    this.forEachFun();
    // this.activeFunyi(this.listArr[0], 0);
  },
  methods: {
    activeFunyi(item, index) {
      console.log("选择站点", item);
      this.StationData = this.dataStaPlan.doorStation(
        this.$store.getters.get_doorDataAndInfo,
        item
      );

      this.screeningCondition = item;
      this.optionc = [];
      this.forEachFun();

      this.activeVar = index;
    },
    initDataFun() {
      this.StationData = this.dataStaPlan.doorStation(
        this.$store.getters.get_doorDataAndInfo,
        this.listArr[0]
      );
      this.ShowData = this.dataStaPlan.doorStationGG(
        this.StationData,
        this.zfc[0],
        this.zfc[1],
        this.zfc[2]
      );
    },
    forEachFun() {
      this.options.forEach((i) => {
        if (i.value === this.screeningCondition) {
          this.optionc.push(i);
        }
      });
    },

    activeFuner(v, i) {
      // console.log("二级菜单");
      console.log("二级菜单vvv", v);
      this.zfc = v.value.split("/");
      console.log("this.zfc", this.zfc);
      this.activeVarER = i;

      this.ShowData = this.dataStaPlan.doorStationGG(
        this.StationData,
        this.zfc[0],
        this.zfc[1],
        this.zfc[2]
      );
    },
  },
  components: {
    DoorCard,
  },
};
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  // background: red;
}
.t {
  background: #23bcca;
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  height: 0.6rem;
  width: 0.6rem;
  //margin: 0px 0px 20px 20px;
}
.title {
  margin: 20px 20px 20px 0px;
  // height: 30px;
  //background-color: gold;
  // padding: 0.6rem 2rem 2.2rem 0.8rem;
  font-size: 1.2rem;
  font-weight: 700;
}
.bg-purple {
  margin: 5px 0px 5px 0px;
  overflow-y: scroll; /*y轴滚动*/
  height: 590px;
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
  //background: #d3dce6;
}
.bg-purple-light {
  // background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.card {
  width: 100%;
  height: 100%;
  background-color: palegreen;
  border-radius: 24px;
}
.card-box-container {
  width: 100%;
  height: 70%;
  background-color: rgb(201, 14, 14);
}
.card-line {
  width: 100%;
  height: 30%;
  background-color: rgb(30, 235, 153);
}
.listCss {
  cursor: pointer;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  //background-color: palegreen;
  //border: 1px solid #ccc;
  float: left;
  // margin-right: 10px;
  border-color: #5473e8;
}
// 选中时的样式 (继承上方默认样式)
.activeCss {
  background: #f5f7fd;
  color: rgb(0, 0, 0);
  color: #5473e8;
  border-left: 0.4rem solid #5473e8;
}
</style>
