
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['','','','','','Time',''],  //tarihler, içinde foreach olabilir
      datasets: [
        {
          label: 'Roll',
          borderDash: [5, 5],
          data: [-0.2, 0.089, 0.12, 0.187, 0.01, 0.7],
          borderWidth: 1.2,        
          backgroundColor: '#dc3545',
          borderColor: '#dc3545',
          hoverBorderColor: 'rgb(184, 37, 241)',
          hoverBackgroundColor: 'rgb(184, 37, 241)'
        },
        {
          label: 'Pitch',
          data: [0.18, -0.989, 1.1, -0.87, -0.21, -0.2],
          borderDash: [3, 2],
          borderWidth: 1.2,
          backgroundColor: '#198754',
          borderColor: '#198754',
          hoverBorderColor: 'rgb(184, 37, 241)',
          hoverBackgroundColor: 'rgb(184, 37, 241)'
        },
        {
          label: 'Yaw',
          data: [-0.18, 0.989, 0.4, 0.87, -0.01, 1],   //anlık veriler, içinde foreach olabilir gelen veri tarihle matchleşmek zorunda.
          borderWidth: 1.2,
          backgroundColor: '#0d6efd',
          borderColor: '#0d6efd',
          hoverBorderColor: 'rgb(184, 37, 241)',
          hoverBackgroundColor: 'rgb(184, 37, 241)'
        }
    ]
    },
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          beginAtZero: true
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
    
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
    }
  });



