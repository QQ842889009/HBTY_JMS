import that from "@/main.js"
// import alarmShow from "./alarm/index.js";
////////////////////////////////////////////////////
//引入that是因为，js文件不认识总系统的Vue也就是那个this
//主要思想是：见说明
//////////////////////////////////////////////////////////////////////////////
//import data from "assets/js/stationCommon/data.js"; //公共的换热站所有数据
//import station from "assets/js/storeDataInit/station" //

let stationData = (msg) => {
  // console.log('---------msg',msg);
  new Promise((resolve, reject) => {
    let msgJsObjFormat = {
      Sid: "000",
      // Space: 12.2,
      Sname: "林都2", //站名  没有用
      Timestamp: 1536997080,
      Sdate: "2030-09-11",
      Stime: "00:00:00",
      FT11: 0,
      FT21: 0,
      FT31: 0,
      FT12: 0,
      Q1: 0,
      Q2: 0,
      TE11: 0,
      TE12: 0,
      TE21: 0,
      TE22: 0,
      TE22MP: 0,
      TE12Z: 0,
      PT11: 0,
      PT12: 0,
      PT21: 0,
      PT22: 0,
      PT11_FV: 0,
      PT21_FV: 0,
      PT22BF: 0,
      PT22BL: 0,
      PT11Z: 0,
      PT12Z: 0,
      LT: 0,
      TE00: 0,
      FV1FB: 0,
      FV12FB: 0,
      FV2FB: 0,
      XVFB: 0,
      DVFB: 0,
      BP11FB: 0,
      BP12FB: 0,
      BP21FB: 0,
      BP22FB: 0,
      MP1FB: 0,
      MP2FB: 0,
      DL: 0,
      ZFT11: 0,
      ZFT21: 0,
      ZFT31: 0,
      reTT11: 0,
      rePT11: 0,
      reTT12: 0,
      rePT12: 0,
      reYear: 0,
      reMon: 0,
      reDay: 0,
      reHour: 0,
      reMin: 0,
      reSec: 0,
      DL_P: 0,
      TE221: 0,
      PT221: 0,
      TE222: 0,
      PT222: 0,
      TE223: 0,
      PT223: 0,
      TE224: 0,
      PT224: 0,
      TE225: 0,
      PT225: 0,
      TE226: 0,
      PT226: 0,
      TE227: 0,
      PT227: 0,
      TE228: 0,
      PT228: 0,
      TE229: 0,
      PT229: 0,
      TE22A: 0,
      PT22A: 0,
      DLAV: 0,
      DLBV: 0,
      DLCV: 0,
      ZQ1: 0,
      ZQ2: 0,
      Q_CS: 0,
      Q_24: 0,
      FT22: 0,
      FT211: 0,
      FT212: 0,
      FT213: 0,
      FT214: 0,
      Q211: 0,
      TE12_Z: 0,
      Q212: 0,
      Q213: 0,
      Q214: 0,
      ZQ211: 0,
      ZQ212: 0,
      ZQ213: 0,
      ZQ214: 0,
      BP11I: 0,
      BP12I: 0,
      BP21I: 0,
      BP22I: 0,
      MP1I: 0,
      MP2I: 0,
      TE21SP: 0,
      TE22SP: 0,
      TE2XSP: 0,
      FV1SP: 0,
      FV12SP: 0,
      FV2SP: 0,
      XVSP: 0,
      DVSP: 0,
      BP11SP: 0,
      BP12SP: 0,
      BP21SP: 0,
      BP22SP: 0,
      MP1SP: 0,
      MP2SP: 0,
      FV2SP: 0,
      FV1SP_H: 0,
      FV1SP_L: 0,
      PT22SP: 0,
      PT22SP_L: 0,
      PT22SP_H: 0,
      PT22XY_H: 0,
      PT22XY_L: 0,
      LTSP_H: 0,
      LTSP_L: 0,
      TE12SP_H: 0,
      FV_TEX: 0,
      PT21_HH: 0,
      PT21_H: 0,
      PT22_L: 0,
      PT22_LL: 0,
      LT_HH: 0,
      LT_H: 0,
      LT_L: 0,
      LT_LL: 0,
      BP11C: 0,
      BP12C: 0,
      BP21C: 0,
      BP22C: 0,
      MP1C: 0,
      MP2C: 0,
      XYVC: 0,
      BVC: 0,
      QSBC: 0,
      BP1_TR: 0,
      BP2_TR: 0,
      BP_TR: 0,
      MP_TR: 0,
      MA_MP: 0,
      MA_BP2: 0,
      PIDorLIM: 0,
      MA_FV1: 0,
      MA_FV12: 0,
      MA_XYV: 0,
      MA_BV: 0,
      MA_QSB: 0,
      BVorMP: 0,
      MPlockBV: 0,
      BP11A_LOCK: 0,
      BP12A_LOCK: 0,
      BP21A_LOCK: 0,
      BP22A_LOCK: 0,
      MP1A_LOCK: 0,
      MP2A_LOCK: 0,
      PT21_LOCK: 0,
      PT22_LOCK: 0,
      LT_LOCK: 0,
      BP2_LOCK: 0,
      PT21HH_Lock: 0,
      PT22LL_Lock: 0,
      LTHH_Lock: 0,
      LTLL_Lock: 0,
      FVandTE_BP1_Lock: 0,
      AllStop: 0,
      BP11S: 0,
      BP11RM: 0,
      BP12S: 0,
      BP12RM: 0,
      BP21S: 0,
      BP21RM: 0,
      BP22S: 0,
      BP22RM: 0,
      MP1S: 0,
      MP1RM: 0,
      MP2S: 0,
      MP2RM: 0,
      BP2_TRS: 0,
      MP_TRS: 0,
      BP11A: 0,
      BP12A: 0,
      BP21A: 0,
      BP22A: 0,
      MP1A: 0,
      MP2A: 0,
      BP11Ca: 0,
      BP12Ca: 0,
      BP21Ca: 0,
      BP22Ca: 0,
      XYVCa: 0,
      FV1a: 0,
      FV12a: 0,
      PT21_HHa: 0,
      PT21_Ha: 0,
      PT22_La: 0,
      PT22_LLa: 0,
      LT_HHa: 0,
      LT_Ha: 0,
      LT_La: 0,
      LT_LLa: 0,
      TE12SP_Ha: 0,
      PTSPa: 0,
      ALLAa: 0,
      FT1SP_X: 0,
      FT1SP: 0,
      FT2SP_X: 0,
      FT2SP: 0,
      PT22SP_HH: 0,
      CP211T_HH: 0,
      FT1SP_Stime: 0,
      FT1SP_Atime: 0,
      FT2SP_Stime: 0,
      MPT2T_HH: 0,
      FT2SP_Atime: 0,
      Q_24Gog: 0,
      MP_PID_LIM: 0,
      SBPC: 0,
      MA_SBP: 0,
      MA_FV1_TE21: 0,
      FV1SP_H: 0,
      FV1SP_L: 0
    }

    msgJsObjFormat.Sid = parseInt(msg.sid.slice(2), 16)
    msgJsObjFormat.Sdate = msg.sdate
    msgJsObjFormat.Stime = msg.stime
    msgJsObjFormat.Timestamp = msg.timestamp
    msgJsObjFormat.FT11 = msg.bd0.toFixed(1) //*
    msgJsObjFormat.FT21 = msg.bd1.toFixed(1) //*
    msgJsObjFormat.FT31 = msg.bd2.toFixed(1) //*
    msgJsObjFormat.FT12 = msg.bd3.toFixed(1) //*
    msgJsObjFormat.Q1 = msg.bd4.toFixed(1) //*
    msgJsObjFormat.Q2 = msg.bd5.toFixed(1) //*
    msgJsObjFormat.TE11 = msg.bd6.toFixed(1)
    msgJsObjFormat.TE12 = msg.bd7.toFixed(1)
    msgJsObjFormat.TE21 = msg.bd8.toFixed(1)
    //msgJsObjFormat.TE21 = msg.bd8 < 0 ? 0 : msg.bd8.toFixed(1)

    msgJsObjFormat.TE22 = msg.bd9.toFixed(1)

    msgJsObjFormat.TE22MP = msg.bd10.toFixed(1) //*
    msgJsObjFormat.TE12Z = msg.bd11.toFixed(1) //*
    msgJsObjFormat.PT11 = msg.bd12.toFixed(1)
    msgJsObjFormat.PT12 = msg.bd13.toFixed(1)
    msgJsObjFormat.PT21 = msg.bd14.toFixed(1)
    msgJsObjFormat.PT22 = msg.bd15.toFixed(1)
    msgJsObjFormat.PT11_FV = msg.bd16.toFixed(2)
    msgJsObjFormat.PT22BF = msg.bd17.toFixed(2)
    msgJsObjFormat.PT22BL = msg.bd18.toFixed(2)
    // msgJsObjFormat.PT11Z = msg.bd19.toFixed(2)
    // msgJsObjFormat.PT12Z = msg.bd20.toFixed(2)
    //msgJsObjFormat.LT = msg.bd21.toFixed(2)

    msgJsObjFormat.FV1FB = parseInt(msg.bd22).toFixed(0)
    msgJsObjFormat.FV12FB = parseInt(msg.bd23).toFixed(0)
    msgJsObjFormat.FV2FB = parseInt(msg.bd24).toFixed(0)

    // msgJsObjFormat.XVFB = parseInt(msg.bd25).toFixed(0)
    // msgJsObjFormat.DVFB = parseInt(msg.bd26).toFixed(0)
    //msgJsObjFormat.BP11FB = parseInt(msg.bd27).toFixed(0)
    //msgJsObjFormat.BP12FB = parseInt(msg.bd28).toFixed(0)
    msgJsObjFormat.BP21FB = parseInt(msg.bd29).toFixed(0)
    msgJsObjFormat.BP22FB = parseInt(msg.bd30).toFixed(0)

    msgJsObjFormat.MP1FB = parseInt(msg.bd31).toFixed(0)
    msgJsObjFormat.MP2FB = parseInt(msg.bd32).toFixed(0)
    msgJsObjFormat.TE221 = msg.bd33.toFixed(1)
    msgJsObjFormat.PT221 = msg.bd34.toFixed(2)
    msgJsObjFormat.TE222 = msg.bd35.toFixed(1)
    msgJsObjFormat.PT222 = msg.bd36.toFixed(2)
    msgJsObjFormat.TE223 = msg.bd37.toFixed(1)
    msgJsObjFormat.PT223 = msg.bd38.toFixed(2)
    msgJsObjFormat.TE224 = msg.bd39.toFixed(1)
    msgJsObjFormat.PT224 = msg.bd40.toFixed(2)

    msgJsObjFormat.TE225 = msg.bd41.toFixed(1)
    msgJsObjFormat.PT225 = msg.bd42.toFixed(2)
    msgJsObjFormat.TE226 = msg.bd43.toFixed(1)
    msgJsObjFormat.PT226 = msg.bd44.toFixed(2)
    msgJsObjFormat.TE227 = msg.bd45.toFixed(1)
    msgJsObjFormat.PT227 = msg.bd46.toFixed(2)
    msgJsObjFormat.TE228 = msg.bd47.toFixed(1)
    msgJsObjFormat.PT228 = msg.bd48.toFixed(2)
    msgJsObjFormat.TE229 = msg.bd49.toFixed(1)
    msgJsObjFormat.PT229 = msg.bd50.toFixed(2)

    msgJsObjFormat.TE22A = msg.bd51.toFixed(1)
    msgJsObjFormat.PT22A = msg.bd52.toFixed(2)

    msgJsObjFormat.DLAV = msg.bd53.toFixed(0)
    msgJsObjFormat.DLBV = msg.bd54.toFixed(0)
    msgJsObjFormat.DLCV = msg.bd55.toFixed(0)

    msgJsObjFormat.ZFT31 = msg.bd56.toFixed(1)
    msgJsObjFormat.ZQ1 = msg.bd57.toFixed(1)
    msgJsObjFormat.ZQ2 = msg.bd58.toFixed(2)
    msgJsObjFormat.DL = msg.bd59.toFixed(1)

    // msgJsObjFormat.FT22 = msg.bd60.toFixed(1)
    msgJsObjFormat.reTT11 = msg.bd60.toFixed(1)
    msgJsObjFormat.rePT11 = msg.bd61.toFixed(1)
    msgJsObjFormat.reTT12 = msg.bd62.toFixed(1)
    msgJsObjFormat.rePT12 = msg.bd63.toFixed(1)
    msgJsObjFormat.reYear = msg.bd64.toFixed(1)
    msgJsObjFormat.reMon = msg.bd65.toFixed(1)
    msgJsObjFormat.reDay = msg.bd66.toFixed(1)
    msgJsObjFormat.reHour = msg.bd67.toFixed(1)
    msgJsObjFormat.reMin = msg.bd68.toFixed(1)
    msgJsObjFormat.reSec = msg.bd69.toFixed(1)

    // msgJsObjFormat.DL_P = msg.bd61.toFixed(1)
    // msgJsObjFormat.LS1 = msg.bd62.toFixed(2)
    // msgJsObjFormat.LS1 = msg.bd63.toFixed(0)
    // msgJsObjFormat.LS1 = msg.bd64.toFixed(0)
    // msgJsObjFormat.LS1 = msg.bd65.toFixed(0)
    // msgJsObjFormat.LS1 = msg.bd66.toFixed(1)
    // msgJsObjFormat.LS1 = msg.bd67.toFixed(1)
    // msgJsObjFormat.LS1 = msg.bd68.toFixed(2)
    // msgJsObjFormat.LS1 = msg.bd69.toFixed(1)

    //  msgJsObjFormat.BP11I = msg.bd70.toFixed(1)

    // msgJsObjFormat.BP12I = msg.bd71.toFixed(1)
    // msgJsObjFormat.BP21I = msg.bd72.toFixed(2)
    // msgJsObjFormat.BP22I = msg.bd73.toFixed(0)
    // msgJsObjFormat.MP1I = msg.bd74.toFixed(0)
    // msgJsObjFormat.MP2I = msg.bd75.toFixed(0)
    // msgJsObjFormat.LS9 = msg.bd76.toFixed(1)
    msgJsObjFormat.TE21SP = msg.bd77.toFixed(1)
    msgJsObjFormat.TE22SP = msg.bd78.toFixed(2)
    msgJsObjFormat.TE2XSP = msg.bd79.toFixed(1)
    msgJsObjFormat.FV1SP = msg.bd80.toFixed(1)

    msgJsObjFormat.FV12SP = msg.bd81.toFixed(1)
    msgJsObjFormat.FV2SP = msg.bd82.toFixed(2)
    // msgJsObjFormat.XVSP = msg.bd83.toFixed(1)
    // msgJsObjFormat.DVSP = msg.bd84.toFixed(2)
    // msgJsObjFormat.BP11SP = msg.bd85.toFixed(1)
    // msgJsObjFormat.BP12SP = msg.bd86.toFixed(2)
    msgJsObjFormat.BP21SP = msg.bd87.toFixed(1)
    msgJsObjFormat.BP22SP = msg.bd88.toFixed(2)
    msgJsObjFormat.MP1SP = msg.bd89.toFixed(1)
    msgJsObjFormat.MP2SP = msg.bd90.toFixed(2)

    msgJsObjFormat.FV1SP_H = msg.bd91.toFixed(1)
    msgJsObjFormat.FV1SP_L = msg.bd92.toFixed(2)
    // msgJsObjFormat.PT22SP = msg.bd93.toFixed(0)
    msgJsObjFormat.PT22SP_H = msg.bd94.toFixed(0)
    msgJsObjFormat.PT22SP_L = msg.bd95.toFixed(0)
    msgJsObjFormat.PT22XY_H = msg.bd96.toFixed(1)
    msgJsObjFormat.PT22XY_L = msg.bd97.toFixed(1)
    // msgJsObjFormat.LTSP_H = msg.bd98.toFixed(2)
    // msgJsObjFormat.LTSP_L = msg.bd99.toFixed(1)
    msgJsObjFormat.TE12SP_H = msg.bd100.toFixed(1)

    msgJsObjFormat.FV_TEX = msg.bd101.toFixed(1)
    msgJsObjFormat.PT21_HH = msg.bd102.toFixed(1)
    msgJsObjFormat.PT21_H = msg.bd103.toFixed(1)
    msgJsObjFormat.PT22_L = msg.bd104.toFixed(1)
    msgJsObjFormat.PT22_LL = msg.bd105.toFixed(1)
    // msgJsObjFormat.LT_HH = msg.bd106.toFixed(1)
    // msgJsObjFormat.LT_H = msg.bd107.toFixed(1)
    // msgJsObjFormat.LT_L = msg.bd108.toFixed(1)
    // msgJsObjFormat.LT_LL = msg.bd109.toFixed(1)

    /////////////////////////////////////////////////////////////////////////////////
    // msgJsObjFormat.BP11C = msg.b0
    // msgJsObjFormat.BP12C = msg.b1
    msgJsObjFormat.BP21C = msg.b2
    msgJsObjFormat.BP22C = msg.b3
    msgJsObjFormat.MP1C = msg.b4
    msgJsObjFormat.MP2C = msg.b5
    msgJsObjFormat.XYVC = msg.b6
    msgJsObjFormat.BVC = msg.b7
    //msgJsObjFormat.QSBC = msg.b8
    // msgJsObjFormat.BY0 = msg.b9

    // msgJsObjFormat.BY0 = msg.b10
    // msgJsObjFormat.BY0 = msg.b11
    // msgJsObjFormat.BY0 = msg.b12
    // msgJsObjFormat.BY0 = msg.b13
    // msgJsObjFormat.BY0 = msg.b14
    // msgJsObjFormat.BY0 = msg.b15
    // msgJsObjFormat.BP1_TR = msg.b16
    msgJsObjFormat.BP2_TR = msg.b17
    msgJsObjFormat.MP_TR = msg.b18
    msgJsObjFormat.MA_MP = msg.b19
    // msgJsObjFormat.MA_MP2 = msg.b20

    //   msgJsObjFormat.PIDorLIM = msg.b21
    msgJsObjFormat.MA_FV1 = msg.b22
    msgJsObjFormat.MA_FV12 = msg.b23
    msgJsObjFormat.MA_XYV = msg.b24
    msgJsObjFormat.MA_BV = msg.b25
    // msgJsObjFormat.MA_QSB = msg.b26
    msgJsObjFormat.BVorMP = msg.b27
    // msgJsObjFormat.MPlockBV = msg.b28
    // msgJsObjFormat.BY7 = msg.b29

    // msgJsObjFormat.BY7 = msg.b30
    // msgJsObjFormat.BY7 = msg.b31
    //msgJsObjFormat.BP11A_LOCK = msg.b32
    // msgJsObjFormat.BP12A_LOCK = msg.b33
    msgJsObjFormat.BP21A_LOCK = msg.b34
    msgJsObjFormat.BP22A_LOCK = msg.b35
    msgJsObjFormat.MP1A_LOCK = msg.b36
    msgJsObjFormat.MP2A_LOCK = msg.b37
    msgJsObjFormat.PT21HH_Lock = msg.b38
    msgJsObjFormat.PT22LL_Lock = msg.b39

    // msgJsObjFormat.LTHH_Lock = msg.b40
    // msgJsObjFormat.LTLL_Lock = msg.b41
    msgJsObjFormat.FVandTE_BP1_Lock = msg.b42
    msgJsObjFormat.AllStop = msg.b43
    // msgJsObjFormat.BY11 = msg.b44
    // msgJsObjFormat.BY11 = msg.b45
    // msgJsObjFormat.BY11 = msg.b46
    // msgJsObjFormat.BY11 = msg.b47
    // msgJsObjFormat.BP11S = msg.b48
    //  msgJsObjFormat.BP11RM = msg.b49

    // msgJsObjFormat.BP12S = msg.b50
    // msgJsObjFormat.BP12RM = msg.b51
    msgJsObjFormat.BP21S = msg.b52
    msgJsObjFormat.BP21RM = msg.b53
    msgJsObjFormat.BP22S = msg.b54
    msgJsObjFormat.BP22RM = msg.b55
    msgJsObjFormat.MP1S = msg.b56
    msgJsObjFormat.MP1RM = msg.b57
    msgJsObjFormat.MP2S = msg.b58
    msgJsObjFormat.MP2RM = msg.b59

    // msgJsObjFormat.BY15 = msg.b60
    // msgJsObjFormat.BY16 = msg.b61
    // msgJsObjFormat.BP2_TRS = msg.b62
    //  msgJsObjFormat.MP_TRS = msg.b63
    // msgJsObjFormat.BP11A = msg.b64
    // msgJsObjFormat.BP12A = msg.b65
    // msgJsObjFormat.BP21A = msg.b66
    // msgJsObjFormat.BP22A = msg.b67
    // msgJsObjFormat.MP1A = msg.b68
    // msgJsObjFormat.MP2A = msg.b69

    // msgJsObjFormat.BP11Ca = msg.b70
    //  msgJsObjFormat.BP12Ca = msg.b71
    msgJsObjFormat.BP21Ca = msg.b72
    msgJsObjFormat.BP22Ca = msg.b73
    msgJsObjFormat.XYVCa = msg.b74
    msgJsObjFormat.FV1a = msg.b75
    msgJsObjFormat.FV12a = msg.b76
    msgJsObjFormat.PT21_HHa = msg.b77
    msgJsObjFormat.PT21_Ha = msg.b78
    msgJsObjFormat.PT22_La = msg.b79
    msgJsObjFormat.PT22_LLa = msg.b80
    //   msgJsObjFormat.LT_HHa = msg.b81
    // msgJsObjFormat.LT_Ha = msg.b82
    // msgJsObjFormat.LT_La = msg.b83
    // msgJsObjFormat.LT_LLa = msg.b84
    msgJsObjFormat.TE12SP_Ha = msg.b85
    msgJsObjFormat.PTSPa = msg.b86
    msgJsObjFormat.ALLAa = msg.b87
    // msgJsObjFormat.BY19 = msg.b88
    // msgJsObjFormat.BY19 = msg.b89

    // msgJsObjFormat.BY19 = msg.b90
    // msgJsObjFormat.BY19 = msg.b91
    // msgJsObjFormat.BY19 = msg.b92
    // msgJsObjFormat.BY19 = msg.b93
    // msgJsObjFormat.BY19 = msg.b94
    // msgJsObjFormat.BY19 = msg.b95
    resolve(msgJsObjFormat)
  }).then((msg) => {
    that.$store.commit("STATIONDATA", msg)
  })
}
let stationDataReal = (msg) => {
  // console.log('---------msg',msg);
  new Promise((resolve, reject) => {
    let msgJsObjFormat = {
      // station: "占位",
      // sid: 0,
      // space: 0,
      way: 0,
      Timestamp: 1536997080,
      date: "2030-09-11",
      time: "00:00:00",
      ft11_u: 0,
      ft21_u: 0,
      q1_u: 0,
      te00: 0
    }

    msgJsObjFormat.sid = parseInt(msg.sid.slice(2), 16)
    msgJsObjFormat.date = msg.sdate
    msgJsObjFormat.time = msg.stime
    msgJsObjFormat.Timestamp = msg.timestamp
    msgJsObjFormat.ft11_u = msg.bd0.toFixed(1)
    msgJsObjFormat.ft21_u = msg.bd1.toFixed(1)

    msgJsObjFormat.te00 = msg.bd12.toFixed(1)

    msgJsObjFormat.q1_u = msg.bd19.toFixed(1)
    // msgJsObjFormat.Q2 = msg.bd20.toFixed(1)
    // msgJsObjFormat.DL = msg.bd21.toFixed(1)
    // msgJsObjFormat.ZFT31 = msg.bd24.toFixed(1)
    // msgJsObjFormat.ZQ1 = msg.bd25.toFixed(1)
    // msgJsObjFormat.ZQ2 = msg.bd26.toFixed(1)

    resolve(msgJsObjFormat)
  }).then((msg) => {
    that.$store.commit("STATIONDATAREAL", msg)
  })
}
//报警灰色王
let stationDatAlaH = (msg) => {
  // console.log('---------msg',msg);
  new Promise((resolve, reject) => {
    let msgJsObjFormat = {
      // station: "占位",
      sid: 0,
      status: 0
    }

    msgJsObjFormat.sid = msg.sid

    msgJsObjFormat.status = msg.status

    resolve(msgJsObjFormat)
  }).then((msg) => {
    that.$store.commit("STATIONDATAALAH", msg)
  })
}
let Comerr = (msg) => {
  new Promise((resolve, reject) => {
    resolve(msg)
  }).then((msg) => {
    // //console.log('采集数据进仓库前msg是什么？')
    // //console.log(msg)
    that.$store.commit("COMERR", msg) //把msg放入仓库//
  })
}

export default {
  stationData,
  Comerr,
  stationDataReal,
  stationDatAlaH
}
