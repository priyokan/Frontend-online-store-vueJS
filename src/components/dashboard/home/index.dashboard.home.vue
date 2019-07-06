<template>
    <div>
        <div class='md-layout md-gutter' style="margin:auto">
            <topChard
             icon='shopping_cart'
             iconColor='#e00d3e'
             title="Pesanan"
             count=3
             class="md-layout-item"
            />
            <topChard        
             iconColor='#13aed8'
             title="Dalam proses"
             count=5
             class="md-layout-item"
            />
            <topChard
             icon='check_circle'
             iconColor='#00d815'
             title="Siap diambil"
             count=8
             class="md-layout-item"
            />
        </div>
        
        <div class="carts"> 
            <md-table style="position:relative;
                          left:0%;
                          right:0%;
                          width:100%;
                          ">
                <tr>
                    <td width=55% style="min-height:700px">
                        <Progres></Progres>
                        <Progres></Progres>
                        <Progres></Progres>
                    </td>
                    <td>
                        <Chart ></Chart>
                    </td>
                </tr>
            </md-table>
        </div>
    </div>
</template>
<script>
import Chart from './chart'
import Progres from './progres'
import topChard from './top-card'
export default {
    components:{
        Chart,
        topChard,
        Progres,
    },
    data() {
        return {
            amount:84,
            buffer:20,
        }
    },
}
</script>
<style lang="scss" scoped>
tr,td{
    border:1px solid #d0d0d0;
    }
.carts{
    margin: 10px
}
</style>

