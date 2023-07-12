const apiResult = [
  { spendingCategory: 'Category 1', totalSum: 0.25 },
  { spendingCategory: 'Category 2', totalSum: 0.3 },
  { spendingCategory: 'Category 3', totalSum: 0.25 },
  { spendingCategory: 'Category 4', totalSum: 0.3 },
  { spendingCategory: 'Category 5', totalSum: 0.25 },
  { spendingCategory: 'Category 6', totalSum: 0.3 },
  { spendingCategory: 'Category 7', totalSum: 0.4 },
  { spendingCategory: 'Category 8', totalSum: 0.05 },
  // { spendingCategory: 'Category 9', totalSum: 0.15 },
  // { spendingCategory: 'Category 10', totalSum: 0.2 }
];

const returnPercentage = (currentValue) => Math.round(currentValue * 100) + "%";

const procentArr = apiResult.map((elm) => elm.totalSum * 100);
console.log(procentArr);

let StyleArr = [];
let dataArr = [];
let dataLabels = [];

apiResult.forEach((item, index) => {
  $('.donut').append(`<div class="donut__slice donut__slice__${index}"></div>`);
  StyleArr.push(`--${index}: ${item.totalSum};`);
  dataArr.push(item.totalSum * 100);
  dataLabels.push(item.spendingCategory);
});

let style = $('.donut').attr('style');
style = StyleArr.join(' ');

$(function () {
  $('.donut').attr('style', style);
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: dataLabels,
    datasets: [
      {
        label: '# of Tomatoes',
        data: procentArr,
        backgroundColor: [
          '#FF6838',
          '#FFC820',
          '#97C95C',
          '#1685B8',
          '#FF33FF',
          '#00FFFF',
          '#FF9933',
          '#663399',
          '#FF3366',
          '#0099CC'
        ],
      }
    ]
  },
  options: {
    tooltips: {
      enabled: false
    },
    responsive: false,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data.totalSum;
          });
          let percentage = (value * 100 / sum).toFixed(2) + "%";
          return percentage;
        },
        color: '#fff',
      }
    }
  }
});
