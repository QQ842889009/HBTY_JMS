import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from "./modules/user";
import permission from "./modules/permission";
import station from "./modules/station";
import aiUnit from "./modules/aiUnit";
import weather from "./modules/weather";

import plcS7 from "./modules/plcS7";
import inDoor from "./modules/inDoor";
import door from "./modules/door";
import stationBranch from "./modules/stationBranch";
export default new Vuex.Store({
  state: {
    tipShow: false, //主要用于显示工艺控制元素的坐标，平时处于关闭状态--true，调整工艺控制的时候需要打开---false,控制的是标签的使能不是显示。true
  },
  modules: {
    user,
    permission,
    station,
    aiUnit,
    plcS7,
    inDoor,
    door,
    stationBranch,
    weather,
  },
});
