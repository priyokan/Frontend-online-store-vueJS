<template>
    <div id='cards'>    
    <md-card md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Medium size</div>
        </md-card-header-text>

        <md-card-media md-medium>
          <img src="http://localhost:8081/img/menu/brownis.jpg" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    </div>
</template>
<script>
export default {
    name:'cards',

}
</script>
<style lang="scss" scoped>
  .md-card {
    float: left;
    width: 320px;
    margin: 4px;
    display: inline-block;
    position: relative;
  }
</style>

