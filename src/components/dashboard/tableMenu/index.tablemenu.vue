<template>
  <div>
    <md-table v-model="searched" md-card @md-selected="onSelect">
      <md-table-toolbar :class="headerClass" >
        <md-button v-show="!action||action=='addForm'" @click="showFormAdd" class="md-fab md-mini md-primary" style="z-index:10"> 
          <md-icon v-show="!action">add</md-icon>
          <md-icon v-show="action=='addForm'">close</md-icon>
        </md-button>
        <md-button v-show="!action||action=='editForm'" @click="showFormEdit" class="md-fab md-mini" style="background-color:#25db3a;z-index:10"> 
          <md-icon v-show="!action">save</md-icon>
          <md-icon v-show="action=='editForm'">close</md-icon>
        </md-button>
        <md-button v-show="!action||action=='deleteForm'" @click="showFormDelete" class="md-fab md-mini" style="z-index:10"> 
          <md-icon v-show="!action">delete_sweep</md-icon>
          <md-icon v-show="action=='deleteForm'">close</md-icon>
        </md-button>
        <div class="md-toolbar-section-start" >
        <router-view> </router-view>
          <h1 class="md-title">Menu</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item,index }"  :class="getClass(index)" md-selectable="single">
        <md-table-cell md-label="#" md-numeric>{{ index }}</md-table-cell>
        <md-table-cell md-label="Nama" md-sort-by="namaMenu">{{ item.namaMenu }}</md-table-cell>
        <md-table-cell md-label="Deskripsi" md-sort-by="deskripsi">{{ item.deskripsi }}</md-table-cell>
        <md-table-cell md-label="Gambar"><img :src="item.imgMenu" alt="" style="
          width: 60px;
          height: 30px;
          object-fit: cover;"> </md-table-cell>
        <md-table-cell></md-table-cell>       
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
      return items.filter(item => toLower(item.namaMenu).includes(toLower(term)))
    }

    return items
  }
import Axios from 'axios';

  export default {
    name: 'TableSearch',
    components:{
    },
    data: () => ({
      search: null,
      searched: [],
      menus: [ ],
      action:null,
      headerClass:['normal-header']
    }),
    methods: {
      newUser () {
      },
      searchOnTable () {
        this.searched = searchByName(this.menus, this.search)
      },
      showFormAdd(){
        if(!this.action){
          this.headerClass.push('header-turun')
          this.action="addForm"
          this.$router.push('/dashboard/manage/menu/add')
        }else{
          this.headerClass.pop()
          this.action=null
          this.$router.push('/dashboard/manage/menu')          
        }
      },
      showFormEdit(){
        if(!this.action){
          this.headerClass.push('header-turun')
          this.action="editForm"
          this.$router.push('/dashboard/manage/menu/edit')
        }else{
          this.headerClass.pop()
          this.action=null
          this.$router.push('/dashboard/manage/menu')          
        }
      },
      showFormDelete(){

        if(!this.action){
          this.action="deleteForm"
          this.$router.push('/dashboard/manage/menu/delete')
        }else{
          this.action=null
          this.$router.push('/dashboard/manage/menu')          
        }
      },
      getClass: (index) => ({
      }),
      onSelect (item) {
        this.selected = item
        localStorage.setItem('selected',JSON.stringify(item))
      },
      getApi(){
        const option = {
            baseURL: localStorage.getItem("api_url")+"/admin/menu",
            timeout: 1500,
            headers: {'content-type': 'application/x-www-form-urlencoded',
                      'token':localStorage.getItem('token')},
          }
          Axios(option)
          .then((result) => {
            result.data.forEach(el => {
              this.menus.push(el)
            });
          }).catch((err) => {
            
          });
      }
    },
    created () {
      this.searched = this.menus
    },
    mounted() {
      this.action=null    
      console.log('hahah')
      this.getApi()
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
    margin-bottom: 370px;
  }
</style>
