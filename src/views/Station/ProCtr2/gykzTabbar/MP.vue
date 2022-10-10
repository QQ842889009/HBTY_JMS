<template>
   <div :style="{position:BP.bsPosition , left:BP.bsLeft+ 'px' , top:BP.bsTop+ 'px'}" class="z">
       <div @click="isClick" v-show="BP.zShow">BS</div>
        <Modal :xShow="xShow" :title="title" @hideModal="hideModal" @submit="submit">
             <!--标题部分-->

            <!--内容部分-->
            <div class="a" slot="text">
                <div class="c">
                    <div class="c-b">阀门开/关</div>
                    <div class="c-a"><el-tooltip :content="'当前状态 ：' + value" placement="top">
                        <el-switch
                        v-model="value"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-value="1"
                        inactive-value="0"
                        active-text="启动"
                        inactive-text="关闭"
                        @change="change(value)"
                        >
                        </el-switch>
                    </el-tooltip>
                </div>
                </div>   <!--开关-->
                <div class="d">
                        <div v-show="BP.bsS">运行
                            <div  class="d-a">
                                <i class="search-icon el-icon-circle-check"></i>
                            </div>
                        </div>
                            <div v-show="!BP.bsS" class="d-d">停止
                                <div  class="d-a"><i class="search-icon el-icon-warning"></i>
                             </div>
                            </div>
                     </div>   <!--运行停止状态-->
                <div class="b">
                         <div class="b-a">
                             <p>阀门给定:</p>
                             <input type="number" v-model = "BValue" @keydown.enter="myKeyDown(BValue)" >
                         </div>
                         <div class="b-b">
                             <p>阀门反馈:</p>
                             {{BP.BFVFB}}
                         </div>
                </div>   <!--阀门-->
                <div class="e">
                    <div v-show="BP.bsRM"><div class="e-b">远程</div>
                    <div class="e-a"><span class="iconfont icon-wifi_px_rounded"></span></div></div>
                    <div v-show="!BP.bsRM"><div class="e-b">就地</div>
                    <div class="e-a"><span class="iconfont icon-wifi_slash"></span></div></div>
                </div>   <!--远程就地-->
                <div class="f">
                   <div class="f-a">
                       <p>二回压力: </p>
                       {{BP.TP}}
                   </div>
                    <div class="f-b">
                        <p>设定压力: </p>
                        {{BP.STP}}
                    </div>
                </div>
            </div>
        </Modal>
    </div>
</template>
<script>
    import Modal from './Modal.vue'
    export default {
        name: '',
        data(){
            return {
                title: '补水阀门',
                xShow: false,
                value:'' ,          // 是开关状态0/1
                BValue:''              //阀门的给定
            }
        },
        props:{
          BP:{
              type:Object,
              default:{
                 bsLeft:'',              //位置   1
                 bsTop:'',                       //1
                 bsPosition:'absolute',     // 1
                 value:'',            //是开关状态0/1
                 bsS:1,                 //运行状态 1
                 bsA:0,                   //故障   1
                 bsRM:0,                    //远程就地 1
                 BFVFB:'',                      //反馈 1
                 BFVSP:'',                          //给定 1
                 TP:'',              //二回压力 1
                 STP:'',                      //1
                 zShow:1,
                 bsTitle:''
              }
          }
        },
        methods: {
            hideModal(){
                this.xShow = false
            },
            submit(){
                this.xShow = false
            },
            isClick(){
                this.xShow = true;
                this.value = this.BP.value;
                this.BValue = this.BP.BFVSP
            },
             change(value){
                 console.log(value);
                this.$emit('confirmbsValue',value)
             },
             myKeyDown(BValue){
                this.$emit('confirmBSP',BValue);
                console.log(BValue);
            },

        },
        components:{
            Modal
        }
    }
</script>
<style scoped lang="less">
.a{
    height: 200px;
    width:500px;
    display: flex;
   justify-content:space-around;
}
input{
    border: 1px solid cornflowerblue;
    width: 100px;
    height: 30px;
    border-radius: 18px;
    outline: none;
    padding-left:10px;
}
.iconfont {
    font-size: 40px; //图片
}
.d{
    width: 64px;
    height: 90px;
     border: 1px solid gray;
     padding-top: 4px;
    padding-left: 8px;
}

.d-a{
    font-size:35px;
    padding-top: 10px;
    padding-left:6px;

}
.d-d{
    color: red;
}
.c{
    width: 134px;
    height:90px;
    border: 1px solid  gray;
    padding-top: 4px;
    padding-left: 8px;
}
.c-a {
    padding-top: 10px;
}
.c-b{
    padding-left: 5px;
}
.b{
   border: 1px solid  gray;
    width: 240px;
    height: 90px;
}
.b-a{
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-left: 8px;

}
.b-b{
    display: flex;
    flex-direction: row;
    padding-top: 14px;
     padding-left: 8px;
}
.z{
    position: absolute;
}
.e{
    position: absolute;
    top:160px;
    left:120px;
    width: 90px;
    height: 90px;
    border: 1px solid  gray;
    padding-top: 4px;
    padding-left: 8px;
}
.e-a{
    padding-top: 10px;
    /*font-size: 40px;*/
      padding-left: 15px;
}
.e-b{
    padding-left:9px;
}
.f{
   position: absolute;
   top:160px;
   left:290px;
    width: 240px;
    height: 90px;
   border: 1px solid gray;
    padding-top: 4px;
    padding-left: 8px;

}
.f-a{
    display: flex;
    flex-direction: row;
}
.f-b{
    display: flex;
    flex-direction: row;
    padding-top: 14px;
}


</style>