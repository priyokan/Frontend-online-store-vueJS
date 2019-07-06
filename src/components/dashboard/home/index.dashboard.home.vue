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
                    <td width=55%>
                        <h5 style="position:absolute;top:0px;left:30px;text-align:left">Pesanan dalam proses:</h5>
                        <Progres 
                            proses='30%'
                            finish='10%'
                            color='#5fefe3'/> 
                        <Progres
                            proses='80%'
                            finish='55%'
                            color='#ffe102'/>
                        <Progres
                            proses='60%'
                            finish='55%'
                            color='#e100ed'/>
                    </td>
                    <td>
                         <h5 style="position:relative;left:30px;text-align:left">Diagram pesanan:</h5>
                        <Chart ></Chart>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        ajsajs
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
table,tr,td{
    border:1px solid #d0d0d0;
    padding: 0%;
    }
.carts{
    margin: 10px
}
</style>

