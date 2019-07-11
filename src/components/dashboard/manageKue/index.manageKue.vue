<template>
    <div>
        <md-card>
            <md-tabs>
                <md-tab v-for="(item, index) in menus" :key="index" :id="item" :md-label="item"> <Table :kuee='kues'/> </md-tab>
                <md-tab id="tab-all" md-label="All"> <Table :kuee='kues'/> </md-tab>
            </md-tabs>
        </md-card>
    </div>
</template>
<script>
import Table from './table'
import Axios from 'axios'
export default {
    components:{
        Table,
    },
    data() {
        return {
            menus:[],
            kues:[]
        }
    },
    methods: {
        getMenu(){
            const option = {
            baseURL: localStorage.getItem("api_url")+"/admin/menu",
            timeout: 1500,
            headers: {'content-type': 'application/x-www-form-urlencoded',
                      'token':localStorage.getItem('token')},
          }
          Axios(option)
          .then((result) => {
            result.data.forEach(el => {
              this.menus.push(el.namaMenu)
            });
          }).catch((err) => {
            
          });
        },
        getKue(){
            const option = {
            baseURL: localStorage.getItem("api_url")+"/admin/kue",
            timeout: 1500,
            headers: {'content-type': 'application/x-www-form-urlencoded',
                      'token':localStorage.getItem('token')},
          }
          Axios(option)
          .then((result) => {
            result.data.forEach(el => {
              this.kues.push(el)
            });
          }).catch((err) => {
            
          });
        },
    },
    created() {
        
    },
    mounted() {
        this.getKue()
        this.getMenu()
    },
}
</script>