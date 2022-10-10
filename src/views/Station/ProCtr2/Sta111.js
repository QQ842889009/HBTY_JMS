//此处先建立一个标准所有点的位置属性stylePosition，然后每个站一套，将标准里面的点进行删减，也可以相同类型的用一套。
//比如在建立一个公寓站的点stylePositionGy，然后导出所有的，引入的时候用一个变量引入，采用点的方式通过按钮的方法分发给相应的站
//如果图片内多了一些没有的元素，应该是位置的名称有问题，没有和GykzBox.vue这个里面的组建对应上名字//
import that from "@/main.js";

let stylePosition01 = {
  styleStPosition: {
    textShow: true,
    textLeft: "850px",
    textTop: "20px",
    attributeName: "站点",
    Unit: "V",
  },
  styleDLPosition: {
    textShow: true,
    textLeft: "160px",
    textTop: "19px",
    attributeName: "电闸",
    Unit: "V",
  },
  styleLT2Position: {
    textShow: false,
    textLeft: "285px",
    textTop: "791px",
    attributeName: "液位",
  },
  styleQsbFanPosition: {
    textShow: false,
    textLeft: "142px",
    textTop: "726px",
    attributeName: "潜水泵风扇:",
  },
  styleBp21FanPosition: {
    textShow: true,
    textLeft: "1180px",
    textTop: "441px",
    attributeName: "1#循环泵风扇:",
  },
  styleBp22FanPosition: {
    textShow: true,
    textLeft: "1180px",
    textTop: "615px",
    attributeName: "2#循环泵风扇:",
  },
  styleBp11FanPosition: {
    textShow: false,
    textLeft: "377px",
    textTop: "658px",
    attributeName: "一网泵风扇:",
  },
  styleMp1FanPosition: {
    textShow: true,
    textLeft: "613px",
    textTop: "763px",
    attributeName: "1#补水泵风扇:",
  },
  styleMp2FanPosition: {
    textShow: true,
    textLeft: "604px",
    textTop: "906px",
    attributeName: "2#补水泵风扇:",
  },

  styleFv1Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "614px", //弹出框的偏移量
    modalTop: "289px", //弹出框的偏移量
    isTitle: "一供阀门",
    clickLeft: "448px",
    clickTop: "246px",
  },
  styleDVPosition: {
    clickShow: false, //点击位置显示和隐藏
    modalLeft: "575px", //弹出框的偏移量
    modalTop: "444px", //弹出框的偏移量
    isTitle: "一回阀门",
    clickLeft: "620px",
    clickTop: "618px",
  },
  styleXVPosition: {
    clickShow: false, //点击位置显示和隐藏
    modalLeft: "380px", //弹出框的偏移量
    modalTop: "444px", //弹出框的偏移量
    isTitle: "联通阀门",
    clickLeft: "77px",
    clickTop: "399px",
  },
  styleFv2Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "1063px",
    modalTop: "275px",
    isTitle: "二网阀门",
    clickLeft: "785px",
    clickTop: "384px",
  },
  styleQsbPosition: {
    clickShow: false, //点击位置显示和隐藏
    modalLeft: "1205px", //弹出框的偏移量
    modalTop: "343px", //弹出框的偏移量
    isTitle: "潜水泵",
    clickLeft: "133px",
    clickTop: "677px",
  },
  styleBp21Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "1316px", //弹出框的偏移量
    modalTop: "396px", //弹出框的偏移量
    isTitle: "1#循环泵",
    clickLeft: "1178px",
    clickTop: "383px",
  },
  styleBp22Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "1316px", //弹出框的偏移量
    modalTop: "396px", //弹出框的偏移量
    isTitle: "2#循环泵",
    clickLeft: "1178px",
    clickTop: "556px",
  },
  styleBp11Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "973px", //弹出框的偏移量
    modalTop: "629px", //弹出框的偏移量
    isTitle: "一网泵",
    clickLeft: "383px",
    clickTop: "583px",
  },

  styleMp1Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "486PX", //弹出框的偏移量
    modalTop: "635PX", //弹出框的偏移量
    isTitle: "1#补水泵",
    clickLeft: "609px",
    clickTop: "723px",
  },
  styleMp2Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "706PX", //弹出框的偏移量
    modalTop: "696px", //弹出框的偏移量
    isTitle: "2#补水泵",
    clickLeft: "812px",
    clickTop: "863px",
  },
  styleXyvPosition: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "1113PX", //弹出框的偏移量
    modalTop: "577PX", //弹出框的偏移量
    isTitle: "泄压阀",
    clickLeft: "953px",
    clickTop: "762px",
  },

  styleFT11Position: {
    textShow: true,
    textLeft: "444px",
    textTop: "502px",
    attributeName: "一供流量",
    Unit: "t/h",
  },
  styleFT21Position: {
    textShow: true,
    textLeft: "1055px",
    textTop: "217px",
    attributeName: "二供流量",
    Unit: "t/h",
  },
  styleFT12Position: {
    textShow: false,
    textLeft: "686px",
    textTop: "695px",
    attributeName: "一回流量",
    Unit: "t/h",
  },
  styleFT22Position: {
    textShow: false,
    textLeft: "872px",
    textTop: "695px",
    attributeName: "二回流量",
    Unit: "t/h",
  },

  styleZFT31Position: {
    textShow: false,
    textLeft: "1109px",
    textTop: "861px",
    attributeName: "累计补水流量",
    Unit: "t",
  },
  styleTE11Position: {
    textShow: true,
    textLeft: "127px",
    textTop: "167px",
    attributeName: "一供温度",
    Unit: "℃",
  },
  styleTE12Position: {
    textShow: true,
    textLeft: "240px",
    textTop: "482px",
    attributeName: "一回温度",
    Unit: "℃",
  },
  styleTE21Position: {
    textShow: true,
    textLeft: "1673px",
    textTop: "237px",
    attributeName: "二供温度",
    Unit: "℃",
  },
  styleTE22Position: {
    textShow: true,
    textLeft: "1574px",
    textTop: "730px",
    attributeName: "二回温度",
    Unit: "℃",
  },
  styleTE22_MPPosition: {
    textShow: true,
    textLeft: "973px",
    textTop: "508px",
    attributeName: "补水后温度",
    Unit: "℃",
  },
  styleTE221Position: {
    textShow: false,
    textLeft: "1589px",
    textTop: "429px",
    attributeName: "一分支回水温度",
    Unit: "℃",
  },
  styleTE222Position: {
    textShow: false,
    textLeft: "1589px",
    textTop: "550px",
    attributeName: "二分支回水温度",
    Unit: "℃",
  },
  styleTE223Position: {
    textShow: false,
    textLeft: "1589px",
    textTop: "629px",
    attributeName: "三分支回水温度",
    Unit: "℃",
  },
  styleTE224Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "691px",
    attributeName: "四分支回水温度",
    Unit: "℃",
  },
  styleTE225Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "751px",
    attributeName: "五分支回水温度",
    Unit: "℃",
  },
  styleTE226Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "751px",
    attributeName: "六分支回水温度",
    Unit: "℃",
  },
  styleTE227Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "801px",
    attributeName: "七分支回水温度",
    Unit: "℃",
  },
  styleTE228Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "801px",
    attributeName: "八分支回水温度",
    Unit: "℃",
  },
  styleTE229Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "851px",
    attributeName: "九分支回水温度",
    Unit: "℃",
  },
  styleTE22aPosition: {
    textShow: false,
    textLeft: "1633px",
    textTop: "911px",
    attributeName: "十分支回水温度",
    Unit: "℃",
  },

  stylePT11Position: {
    textShow: true,
    textLeft: "17px",
    textTop: "167px",
    attributeName: "一供压力",
    Unit: "bar",
  },
  stylePT11_FVPosition: {
    textShow: true,
    textLeft: "342px",
    textTop: "171px",
    attributeName: "一供阀后压力",
    Unit: "bar",
  },
  stylePT12Position: {
    textShow: true,
    textLeft: "110px",
    textTop: "482px",
    attributeName: "一回压力",
    Unit: "bar",
  },
  stylePT21Position: {
    textShow: true,
    textLeft: "1667px",
    textTop: "87px",
    attributeName: "二供压力",
    Unit: "bar",
  },
  stylePT22Position: {
    textShow: true,
    textLeft: "1574px",
    textTop: "543px",
    attributeName: "二回压力",
    Unit: "bar",
  },
  stylePT22BFPosition: {
    textShow: true,
    textLeft: "1389px",
    textTop: "508px",
    attributeName: "二网泵前压力",
    Unit: "bar",
  },
  stylePT22BBPosition: {
    textShow: true,
    textLeft: "842px",
    textTop: "508px",
    attributeName: "二网泵后压力",
    Unit: "bar",
  },
  stylePT221Position: {
    textShow: false,
    textLeft: "1694px",
    textTop: "429px",
    attributeName: "一分支回水压力",
    Unit: "bar",
  },
  stylePT222Position: {
    textShow: false,
    textLeft: "1694px",
    textTop: "550px",
    attributeName: "二分支回水压力",
    Unit: "bar",
  },
  stylePT223Position: {
    textShow: false,
    textLeft: "1694px",
    textTop: "629px",
    attributeName: "三分支回水压力",
    Unit: "bar",
  },
  stylePT224Position: {
    textShow: false,
    textLeft: "1682px",
    textTop: "629px",
    attributeName: "四分支回水压力",
    Unit: "bar",
  },
  stylePT225Position: {
    textShow: false,
    textLeft: "1739px",
    textTop: "751px",
    attributeName: "五分支回水压力",
    Unit: "bar",
  },
  stylePT226Position: {
    textShow: false,
    textLeft: "1739px",
    textTop: "751px",
    attributeName: "六分支回水压力",
    Unit: "bar",
  },
  stylePT227Position: {
    textShow: false,
    textLeft: "1739px",
    textTop: "801px",
    attributeName: "七分支回水压力",
    Unit: "bar",
  },
  stylePT228Position: {
    textShow: false,
    textLeft: "1739px",
    textTop: "801px",
    attributeName: "八分支回水压力",
    Unit: "bar",
  },
  stylePT229Position: {
    textShow: false,
    textLeft: "1739px",
    textTop: "851px",
    attributeName: "九分支回水压力",
    Unit: "bar",
  },
  stylePT22aPosition: {
    textShow: false,
    textLeft: "1739px",
    textTop: "911px",
    attributeName: "十分支回水压力",
    Unit: "bar",
  },

  styleLTPosition: {
    textShow: false,
    textLeft: "183px",
    textTop: "852px",
    attributeName: "液位",
    Unit: "m",
  },

  styleFV1FBPosition: {
    textShow: true,
    textLeft: "491px",
    textTop: "201px",
    attributeName: "一供阀门反馈",
    Unit: "%",
  },
  styleDVFBPosition: {
    textShow: false,
    textLeft: "5100px",
    textTop: "535px",
    attributeName: "一回阀门反馈",
    Unit: "%",
  },
  styleXVFBPosition: {
    textShow: false,
    textLeft: "152px",
    textTop: "397px",
    attributeName: "联通阀门反馈",
    Unit: "%",
  },
  styleFV2FBPosition: {
    textShow: true,
    textLeft: "879px",
    textTop: "379px",
    attributeName: "二网阀门反馈",
    Unit: "%",
  },

  styleBP21FBPosition: {
    textShow: true,
    textLeft: "1223px",
    textTop: "328px",
    attributeName: "1#循环泵频率反馈",
    Unit: "Hz",
  },
  styleBP22FBPosition: {
    textShow: true,
    textLeft: "1223px",
    textTop: "508px",
    attributeName: "2#循环泵频率反馈",
    Unit: "Hz",
  },
  styleBP11FBPosition: {
    textShow: false,
    textLeft: "368px",
    textTop: "550px",
    attributeName: "一网泵频率反馈",
    Unit: "Hz",
  },

  styleMP1FBPosition: {
    textShow: true,
    textLeft: "651px",
    textTop: "678px",
    attributeName: "1#补水泵频率反馈",
    Unit: "Hz",
  },
  styleMP2FBPosition: {
    textShow: true,
    textLeft: "651px",
    textTop: "828px",
    attributeName: "2#补水泵频率反馈",
    Unit: "Hz",
  },
};
let stylePosition02 = {
  styleStPosition: {
    textShow: true,
    textLeft: "850px",
    textTop: "20px",
    attributeName: "站点",
    Unit: "V",
  },
  styleDLPosition: {
    textShow: true,
    textLeft: "160px",
    textTop: "19px",
    attributeName: "电闸",
    Unit: "V",
  },
  styleLT2Position: {
    textShow: false,
    textLeft: "285px",
    textTop: "791px",
    attributeName: "液位",
  },
  styleQsbFanPosition: {
    textShow: false,
    textLeft: "142px",
    textTop: "726px",
    attributeName: "潜水泵风扇:",
  },
  styleBp21FanPosition: {
    textShow: true,
    textLeft: "1180px",
    textTop: "441px",
    attributeName: "1#循环泵风扇:",
  },
  styleBp22FanPosition: {
    textShow: true,
    textLeft: "1180px",
    textTop: "615px",
    attributeName: "2#循环泵风扇:",
  },
  styleBp11FanPosition: {
    textShow: false,
    textLeft: "377px",
    textTop: "658px",
    attributeName: "一网泵风扇:",
  },
  styleMp1FanPosition: {
    textShow: true,
    textLeft: "613px",
    textTop: "763px",
    attributeName: "1#补水泵风扇:",
  },
  styleMp2FanPosition: {
    textShow: true,
    textLeft: "604px",
    textTop: "906px",
    attributeName: "2#补水泵风扇:",
  },

  styleFv1Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "614px", //弹出框的偏移量
    modalTop: "289px", //弹出框的偏移量
    isTitle: "一供阀门",
    clickLeft: "448px",
    clickTop: "246px",
  },
  styleDVPosition: {
    clickShow: false, //点击位置显示和隐藏
    modalLeft: "575px", //弹出框的偏移量
    modalTop: "444px", //弹出框的偏移量
    isTitle: "一回阀门",
    clickLeft: "620px",
    clickTop: "618px",
  },
  styleXVPosition: {
    clickShow: false, //点击位置显示和隐藏
    modalLeft: "380px", //弹出框的偏移量
    modalTop: "444px", //弹出框的偏移量
    isTitle: "联通阀门",
    clickLeft: "77px",
    clickTop: "399px",
  },
  styleFv2Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "1063px",
    modalTop: "275px",
    isTitle: "二网阀门",
    clickLeft: "785px",
    clickTop: "384px",
  },
  styleQsbPosition: {
    clickShow: false, //点击位置显示和隐藏
    modalLeft: "1205px", //弹出框的偏移量
    modalTop: "343px", //弹出框的偏移量
    isTitle: "潜水泵",
    clickLeft: "133px",
    clickTop: "677px",
  },
  styleBp21Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "1316px", //弹出框的偏移量
    modalTop: "396px", //弹出框的偏移量
    isTitle: "1#循环泵",
    clickLeft: "1178px",
    clickTop: "383px",
  },
  styleBp22Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "1316px", //弹出框的偏移量
    modalTop: "396px", //弹出框的偏移量
    isTitle: "2#循环泵",
    clickLeft: "1178px",
    clickTop: "556px",
  },
  styleBp11Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "973px", //弹出框的偏移量
    modalTop: "629px", //弹出框的偏移量
    isTitle: "一网泵",
    clickLeft: "383px",
    clickTop: "583px",
  },

  styleMp1Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "486PX", //弹出框的偏移量
    modalTop: "635PX", //弹出框的偏移量
    isTitle: "1#补水泵",
    clickLeft: "609px",
    clickTop: "723px",
  },
  styleMp2Position: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "706PX", //弹出框的偏移量
    modalTop: "696px", //弹出框的偏移量
    isTitle: "2#补水泵",
    clickLeft: "812px",
    clickTop: "863px",
  },
  styleXyvPosition: {
    clickShow: true, //点击位置显示和隐藏
    modalLeft: "1113PX", //弹出框的偏移量
    modalTop: "577PX", //弹出框的偏移量
    isTitle: "泄压阀",
    clickLeft: "953px",
    clickTop: "762px",
  },

  styleFT11Position: {
    textShow: true,
    textLeft: "444px",
    textTop: "502px",
    attributeName: "一供流量",
    Unit: "t/h",
  },
  styleFT21Position: {
    textShow: true,
    textLeft: "1055px",
    textTop: "217px",
    attributeName: "二供流量",
    Unit: "t/h",
  },
  styleFT12Position: {
    textShow: false,
    textLeft: "686px",
    textTop: "695px",
    attributeName: "一回流量",
    Unit: "t/h",
  },
  styleFT22Position: {
    textShow: false,
    textLeft: "872px",
    textTop: "695px",
    attributeName: "二回流量",
    Unit: "t/h",
  },

  styleZFT31Position: {
    textShow: false,
    textLeft: "1109px",
    textTop: "861px",
    attributeName: "累计补水流量",
    Unit: "t",
  },
  styleTE11Position: {
    textShow: true,
    textLeft: "127px",
    textTop: "167px",
    attributeName: "一供温度",
    Unit: "℃",
  },
  styleTE12Position: {
    textShow: true,
    textLeft: "240px",
    textTop: "482px",
    attributeName: "一回温度",
    Unit: "℃",
  },
  styleTE21Position: {
    textShow: true,
    textLeft: "1673px",
    textTop: "237px",
    attributeName: "二供温度",
    Unit: "℃",
  },
  styleTE22Position: {
    textShow: true,
    textLeft: "1574px",
    textTop: "730px",
    attributeName: "二回温度",
    Unit: "℃",
  },
  styleTE22_MPPosition: {
    textShow: true,
    textLeft: "973px",
    textTop: "508px",
    attributeName: "补水后温度",
    Unit: "℃",
  },
  styleTE221Position: {
    textShow: false,
    textLeft: "1589px",
    textTop: "429px",
    attributeName: "一分支回水温度",
    Unit: "℃",
  },
  styleTE222Position: {
    textShow: false,
    textLeft: "1589px",
    textTop: "550px",
    attributeName: "二分支回水温度",
    Unit: "℃",
  },
  styleTE223Position: {
    textShow: false,
    textLeft: "1589px",
    textTop: "629px",
    attributeName: "三分支回水温度",
    Unit: "℃",
  },
  styleTE224Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "691px",
    attributeName: "四分支回水温度",
    Unit: "℃",
  },
  styleTE225Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "751px",
    attributeName: "五分支回水温度",
    Unit: "℃",
  },
  styleTE226Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "751px",
    attributeName: "六分支回水温度",
    Unit: "℃",
  },
  styleTE227Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "801px",
    attributeName: "七分支回水温度",
    Unit: "℃",
  },
  styleTE228Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "801px",
    attributeName: "八分支回水温度",
    Unit: "℃",
  },
  styleTE229Position: {
    textShow: false,
    textLeft: "1633px",
    textTop: "851px",
    attributeName: "九分支回水温度",
    Unit: "℃",
  },
  styleTE22aPosition: {
    textShow: false,
    textLeft: "1633px",
    textTop: "911px",
    attributeName: "十分支回水温度",
    Unit: "℃",
  },

  stylePT11Position: {
    textShow: true,
    textLeft: "17px",
    textTop: "167px",
    attributeName: "一供压力",
    Unit: "bar",
  },
  stylePT11_FVPosition: {
    textShow: true,
    textLeft: "342px",
    textTop: "171px",
    attributeName: "一供阀后压力",
    Unit: "bar",
  },
  stylePT12Position: {
    textShow: true,
    textLeft: "110px",
    textTop: "482px",
    attributeName: "一回压力",
    Unit: "bar",
  },
  stylePT21Position: {
    textShow: true,
    textLeft: "1667px",
    textTop: "87px",
    attributeName: "二供压力",
    Unit: "bar",
  },
  stylePT22Position: {
    textShow: true,
    textLeft: "1574px",
    textTop: "543px",
    attributeName: "二回压力",
    Unit: "bar",
  },
  stylePT22BFPosition: {
    textShow: true,
    textLeft: "1389px",
    textTop: "508px",
    attributeName: "二网泵前压力",
    Unit: "bar",
  },
  stylePT22BBPosition: {
    textShow: true,
    textLeft: "842px",
    textTop: "508px",
    attributeName: "二网泵后压力",
    Unit: "bar",
  },
  stylePT221Position: {
    textShow: false,
    textLeft: "1694px",
    textTop: "429px",
    attributeName: "一分支回水压力",
    Unit: "bar",
  },
  stylePT222Position: {
    textShow: false,
    textLeft: "1694px",
    textTop: "550px",
    attributeName: "二分支回水压力",
    Unit: "bar",
  },
  stylePT223Position: {
    textShow: false,
    textLeft: "1694px",
    textTop: "629px",
    attributeName: "三分支回水压力",
    Unit: "bar",
  },
  stylePT224Position: {
    textShow: false,
    textLeft: "1682px",
    textTop: "629px",
    attributeName: "四分支回水压力",
    Unit: "bar",
  },
  stylePT225Position: {
    textShow: false,
    textLeft: "1739px",
    textTop: "751px",
    attributeName: "五分支回水压力",
    Unit: "bar",
  },
  stylePT226Position: {
    textShow: false,
    textLeft: "1739px",
    textTop: "751px",
    attributeName: "六分支回水压力",
    Unit: "bar",
  },
  stylePT227Position: {
    textShow: false,
    textLeft: "1739px",
    textTop: "801px",
    attributeName: "七分支回水压力",
    Unit: "bar",
  },
  stylePT228Position: {
    textShow: false,
    textLeft: "1739px",
    textTop: "801px",
    attributeName: "八分支回水压力",
    Unit: "bar",
  },
  stylePT229Position: {
    textShow: false,
    textLeft: "1739px",
    textTop: "851px",
    attributeName: "九分支回水压力",
    Unit: "bar",
  },
  stylePT22aPosition: {
    textShow: false,
    textLeft: "1739px",
    textTop: "911px",
    attributeName: "十分支回水压力",
    Unit: "bar",
  },

  styleLTPosition: {
    textShow: false,
    textLeft: "183px",
    textTop: "852px",
    attributeName: "液位",
    Unit: "m",
  },

  styleFV1FBPosition: {
    textShow: true,
    textLeft: "491px",
    textTop: "201px",
    attributeName: "一供阀门1反馈",
    Unit: "%",
  },
  styleFV2FBPosition: {
    textShow: true,
    textLeft: "491px",
    textTop: "301px",
    attributeName: "一供阀门2反馈",
    Unit: "%",
  },
  styleDVFBPosition: {
    textShow: false,
    textLeft: "5100px",
    textTop: "535px",
    attributeName: "一回阀门反馈",
    Unit: "%",
  },
  styleXVFBPosition: {
    textShow: false,
    textLeft: "152px",
    textTop: "397px",
    attributeName: "联通阀门反馈",
    Unit: "%",
  },
  styleFV2FBPosition: {
    textShow: true,
    textLeft: "879px",
    textTop: "379px",
    attributeName: "二网阀门反馈",
    Unit: "%",
  },

  styleBP21FBPosition: {
    textShow: true,
    textLeft: "1223px",
    textTop: "328px",
    attributeName: "1#循环泵频率反馈",
    Unit: "Hz",
  },
  styleBP22FBPosition: {
    textShow: true,
    textLeft: "1223px",
    textTop: "508px",
    attributeName: "2#循环泵频率反馈",
    Unit: "Hz",
  },
  styleBP11FBPosition: {
    textShow: false,
    textLeft: "368px",
    textTop: "550px",
    attributeName: "一网泵频率反馈",
    Unit: "Hz",
  },

  styleMP1FBPosition: {
    textShow: true,
    textLeft: "651px",
    textTop: "678px",
    attributeName: "1#补水泵频率反馈",
    Unit: "Hz",
  },
  styleMP2FBPosition: {
    textShow: true,
    textLeft: "651px",
    textTop: "828px",
    attributeName: "2#补水泵频率反馈",
    Unit: "Hz",
  },
};
export default {
  stylePosition01,
  stylePosition02,
};
