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
                          overflow:auto"
                          class="md-scrollbar">
                <tr class="header" style="text-align:left;">
                    <th>
                        Pesanan dalam proses:
                    </th>
                    <th>
                        Diagram pesanan:
                    </th>
                </tr>
                <tr class="content">
                    <td width=55%>
                        <Progres 
                            title="Brownis"
                            proses='30%'
                            finish='10%'
                            color='#5fefe3'/> 
                        <Progres
                            title="puding"
                            proses='80%'
                            finish='55%'
                            color='#ffe102'/>
                        <Progres
                            title="cookie"
                            proses='60%'
                            finish='55%'
                            color='#e100ed'/>
                    </td>
                    <td style="padding:10px">
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
table tr.content td{
    border:1px solid #d0d0d0;
    border-top: none;
    padding: 0%;
    }
.carts{
    margin: 10px
}
.header th{
    border:1px  solid #d0d0d0;
    border-bottom: none;
    padding: 10px 30px;
}
</style>

