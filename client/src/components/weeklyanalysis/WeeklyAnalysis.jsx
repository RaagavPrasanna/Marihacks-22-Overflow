import { useEffect } from 'react'
import { useState } from 'react'
import { Bar } from "react-chartjs-2";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function WeeklyAnalysis({usersSelections, days}) {


  const [weeklyData, setWeeklyData] = useState({

  });
  const calculateCaffeine = (selections) => {
    let vals = [];
    console.log('selections', selections)
    days.map((key) => {
      const day = selections[key];
        if(day !== undefined) {
        vals.push(selections[key].reduce((acc, curr) => {
          return acc + curr.caffeine;
        }, 0));
    }
    });
    return vals;
  }

  const getLabels = (selections) => {
    let labels = [];
    days.map((key) => {
      const day = selections[key];
      if(day !== undefined) {
        labels.push(key);
      }
    });
    return labels;
  }

  const [chartData, setChartData] = useState({    labels: [], 
    datasets: [
      {
        label: "Weekly Caffeine Intake",
        data: [],
        backgroundColor: [
          "rgba(144, 92, 24, 0.8)"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]});

  useEffect(() => {
    const weeklySelections = JSON.parse(localStorage.getItem("weeklySelections"));
    if(weeklySelections) {
      setWeeklyData({...weeklySelections});
    }
  }, [usersSelections])

  useEffect(() => {
    console.log(weeklyData)
    if(Object.keys(weeklyData).length !== 0) {
      console.log(Object.keys(weeklyData))
    setChartData({
      labels: getLabels(weeklyData), 
      datasets: [
        {
          label: "Weekly Caffeine Intake",
          data: calculateCaffeine(weeklyData),
          backgroundColor: [
            "rgba(144, 92, 24, 0.8)"
          ],
          borderColor: "black",
          borderWidth: 2
        }
      ]
    })
  }
  },[weeklyData])

  return (
      <div style={{height: "500px", display: 'flex', justifyContent: 'center ', alignItems: 'center'}}>
        <Bar width="600" height="250"
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Weekly Caffeine Intake"
              },
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
  )
}

export default WeeklyAnalysis