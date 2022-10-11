<template>
  <div class="unit-container">
    <div class="condition-box"></div>
    <div class="zdt">整点报表</div>

    <div class="data">
      <div class="a">
        <SelectDateAndTime
          class="b"
          @dateandtime="Toinquirebutton"
        ></SelectDateAndTime>
      </div>
      <div class="c">
        <el-button class="d" @click="exportExcel('整点报表')"
          >导出报表</el-button
        >
      </div>
      <!-- <div class="data1"> -->
      <!-- <SelectDateAndTime
        class="data1-1"
        @dateandtime="Toinquirebutton"
      ></SelectDateAndTime> -->

      <!-- <div class="data1-2">
        <el-button @click="exportExcel('整点报表')">导出</el-button>
      </div> -->
      <!-- </div> -->
      <!-- <div class="data1">
        <SelectDateAndTime
          class="data2"
          @dateandtime="Toinquirebutton"
        ></SelectDateAndTime>
      </div> -->
    </div>

    <div class="table">
      <el-table
        fixed
        ref="report-table"
        :data="tableData"
        class="customer-table"
        :cell-style="cellStyle"
        :header-cell-style="headerStyle"
        id="el-table"
        @selection-change="handleSelectionChange"
        :row-class-name="tableRowClassName"
        :style="zebarCrossingStyle"
        :row-key="getRowKey"
      >
        <el-table-column
          prop="station"
          label="站点名称"
          width="150"
          fixed
          align="center"
        >
        </el-table-column>
        <!-- <el-table-column
          prop="space"
          label="面积(W㎡)"
          width="130"
          fixed="left"
          align="center"
        >
        </el-table-column> -->
        <el-table-column
          prop="timestamp"
          label="日期时间"
          width="163"
          fixed="left"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.timestamp | getDate }}
          </template>
        </el-table-column>
        <el-table-column
          prop="te11"
          label="一次供温(℃)"
          width="105"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="一次回温(℃)"
          prop="te12"
          width="105"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="一次供压(bar)"
          prop="pt11"
          width="110"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="一次回压(bar)"
          prop="pt12"
          width="110"
          align="center"
        >
        </el-table-column>
        <!--  -->
        <el-table-column
          label="二次供温设定(℃)"
          prop="te21sp"
          width="130"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="二次供温(℃)"
          prop="te21"
          width="105"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="二次回温(℃)"
          prop="te22"
          width="105"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="二次回压设定(bar)"
          prop="pt22sp_l"
          width="138"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="二次供压(bar)"
          prop="pt21"
          width="110"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="二次回压(bar)"
          prop="pt22"
          width="110"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="1#循环泵(Hz)"
          prop="bp21fb"
          width="110"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="2#循环泵(Hz)"
          prop="bp22fb"
          width="110"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="1#调节阀(%)"
          prop="fv1fb"
          width="105"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="2#调节阀(%)"
          prop="fv12fb"
          width="110"
          align="center"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import SelectDateAndTime from "components/common/SelectDateAndTime";
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      sum: ["ft31"], //求和的字段和求平均数的字段名字
      avg: [""],
      //斑马线颜色
      zebarCrossing: {
        crossingOne: "#F5F5F5",
        crossingTwo: "#8BA9C3",
        //crossingTwo: "#224394",
        colorOne: "#fff",
        colorTwo: "#fff",
      },
      selectID: [],
      dd: "c",
      selectDate: "",
      myData: [],
      tableData: [],

      myParams: {},

      pickerOptions: {
        disabledDate: (time) => {
          const maxTime = Date.now();
          return time.getTime() > maxTime;
        },
      },
    };
  },
  created() {
    // this.tableData = this.$store.getters.stationDataAndInfo; //表格数据
  },
  watch: {},
  computed: {
    headerStyle() {
      return {
        background: "#D8D8D9",
        padding: "5px 0",
        height: "60px",
        borderColor: "#006CC1",
        textAlign: "center",
        // color: "#FEFEFE",
        color: "#000",
        fontweight: "900",
        fontWeight: "900",
        borderColor: "#000",
      };
    },
    // 斑马线的颜色
    zebarCrossingStyle() {
      return {
        "--crossingOne": this.zebarCrossing.crossingOne,
        "--crossingTwo": this.zebarCrossing.crossingTwo,
        "--colorOne": this.zebarCrossing.colorOne,
        "--colorTwo": this.zebarCrossing.colorTwo,
      };
    },
  },
  mounted() {},
  methods: {
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];

      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        }
        const sumList = this.sum || [];
        const avgList = this.avg || [];
        const values = data.map((item) => {
          return Number(item[column.property]);
        });

        if (
          sumList.includes(column.property) ||
          avgList.includes(column.property)
        ) {
          let totalCount = 0; // 求平均数使用

          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);

            if (!isNaN(value)) {
              totalCount++;

              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] = sums[index].toFixed(2); // 保留2位小数，解决小数合计列
          if (avgList.includes(column.property) && totalCount) {
            sums[index] = sums[index] / totalCount;
            sums[index] = sums[index].toFixed(2);
          }
        } else {
          sums[index] = "";
        }
      });

      return sums;
    },
    async Toinquirebutton(v) {
      console.log("tyty", v);
      //var time = Date.parse(new Date(this.v).toString());
      var time = v;
      console.log("ttt", time);
      this.tableData = await this.$http.post(
        "plcdata/tems/plc/DatasByTime",

        { time }
      );
      console.log("整点报表------------------22", this.tableData);
    },
    // tableRenderHeader(h, data) {
    //   console.log("h", h, "data", data);
    //   return h("span", [
    //     h(
    //       "el-tooltip",
    //       {
    //         attrs: {
    //           class: "item",
    //           effect: "dark",
    //           content: data.column.label,
    //           placement: "top",
    //         },
    //       },
    //       [h("span", data.column.label)]
    //     ),
    //   ]);
    // },
    rePeoplemessageCard(v) {
      // console.log("FFF");
      this.$router.push({ path: "/Visual6", query: { id: v.Sid } });
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      // if (column.property === "line") {
      //   //
      //   return "border-color:black!important; color:#0000ff!important; padding:0px!important; background:red;";
      // }
      //取出换热站的长度
      let len = this.tableData.length;

      for (let i = 0; i < len; i++) {
        //通讯报警行变为灰色
        if (row.Sid == i) {
          //  if (this.$store.getters.alarmArr[i] === 0) {
          if (this.$store.getters.alarmArrJavaShow[i] === 0) {
            this.isShow = true;
            if (column.property === "Station") {
              // return "  background:#909399!important;height:40px!important;color:#ffffff!important";
              return " padding:0px!important; background:#909399!important;height:5px!important";
            } else {
              //this.iconColor = "#909399";

              // return "  background:#909399!important;height:40px!important;color:#909399!important";
              return " padding:0px!important; background:#909399!important;height:5px!important";
            }
          }

          //普通的报警单个框变为粉色
          // switch (column.property) {
          //   case "PT21":
          //     if (this.alarmDatas[i].PT21_alarmH === 1) {
          //       return "height:5px!important;padding:0px!important; border-color:black!important; color:#000000!important; padding:0px!important;  background:pink;height:5px!important;";
          //     }
          //     break;
          //   case "PT22":
          //     if (this.alarmDatas[i].PT22_alarmL == 1) {
          //       return "height:5px!important;padding:0px!important; border-color:black!important; color:#000000!important; padding:0px!important;  background:pink;height:5px!important;";
          //     }
          //     break;
          //   case "LT":
          //     if (this.alarmDatas[i].LT_alarmH === 1) {
          //       return "height:5px!important;padding:0px!important; border-color:black!important; color:#000000!important; padding:0px!important;  background:pink;height:5px!important;";
          //     }

          //     if (this.alarmDatas[i].LT_alarmL === 1) {
          //       return "height:5px!important;padding:0px!important; border-color:black!important; color:#000000!important; padding:0px!important;  background:pink;height:5px!important;";
          //     }

          //     break;

          // }
        }
      }

      ///下方为双色条
      // if (rowIndex % 4 === 0) {
      //   return " background: #FDF5E6;padding:0px!important;border-color:#FFFFFF;color:#000000; font-family: 'Lao UI'; font-weight: 500; ";
      // }
      // if (rowIndex % 4 === 2) {
      //   return " background: #F0F9EB;padding:0px!important;border-color:#FFFFFF; color:#000000;font-family: 'Lao UI'; font-weight: 500;";
      // }

      // if (column.property === "line") {
      //   // if (column.label === "供压(MPa)") {
      //   // if (column.prop === "TT") {

      //   return "background:#006CC1";
      // }
      //设置分界颜色结束
      //设置一网阀门颜色开始
      // if (column.property === "FV1FB" && row.FV1FB < 5) {
      //   // if (column.label === "供压(MPa)") {
      //   // if (column.prop === "TT") {
      //   // return "height:35px!important;font-weight:bold;font-size:16px;border-color:black!important; color:#0000ff!important; padding:0px!important; height:40px!important";
      //   return "height:5px!important;padding:0px!important;font-weight:bold;border-color:black!important; color:#0000ff!important; padding:0px!important; background:pink;height:40px!important";
      // }
      // if (column.property === "BP21FB" && row.Sid === 25) {
      //   // if (column.label === "供压(MPa)") {
      //   // if (column.prop === "TT") {

      //   return "height:5px!important;padding:0px!important;font-weight:bold;border-color:black!important; color:#ffffff!important; background:#ffffff;";
      // }
      // if (column.property === "BP21FB" && row.BP21FB < 5) {
      //   // if (column.label === "供压(MPa)") {
      //   // if (column.prop === "TT") {

      //   return "height:5px!important;padding:0px!important;font-weight:bold;border-color:black!important; color:#0000ff!important; padding:0px!important; background:pink;";
      // }

      return "height:4px!important;  padding:10px!important; ;color:#000; font-family: 'Lao UI'; font-weight: 500;";
    },
    //时间日期格式
    // dateFormat(row, column, cellValue, index) {
    //   const daterc = row[column.property];
    //   if (daterc != null) {
    //     var date = new Date(daterc);
    //     var year = date.getFullYear();
    //     /* 在日期格式中，月份是从0开始，11结束，因此要加0
    //      * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
    //      * */
    //     var month =
    //       date.getMonth() + 1 < 10
    //         ? "0" + (date.getMonth() + 1)
    //         : date.getMonth() + 1;
    //     var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    //     var hours =
    //       date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    //     var minutes =
    //       date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    //     var seconds =
    //       date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    //     // 拼接
    //     return (
    //       year +
    //       "-" +
    //       month +
    //       "-" +
    //       day +
    //       " " +
    //       hours +
    //       ":" +
    //       minutes +
    //       ":" +
    //       seconds
    //     );
    //   }
    // },

    //解决[ElTable] prop row-key is required的错误
    getRowKey(row) {
      return row.sid;
    },
    tableRowClassName({ row, rowIndex }) {
      if ((rowIndex + 1) % 2 === 0) {
        return "crossingOne"; //类名
      } else {
        return "crossingTwo"; //类名
      }
      // if (row.Sid == 12 || row.Sid == 0) {
      //   return "yc";
      // }

      // if (row.Sid == 1) {
      //   return "crossingTwo";
      // }
      // if (row.Sid == 2) {
      //   return "crossingOne";
      // }
      // if (row.Sid == 3) {
      //   return "crossingTwo";
      // }
      // if (row.Sid == 4) {
      //   return "crossingOne";
      // }
      // if (row.Sid == 5) {
      //   return "crossingTwo";
      // }
      // if (row.Sid == 6) {
      //   return "crossingOne";
      // }
      // if (row.Sid == 7) {
      //   return "crossingTwo";
      // }
      // if (row.Sid == 8) {
      //   return "crossingOne";
      // }
      // if (row.Sid == 9) {
      //   return "crossingTwo";
      // }
      // if (row.Sid == 10) {
      //   return "crossingOne";
      // }
      // if (row.Sid == 11) {
      //   return "crossingTwo";
      // }
      // if (row.Sid == 12) {
      //   return "crossingOne";
      // }
      // if (row.Sid == 13) {
      //   return "crossingOne";
      // }
      // if (row.Sid == 14) {
      //   return "crossingTwo";
      // }
      // if (row.Sid == 15) {
      //   return "crossingOne";
      // }
      // if (row.Sid == 16) {
      //   return "crossingTwo";
      // }
      // if (row.Sid == 17) {
      //   return "crossingOne";
      // }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    sizeChangeHandle(val) {
      this.pageSize = val;
      //更改每页显示记录数量后，都从第一页开始查询
      this.pageIndex = 1;

      this.requestIndoorData();
    },
    currentChangeHandle(val) {
      this.pageIndex = val;

      this.requestIndoorData();
    },

    exportExcel(excelName) {
      try {
        const $e = this.$refs["report-table"].$el;
        console.log("----", $e);
        let $table = $e.querySelector(".el-table__fixed");
        if (!$table) {
          $table = $e;
        }

        const wb = XLSX.utils.table_to_book($table, { raw: true });
        const wbout = XLSX.write(wb, {
          bookType: "xlsx",
          bookSST: true,
          type: "array",
        });
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          `${excelName}.xlsx`
        );
      } catch (e) {
        if (typeof console !== "undefined") console.error(e);
      }
    },
  },
  components: {
    SelectDateAndTime,
  },
};
</script>
<style lang="scss">
////////////////////////////////////////////////////////////////////////////////////
.el-cascader-menu__wrap {
  height: 208px;
  background-color: green !important;
  // background-color: #909399;
  color: #fff !important;
}
.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
  background-color: rgba(62, 243, 16, 0.69);
}
</style>
<style lang="scss" scoped>
::v-deep {
  // 合计的开始
  .el-table__fixed-footer-wrapper tbody td.el-table__cell {
    border-top: 1px solid green;
    border-right: 0px solid green;
    background-color: #0dc41a;
    color: #fff;
  }
  .el-table td.el-table__cell,
  .el-table th.el-table__cell.is-leaf {
    border-bottom: 1px solid green;
  }
  .el-table__footer-wrapper tbody td.el-table__cell,
  .el-table__header-wrapper tbody td.el-table__cell {
    background-color: #0dc41a;
    border-top: 1px solid green;
    border-right: 0px solid green;
    color: #fff;
  }
  //合计的结束

  //隐藏某行开始
  .el-table .yc {
    display: none;
  }
  //隐藏某行结束
  //固定表头 目的是表头过长把单位用....表示   //表格头部多余内容...的第二步*第一部在methods中的tableRenderHeader
  // .el-table th > .cell {
  //   // overflow: hidden; // 超出的文本隐藏
  //   // text-overflow: ellipsis; // 溢出用省略号显示
  //   // display: -webkit-box;
  //   // // white-space: nowrap; // 溢出不换行
  //   // //-webkit-line-clamp: 2;
  //   // white-space: nowrap;
  //   // -webkit-box-orient: vertical;
  //   // // color: red;
  //   white-space: pre;
  // }
  .el-cascader__dropdown {
    margin: 5px 0;
    margin-top: 5px;
    font-size: 14px;
    background-color: #ebb563 !important;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  //去固定的线
  .el-table__fixed-right::before {
    background-color: transparent !important ;
  }
  .el-table__fixed::before {
    background-color: transparent !important ;
  }
  //el-table__fixed-body-wrapper
  //去表格的线
  .el-table--border,
  .el-table--group {
    border: none;
    // border-right-color: rgb(235, 238, 245);
    // border-right-style: solid;
    // border-right-width: 1px;
    // border-bottom-color: rgb(235, 238, 245);
    // border-bottom-style: solid;
    // border-bottom-width: 1px;
  }
  .table-SelectedRow-bgcolor {
    td {
      background-color: #ebb563 !important;
    }
  }
  .el-table__row > td {
    /* 去除表格线 */
    border: none;
  }
  .el-table th.is-leaf {
    border-bottom: none; //去多余的横线
  }
  .el-table th.is-leaf {
    border-bottom: none; //去多余的横线
  }
  .el-pagination {
    // text-align: center;
    color: #000;
    height: 30px;
    // padding: 0.2rem 0.1rem;
    // background-color: rgb(241, 158, 62); //选中页码的颜色
  }
  .el-pagination.is-background .el-pager li:not(.disabled) {
    color: rgb(141, 138, 138);
    background-color: #14375c; //没有被选中的页码颜色
    background-color: transparent !important;
    background-color: red;
    //background-color: transparent;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    color: rgb(241, 158, 62);
    background-color: rgb(241, 158, 62); //选中页码的颜色
    //background-color: transparent !important;
    //background-color: transparent;
  }
  .el-pagination__total,
  .el-pagination__jump {
    color: #fff;
  }
  .btn-prev {
    background-color: #14375c;
    background-color: transparent !important;
    //color: rgb(32, 245, 32);
  }
  .btn-next {
    background-color: transparent !important;
    color: #fff;
  }
  .el-pager li.btn-quicknext,
  .el-pager li.btn-quickprev {
    line-height: 28px;
    color: #303133;
    color: #fff;
  }
  .el-pager li {
    padding: 0 4px;
    background: transparent !important;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    box-sizing: border-box;
  }
  .el-input__inner {
    background-color: transparent !important;
  }
  .el-pagination__jump {
    color: #000 !important; //前往xx页的字体颜色
  }
  .el-pagination__total {
    color: #000 !important; //总条数的颜色
  }
  .el-checkbox__inner {
    //color: rgb(241, 158, 62) !important; //总条数的颜色
    background-color: #66b1ff !important; //选框的颜色
    //border-radius: 50% !important; //圆角百分比
  }
  //斑马线的颜色
  .customer-table .crossingOne {
    background-color: var(--crossingOne);
    // background-color: red;
    color: var(--colorOne);
    opacity: 1;
  }
  .customer-table .crossingTwo {
    background-color: var(--crossingTwo);
    color: var(--colorTwo);
    opacity: 1;
  }

  //

  //分页的hover颜色
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #fff;
    background-color: #66b1ff !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active:hover {
    color: #14375c;
    background-color: #66b1ff !important;
  }
  // //没有fixed的时候用
  // .el-table tbody tr:hover > td {
  //   background-color: #66b1ff;
  //   background-color: #c0ccee;
  //   color: #000;
  //   font-size: 18px;
  // }
  //有fixed的时候用
  .el-table__body .el-table__row.hover-row td {
    background-color: #66b1ff;
    color: #000;
    font-size: 13px;
  }
  /*最外层透明   表格透明*/
  .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
    // background-color: #061028;
  }
  /* 表格内背景颜色 表格透明 */
  .el-table th,
  .el-table tr,
  .el-table td {
    background-color: transparent;
  }
  //固定表头 目的是表头过长把单位用....表示   //表格头部多余内容...的第二步*第一部在methods中的tableRenderHeader
  // .el-table th > .cell {
  //   // overflow: hidden; // 超出的文本隐藏
  //   // text-overflow: ellipsis; // 溢出用省略号显示
  //   // display: -webkit-box;
  //   // // white-space: nowrap; // 溢出不换行
  //   // //-webkit-line-clamp: 2;
  //   // white-space: nowrap;
  //   // -webkit-box-orient: vertical;
  //   // // color: red;
  //   white-space: pre;
  // }
  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    content: "";
    position: absolute;
    background-color: transparent; //去多余的横线
    z-index: 1;
  }
}
// 下拉菜单开始
/deep/.el-input--suffix .el-input__inner {
  //padding-right: 102px;
}
/deep/.el-input__inner {
  background-color: green;
  color: #fff;
  border: 1px solid #31cae4;
}

