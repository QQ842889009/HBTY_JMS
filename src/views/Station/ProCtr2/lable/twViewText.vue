<template>
  <div>
     <div class="header" >
       <pre >{{tagName}}</pre>
       <el-divider direction="vertical" style="border: 5px;"></el-divider>
    
       <span>{{getValue}}</span>
     </div>

  </div>
</template>

<script>
  export default {
    name: "Demo1",
    data() {
      return {

        setConValue:'0',//用于记录点击前的状态
        bind:true //用于获取与失去焦点是否解除绑定

      }
    },

    computed:{
      count(){
        if(this.bind){
          this.setConValue = this.parameter.getValue
          return this.parameter.getValue;}
        else{
          return this.setConValue
        }
      }
  },
    props:{
      
            tagName: String,
              

            getValue:{
              type:String|Array,
              default:"23"
            },  //父组件过来的显示值，子组件不能更改例如BP1SP的值
         
    

    },
    methods:{
      //失去焦点，绑定父组件的值
     
    }




  }
</script>

<style lang="less"  scoped>

 
/*  */
.header{
  /*width: 5.2rem;*/
  /*height: 1.11rem;*/
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content:center;
  align-items: center ;
  :first-child{
    color: white;
    font-size: 0.4rem;
    border-bottom: 3px solid #409EFF;
    margin-left: 0.2rem;
  }
  span{
     border-bottom: 3px solid #E4E7ED;
  }
  // :last-child{
  //   color: white;
  //   font-size: 0.4rem;
  //   border-bottom: 3px solid #409EFF;
  //   margin-left: 0.2rem;
  //   margin-right: 0.2rem;
  // }


}
</style>