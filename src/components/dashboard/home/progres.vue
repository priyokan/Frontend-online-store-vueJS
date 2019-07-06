<template>
  <div>
    <md-progress-bar md-mode="buffer" :md-value="amount" :md-buffer="buffer"></md-progress-bar>
  </div>
</template>

<script>
  export default {
    name: 'ProgressBarBuffer',
    data() {
        return {
            amount:50,
            buffer:85       
        }
    },  
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    margin: 24px;
  }
</style>