.el-select-dropdown__item {
  // font-size: 7px;
  //line-height: 19px;
  color: #fff;
  font-weight: 200;
  background-color: green;
}
// 背景全是绿

//三角色
// .el-popper .popper__arrow {
//   border-width: 6px;
//   border-top-width: 6px;
//   filter: drop-shadow(0 2px 12px rgba(5, 212, 23, 1));
// }
/deep/.el-select-dropdown {
  background-color: transparent;
  border: 1px solid blue;
}
/deep/.el-select-dropdown__list {
  padding: 0;
}
/deep/.el-popper[x-placement^="bottom"] {
  margin-top: 0px;
}
/deep/.el-popper .popper__arrow,
/deep/.el-popper .popper__arrow::after {
  display: none;
}
.el-select-dropdown__item:hover {
  background-color: rgba(0, 225, 219, 0.690196078431373);
  background-color: rgba(62, 243, 16, 0.69);
}
.el-select-dropdown__list {
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
//下拉菜单结束
// 第一个选择站的开始

//第一个选择站的结束
// ::v-deep {
//   .el-form-item__label {
//     text-align: right;
//     vertical-align: middle;
//     float: left;
//     font-size: 23px;
//     color: #606266;
//     line-height: 40px;
//     padding: 0 12px 0 0;
//     box-sizing: border-box;
//   }
// }
.unit-container {
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 30px;
  // background-color: rgb(228, 226, 213);
  background: linear-gradient(
    90deg,
    rgba(202, 209, 201, 0.4) 0,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(221, 226, 221, 0.4)
  );
  position: relative;
  .condition-box {
    position: absolute;
    top: 30px;
    left: 50px;
    font-size: 30px;
  }
  .zdt {
    position: absolute;
    font-size: 20px;
    left: 20px;
    top: 10px;
  }
  .data {
    width: 100%;
    height: 40px;
    //background-color: rgb(204, 83, 83);
    position: relative;
    .a {
      width: 250px;
      height: 100%;
      // background-color: gold;
      position: absolute;
      right: 110px;
    }
    .c {
      width: 100px;
      height: 100%;
      //  background-color: blueviolet;
      position: absolute;
      right: 30px;
    }
  }
  .table {
    position: absolute;
    top: 50px;
    //left: 200px;
    width: 1880px;
    height: 990px;
    // background-color: palevioletred;
    // overflow: auto;
    margin: 0px 20px 20px 20px;
    margin: 0px 20px 20px 20px;

    padding: 0px 20px 20px 20px;
    padding: 0px;
  }
}
</style>
