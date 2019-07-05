export const planetChartData = {
    type: 'doughnut',
    data: {
      labels: ['Brownies', 'Cookies', 'Puding'],
      datasets: [
        { // one line graph
          label: 'Number of Moons',
          data: [4, 5, 1,],
          backgroundColor: [
            '#F26083', // Blue
            '#cf63e8',
            '#eaef5f',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)'
          ],
          borderColor: [
            '#F26083',
            '#cf63e8',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
          ],
          borderWidth: 0
        },
      ]
    },
    options: {
      responsive: true,
      lineTension: 7,
    }
  }
  
  export default planetChartData;