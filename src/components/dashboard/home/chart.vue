<template>
  <div id="app">
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import planetChartData from './chartData.js';
export default {
    data() {
        return {
            planetChartData: planetChartData,
        }
        },  
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            options: chartData.options,
            });
        }
    },
    mounted() {
        this.createChart('planet-chart', this.planetChartData);
    }
}
</script>