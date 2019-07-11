<template>
    <div>
        <md-card>
            <md-button v-show="!action||action=='addForm'" @click="showFormAdd" class="md-fab md-mini md-primary" style="z-index:10" > 
            <md-icon v-show="!tambah">add</md-icon>
            <md-icon v-show="tambah">close</md-icon>
            </md-button>
            <md-button v-show="!selected&&!action" class="md-fab md-mini" disabled> 
            <md-icon v-show="!action">save</md-icon>
            </md-button>
            <md-button v-show="selected&&!action||action=='editForm'" class="md-fab md-mini" style="background-color:#25db3a;z-index:10"> 
            <md-icon v-show="!action">save</md-icon>
            <md-icon v-show="action=='editForm'">close</md-icon>
            </md-button>
            <md-button v-show="!selected&&!action" class="md-fab md-mini" style="z-index:0" disabled>
            <md-icon v-show="!action">delete_sweep</md-icon> 
            </md-button>
            <md-button v-show="selected&&!action||action=='deleteForm'" @click="showFormDelete" class="md-fab md-mini" style="z-index:10"> 
            <md-icon v-show="!action">delete_sweep</md-icon>
            <md-icon v-show="action=='deleteForm'">close</md-icon>
            </md-button>
            <router-view> </router-view>
            <md-tabs>
                <md-tab v-for="(item, index) in menus" 
                        :key="index" 
                        :id="item" 
                        :md-label="item"> <Table @rowClicked="TableClicked" :type='item' :kuee='kues'/> </md-tab>
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
            kues:[],
            selected:null,
            tambah:null,
            action:null,
        }
    },
    methods: {
         TableClicked(){
             this.selected=localStorage.getItem('selected')
         },
         showFormAdd(){
            if(!this.tambah){
            // this.headerClass.push('header-turun')
            this.tambah= !this.tambah
            this.$router.push('/dashboard/manage/kue/add')
            this.action='addForm'
            }else{
            // this.headerClass.pop()
            this.tambah= !this.tambah
            this.$router.push('/dashboard/manage/kue')          
            this.action=null
            }
        },
        showFormEdit(){
            if(!this.action){
            // this.headerClass.push('header-turun')
            this.action="editForm"
            this.$router.push('/dashboard/manage/kue/edit')
            }else{
            // this.headerClass.pop()
            this.action=null
            this.$router.push('/dashboard/manage/kue')          
            }
        },
        showFormDelete(){

            if(!this.action){
            this.action="deleteForm"
            this.$router.push('/dashboard/manage/kue/delete')
            }else{
            this.action=null
            this.$router.push('/dashboard/manage/kue')          
            }
        },
      getClass: (index) => ({
      }),
      onSelect (item) {
        localStorage.setItem('selected',JSON.stringify(item))
        this.selected = localStorage.getItem('selected')
      },
        getMenu(){
            const option = {
            baseURL: localStorage.getItem("api_url")+"/admin/menu",
            timeout: 1500,
            headers: {'content-type': 'application/x-www-form-urlencoded',
                      'token':localStorage.getItem('token')},
          }
          Axios(option)
          .then((result) => {
            this.menus.push('all')
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
        // localStorage.removeItem('selected') 
    },
    updated() {        
        let updatingTbl = localStorage.getItem('updateTable')     
        if(localStorage.getItem('selected')=='undefined'||!localStorage.getItem('selected')){
            this.selected=null
        }
        if(updatingTbl){
            this.kues.length=0
            this.getKue()
            this.action=null
            localStorage.removeItem('updateTable')
            this.tambah=false
            // this.headerClass.pop()
        }
    },
}
</script>
<style lang="scss" scoped>
.md-button{
    float: left;
}

</style>
<style>
.md-tabs-content{
    position: relative;
    right: 100px;
}
</style>

