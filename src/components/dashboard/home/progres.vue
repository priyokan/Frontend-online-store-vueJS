<template>
  <div id="progres-bar">
    <p style="text-align:left;margin:0px;font-size:15px"> {{title}}: </p>
    <div class="kosong"/>
    <div class="proses" :style="prosesa"/>
    <div class="finish" :style="finisha"/>
    <div class='keterangan'>
        <span style="float:left">Diproses:{{proses}}</span>
        <span style="float:right">Selesai:{{finish}}</span>
    </div>
  </div>
</template>

<script>

export default {
 
    name: 'ProgressBarBuffer',
    props:{
        title:String,
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
    margin: 10px auto;
    border-radius: 50px;
    width: 80%
  }
.proses{
    border: 3px solid;
    opacity: 0.2;
    border-radius: 50px;
    position: relative;
    justify-content: left;  
    top: -6px;
    height: 0pc;
    animation: progress-bar 2s;
  }
.finish{
    border: 3px solid;
    border-radius: 50px;
    position: relative;
    justify-content: left;  
    top: -12px;
    height: 0pc;
    z-index: 3; 
    animation: progress-bar 1s;
  }
@keyframes progress-bar {
   0% { width: 0; }
}
.keterangan{
    display: inline;
}
.kosong{
    border: 3px solid #b0b0b0;
    border-radius: 50px;
    border-color: #f0f0f0;
    height: 0pc;
  }
  span{
      margin-top: -3%;
      font-size: 10px;
  }
</style>