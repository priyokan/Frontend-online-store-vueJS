<template>
  <div>
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
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

      <md-table-row slot="md-table-row" slot-scope="{ item,index }">
        <md-table-cell md-label="#" md-sort-by="id" md-numeric>{{ index }}</md-table-cell>
        <md-table-cell md-label="Nama" md-sort-by="namaMenu">{{ item.namaMenu }}</md-table-cell>
        <md-table-cell md-label="Deskripsi" md-sort-by="deskripsi">{{ item.deskripsi }}</md-table-cell>
        <md-table-cell md-label="Gambar"><img :src="item.imgMenu" alt="" style="width:50px"></md-table-cell>
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
    data: () => ({
      search: null,
      searched: [],
      menus: [
        
      ]
    }),
    methods: {
      newUser () {
      },
      searchOnTable () {
        this.searched = searchByName(this.menus, this.search)
      }
    },
    created () {
      this.searched = this.menus
    },
    mounted() {
      const option = {
        baseURL: localStorage.getItem("api_url")+"/admin/menu",
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar',
                  'token':localStorage.getItem('token')}
      }
      Axios(option)
      .then((result) => {
        result.data.forEach(el => {
          this.menus.push(el)
        });
        console.log(this.menus)
      }).catch((err) => {
        
      });
    },
  }
</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }
</style>