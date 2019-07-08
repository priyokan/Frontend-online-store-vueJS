<template>
  <div id="dashboard" class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" style="position:fixed;background-color:#2c3e50" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
            <Navbar/>
      </md-app-toolbar>

      <md-app-drawer class="md-elevation-3" :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent navigasi " md-elevation="0">
          <h2>Mita D'brownis</h2>

          <div class="md-toolbar-section-end" >
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon style="color:#f4f4f4;
              font-weight: 1000;
              text-shadow:-3px 2px 3px #313131 ;" >keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <Sidebar/>
      </md-app-drawer>
      <md-app-content style="position:absolute;
                        padding-top:80px;
                        right:0px;
                        left:80px; 
                        overflow:auto"
                        class="md-scrollbar">     
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Navbar from './navbar'
import Sidebar from './sidebar'
  export default {  
    name: 'PersistentMini',
    components:{
        Navbar,
        Sidebar,
    },
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    },
    mounted() {
      console.log(localStorage)
    },

  }
</script>

<style lang="scss" scoped>
    #dashboard .md-app {
        position: absolute;
        width: 100vw;
        bottom: 0%;
        top: 0%;
    }
    .navigasi{
        background-image: url('../../assets/img/mixed-berry-tart.jpeg');
        background-size: cover;
        height: 150px;
    }
    .navigasi h2{
        color:#f4f4f4;
        text-shadow:-3px 2px 3px #313131 ;
    }
   // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>