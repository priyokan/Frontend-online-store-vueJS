<template>
    <div id="ordered">
        <Carousel  :per-page="3.5" :navigationEnabled="true">
            <Slide class="cards">
                <OrderedCard style="float:left"/>           
            </Slide>
            <Slide class="cards">
                <OrderedCard style="float:left"/>           
            </Slide>
            <Slide class="cards">
                <OrderedCard style="float:left"/>           
            </Slide>
            <Slide class="cards">
                <OrderedCard style="float:left"/>           
            </Slide>
            <Slide class="cards">
                <OrderedCard style="float:left"/>           
            </Slide>
            <Slide class="cards">
                <OrderedCard style="float:left"/>           
            </Slide>
            <Slide class="cards">
                <OrderedCard style="float:left"/>           
            </Slide>
            <Slide class="cards">
                <OrderedCard style="float:left"/>           
            </Slide>
            <Slide class="cards">
                <OrderedCard style="float:left"/>           
            </Slide>
        </Carousel>
    </div>
</template>
<script>
import OrderedCard from './cardPesanan'
import {Carousel,Slide} from 'vue-carousel'
export default {
    name:'ordered',
    components:{
        OrderedCard,
        Carousel,
        Slide
    },
}
</script>

<style lang="css" scoped>
#ordered{
    margin: 0%;
    padding: 0%;
}
</style>