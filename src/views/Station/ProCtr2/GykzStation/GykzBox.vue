<template>
  <div class="gykzBox">
    <div class="dialogBox">
      <img class="imgBox" :src="flowSheet" style="float: left; z-index: -999" />

      <d-abc
        :stylePosition="stylePosition.styleDLPosition"
        :getValueA="statX.DLAV"
        :getValueB="statX.DLBV"
        :getValueC="statX.DLCV"
      ></d-abc>
      <tw-station
        :stylePosition="stylePosition.styleStPosition"
        :getValue="getStation"
      />
      <fan
        :stylePosition="stylePosition.styleBp21FanPosition"
        :getValue="statX.BP21FB"
      />
      <fan
        :stylePosition="stylePosition.styleBp22FanPosition"
        :getValue="statX.BP22FB"
      />
      <fan
        :stylePosition="stylePosition.styleMp1FanPosition"
        :getValue="statX.MP1FB"
      />
      <fan
        :stylePosition="stylePosition.styleMp2FanPosition"
        :getValue="statX.MP2FB"
      />
      <!-- ////////////////////////////////////////////////////////// -->
      <fv-sp :statX="statX" :stylePosition="stylePosition.styleFv1Position" />
      <fv-sp :statX="statX" :stylePosition="stylePosition.styleFv2Position" />
      <xv :statX="statX" :stylePosition="stylePosition.styleFv2Position" />
      <bp211-pop
        :statX="statX"
        :stylePosition="stylePosition.styleBp21Position"
      />
      <bp211-pop
        :statX="statX"
        :stylePosition="stylePosition.styleBp22Position"
      />
      <!-- <qsp-1 :statX="statX" :stylePosition="stylePosition.styleQsbPosition" /> -->
      <bp212-pop
        :statX="statX"
        :stylePosition="stylePosition.styleBp11Position"
      />
      <mp1 :statX="statX" :stylePosition="stylePosition.styleMp1Position" />
      <mp1 :statX="statX" :stylePosition="stylePosition.styleMp2Position" />
      <xyv :statX="statX" :stylePosition="stylePosition.styleXyvPosition" />
      <!-- <tw-lt
        :stylePosition="stylePosition.styleLT2Position"
        :getValue="(100 * statX.LT) / 3 + '%'"
      ></tw-lt> -->
    </div>
    <div class="dataBase">
      <tw-text-value
        :stylePosition="stylePosition.styleFT11Position"
        :getValue="statX.FT11"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleFT21Position"
        :getValue="statX.FT21"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleFT12Position"
        :getValue="statX.FT12"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleFT22Position"
        :getValue="statX.FT22"
      />

      <tw-text-value
        :stylePosition="stylePosition.styleTE11Position"
        :getValue="statX.TE11"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleTE12Position"
        :getValue="statX.TE12"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleTE21Position"
        :getValue="statX.TE21"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleTE22Position"
        :getValue="statX.TE22"
      />

      <tw-text-value
        :stylePosition="stylePosition.styleTE22_MPPosition"
        :getValue="statX.TE22MP"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleTE221Position"
        :getValue="statX.TE221"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleTE222Position"
        :getValue="statX.TE222"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleTE223Position"
        :getValue="statX.TE223"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleTE224Position"
        :getValue="statX.TE224"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleTE225Position"
        :getValue="statX.TE225"
      />

      <tw-text-value
        :stylePosition="stylePosition.stylePT11Position"
        :getValue="statX.PT11"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT12Position"
        :getValue="statX.PT12"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT21Position"
        :getValue="statX.PT21"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT22Position"
        :getValue="statX.PT22"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT11_FVPosition"
        :getValue="statX.PT11_FV"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT22BFPosition"
        :getValue="statX.PT22BF"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT22BBPosition"
        :getValue="statX.PT22BL"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT221Position"
        :getValue="statX.PT221"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT222Position"
        :getValue="statX.PT222"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT223Position"
        :getValue="statX.PT223"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT224Position"
        :getValue="statX.PT224"
      />
      <tw-text-value
        :stylePosition="stylePosition.stylePT225Position"
        :getValue="statX.PT225"
      />

      <tw-text-value
        :stylePosition="stylePosition.styleFV1FBPosition"
        :getValue="statX.FV1FB"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleFV2FBPosition"
        :getValue="statX.FV2FB"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleXVFBPosition"
        :getValue="statX.XVFB"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleDVFBPosition"
        :getValue="statX.DVFB"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleBP21FBPosition"
        :getValue="statX.BP21FB"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleBP22FBPosition"
        :getValue="statX.BP22FB"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleMP1FBPosition"
        :getValue="statX.MP1FB"
      />
      <tw-text-value
        :stylePosition="stylePosition.styleMP2FBPosition"
        :getValue="statX.MP2FB"
      />
    </div>
  </div>
</template>

<script>
// import Fv from "views/Station/ProCtr2/GykzPop/Fv";
import FvSp from "views/Station/ProCtr2/GykzPop/FVSP";
import Xv from "views/Station/ProCtr2/GykzPop/Xv";
import Dv from "views/Station/ProCtr2/GykzPop/Dv";
import Bp1Pop from "views/Station/ProCtr2/GykzPop/Bp1Pop";
import Bp211Pop from "views/Station/ProCtr2/GykzPop/Bp211Pop";
import Bp212Pop from "views/Station/ProCtr2/GykzPop/Bp212Pop";
import Bp213Pop from "views/Station/ProCtr2/GykzPop/Bp213Pop";
import Bp214Pop from "views/Station/ProCtr2/GykzPop/Bp214Pop";
import Bp215Pop from "views/Station/ProCtr2/GykzPop/Bp215Pop";
import Mp1 from "views/Station/ProCtr2/GykzPop/Mp1";
import Qsp1 from "views/Station/ProCtr2/GykzPop/Qsp1";
import Xyv from "views/Station/ProCtr2/GykzPop/Xyv";
import twTextValue from "views/Station/ProCtr2/lable/twTextValue";
import Fan from "views/Station/ProCtr2/lable/fan";

import TwLt from "views/Station/ProCtr2/lable/twLt.vue";
import DAbc from "views/Station/ProCtr2/GykzPop/dAbc";
//引入图片
import flowSheet from "assets/img/gykz/jms01.png";
import twStation from "views/Station/ProCtr2/lable/twStation ";

export default {
  name: "GykzBox",
  data() {
    return {};
  },
  computed: {},
  props: {
    statX: Object,
    stylePosition: Object,
    flowSheet: {
      type: String,
      default: "flowSheet",
    },
    getStation: String,
  },

  computed: {},
  methods: {},
  components: {
    // Fv,
    FvSp,
    Xv,
    Dv,
    Bp1Pop,
    Bp211Pop,
    Bp212Pop,
    Bp213Pop,
    Bp214Pop,
    Bp215Pop,
    Mp1,
    Qsp1,
    twTextValue,
    Fan,
    Xyv,
    TwLt,
    DAbc,
    twStation,
  },
};
</script>

<style lang="less" scoped>
.gykzBox {
  background: rgba(0, 0, 0, 0.3);
  font-size: 400px;
}
// .imgBox{
//   width: 39.5rem;
//   height: 17rem;
// }
</style>
