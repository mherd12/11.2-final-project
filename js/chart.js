$(function () { 
  Highcharts.setOptions({
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, '#41f4df'],
                [1, '#41caf4']
                ]
        },
        borderWidth: 2,
        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
        plotShadow: true,
        plotBorderWidth: 1
    }
  });
 
  var myChart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Where Dogs Are More Popular Than Cats In the U.S.'
        },
      subtitle: {
        text: 'Source: Washington Post'
      },
        xAxis: {
          lineColor: '#4ff441', 
            categories: ['Arkansas', //1
                         'Texas', //2
                         'New Mexico', //3
                         'Oklahoma', //4
                         'Louisana', //5
                         'Mississippi', //6
                         'Arizona', //7
                         'Tennessee', //8
                         'Missouri', //9
                         'Georgia', //10
                        ]
        },
        yAxis: {
            title: {
              text: 'millions of pets',
              
            },
          tickInterval: .5 * 1.5 * 2,
          min: 1,
          max: 7,
        },
        series: [{
            name: 'Dogs',
            data: [
              1.097, //1 
              7.163, //2
              .703, //3
              1.327,//4
              1.115, //5
              .846, //6
              1.798, //7
              2.157, //8
              1.978, //9
              2.479, //10     
            ],
          color: '#416df4',
          
          
        }, {
            name: 'Cats',
            data: [
             .81, //1
             5.565, //2
             .533, //3
             1.041, //4 
             .877, //5
             .668, //6
             1.438, //7
             1.749, //8
             1.653, //9 
             2.162, //10 
                  ],
          color: '#f44176'
        }]
    });
});