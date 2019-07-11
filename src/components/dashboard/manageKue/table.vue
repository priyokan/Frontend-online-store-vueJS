<template>
  <div>
    <md-table v-model="searched" @md-selected="onSelect">
      <md-table-toolbar :class="headerClass" >
        <div class="md-toolbar-section-start" >
          <h1 class="md-title">Menu</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        v-show="notFound"
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="showFormAdd">Create New User</md-button>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item,index }"  :class="getClass(index)" md-selectable="single">
        <md-table-cell md-label="#" md-numeric>{{ index+1 }}</md-table-cell>
        <md-table-cell md-label="Nama" md-sort-by="namaKue">{{ item.namaKue }}</md-table-cell>
        <md-table-cell md-label="Deskripsi" md-sort-by="deskripsi">{{ item.deskripsi }}</md-table-cell>
        <md-table-cell md-label="Harga"> {{item.harga}}</md-table-cell>
        <md-table-cell md-label="Type" md-sort-by="namaKue">{{ item.menuType }}</md-table-cell>
        <md-table-cell md-label="Gambar"><img :src="item.imgKue" alt="" style="
          width: 60px;
          height: 30px;
          object-fit: cover;"> </md-table-cell>
        <md-table-cell md-label="Pesanan" md-sort-by="deskripsi">{{ item.jumlahPesanan }}</md-table-cell>    
      </md-table-row>
    </md-table>
  </div>
  
</template>

<script>

  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.namaKue ).includes(toLower(term)))
    }

    return items
  }
import Axios from 'axios';

  export default {
    name: 'TableKue',
    props:{
      kuee:Array,
      type:String,
    },
    components:{
    },
    data: () => ({
      search: null,
      searched: [],
      selected:null,
      tambah:null,
      kues: [ ],
      action:null,
      notFound:false,
      headerClass:['normal-header']
    }),
    methods: {
      searchOnTable () {
        this.searched = searchByName(this.kues, this.search)
      },
      showFormAdd(){
        if(!this.tambah){
          this.headerClass.push('header-turun')
          this.tambah= !this.tambah
          this.$router.push('/dashboard/manage/kue/add')
          this.action='addForm'
        }else{
          this.headerClass.pop()
          this.tambah= !this.tambah
          this.$router.push('/dashboard/manage/kue')          
          this.action=null
        }
      },
      showFormEdit(){
        if(!this.action){
          this.headerClass.push('header-turun')
          this.action="editForm"
          this.$router.push('/dashboard/manage/kue/edit')
        }else{
          this.headerClass.pop()
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
        this.$emit('rowClicked')
      },
      getApi(){

        this.kuee.forEach(el => {
          if(el.menuType==this.type){
            this.kues.push(el)
          }
          else if(this.type=='all'){
            this.kues.push(el)  
          }
        });

        // const option = {
        //     baseURL: localStorage.getItem("api_url")+"/admin/kue",
        //     timeout: 1500,
        //     headers: {'content-type': 'application/x-www-form-urlencoded',
        //               'token':localStorage.getItem('token')},
        //   }
        //   Axios(option)
        //   .then((result) => {
        //     result.data.forEach(el => {
        //       this.kues.push(el)
        //     });
        //   }).catch((err) => {
            
        //   });
      }
    },
    updated() {
      let updatingTbl = localStorage.getItem('updateTable')      
      if(localStorage.getItem('selected')=='undefined'||!localStorage.getItem('selected')){
        this.selected=null
      }
      if(updatingTbl){
        this.kues.length=0
        this.getApi()
        this.action=null
        this.tambah=false
        this.headerClass.pop()
      }
      if(this.headerClass>1){
      }
    },

    created () {
      this.searched = this.kues
      this.getApi()
    },
    mounted() {
      setTimeout(() => {
        this.notFound=true
      }, 1500);

    },
  }
</script>

<style lang="scss" scoped>
  tr{
    text-align: left;
  }
  .md-field {
    max-width: 300px;
  } 
  .header-turun{
    margin-bottom: 400px;
  }
</style>
