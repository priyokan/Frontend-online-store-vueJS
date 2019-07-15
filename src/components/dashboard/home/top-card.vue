<template>
    <div @click="route" id="top-card-home">
        <md-card md-with-hover class="md-size-3">
            <md-ripple class='md-layout'>  
                <md-icon class="icon md-size-3x" :style="coloringIcon"> 
                    <img class="img"
                         src="../../../assets/img/noun_cooking_36861.svg" 
                         v-if="!icon">                    
                    {{icon}}
                </md-icon>
                <div  class="text-layout">
                <md-card-header>
                <div class="md-title"> {{title}}:</div>
                </md-card-header>
                <md-card-content style="margin-top:-10%;"> {{count}} </md-card-content>
                </div>            
            </md-ripple>
        </md-card>
    </div>
</template>
<script>

export default {
    props:{
        icon: String,
        title:String,
        count:String,
        iconColor:String,
        url:String,
    },
    data() {
        return {
            
        }
    },
    methods: {
        route(){
            this.$router.replace(this.url)
        }
    },
    computed: {
        coloringIcon(){
            return 'color:'+this.iconColor
        }
    },
    mounted() {
    },
}
</script>
<style lang="scss" scoped>
    #top-card-home .md-card{
        height: 80px;
        margin: 0px;
    }
    #top-card-home .icon{
        margin: 2%;
    }
    .md-ripple{
        margin-left: 0px;
    }
    #top-card-home .text-layout{
        text-align: left;   
        margin: -4% 2%;
    }
    .img path{
        fill:#13aed8
    }
</style>
