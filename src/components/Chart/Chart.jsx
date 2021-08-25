import { useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { setChart } from './actionChart';

const Chart = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const statesKeys = Object.keys(storeData.statesEEUU);

  function labelCreator() {

    let labelState = [];

    statesKeys.forEach(element => {
      labelState = [...labelState, storeData.statesEEUU[element]]
    });

    return labelState
  }

  function labelDateCreator(dates) {

    const newDate = dates.map((item) => {

      const dateConf = [];

      item.toString().split('').forEach((element, idex) => {
        if (idex === 3 || idex === 5) {
          element = `${element}/`
        }
        dateConf.push(element)
      });

      return dateConf.join('')
    });

    return newDate;

  }

  useEffect(() => {

    if (storeData.pickState) {
      console.log(storeData.dataChart);

      // if (storeData.dataChart.length === 1) {
      //   const dates = storeData.dataChart[0].map((item) => item.date);
      //   const data = storeData.dataChart[0].map((item) => item.positive);
      //   dispatch(setChart(labelDateCreator(dates), data));
      // } else {
      //   const dates = storeData.dataChart.map((item) => item.date);
      //   const data = storeData.dataChart.map((item) => item.positive);
      //   dispatch(setChart(labelDateCreator(dates), data));
      // }


    } else {

      let dataStates = [];

      storeData.dataChart && storeData?.dataChart.forEach((item) => dataStates = [...dataStates, item[0].positive]);

      dispatch(setChart(labelCreator(), dataStates));

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeData.dataChart]);

  const data = {
    labels: storeData.chartConfig.labelStates,
    datasets: [
      {
        label: 'Positive Cases',
        data: storeData.chartConfig.dataStates,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Chart;