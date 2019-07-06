<template>
  <div id="progres-bar">
    <div class="kosong"/>
    <div class="proses" :style="prosesa"/>
    <div class="finish" :style="finisha"/>
  </div>
</template>

<script>

export default {
 
    name: 'ProgressBarBuffer',
    props:{
        color:String,
        proses:String,
        finish:String,
    },
    data() {
        return {    
        }
    },  
    computed: {
        prosesa(){
            return 'width:'+this.proses+';border-color:'+this.color
            console.log(this.color)
        },
        finisha(){
            return 'width:'+this.finish+';border-color:'+this.color
        }
    },
  }
</script>

<style lang="scss" scoped>
#progres-bar {
    margin: 24px;
    border-radius: 50px;
    width: 80%
  }
.proses{
    border: 3px solid;
    opacity: 0.3 ;
    border-radius: 50px;
    position: relative;
    justify-content: left;  
    top: -6px;
    height: 0pc;
  }
.finish{
    border: 3px solid;
    border-radius: 50px;
    position: relative;
    justify-content: left;  
    top: -12px;
    height: 0pc;
    z-index: 3; 
  }
.kosong{
    border: 3px solid #b0b0b0;
    border-radius: 50px;
    border-color: #f0f0f0;
    height: 0pc;
  }
</style>