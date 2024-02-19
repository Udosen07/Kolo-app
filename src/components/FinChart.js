import React from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

const FinChart = () => {
  const amountIn = useSelector((state) => state.fin.amountIn);
  const amountOut = useSelector((state) => state.fin.amountOut);
const profitLoss = amountIn - amountOut;
   const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Fin-Health"
      ],
    },
    yaxis: {
      title: {
        text: "N",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "N " + val ;
        },
      },
    },
    series: [
      {
        name: "Amount In",
        data: [amountIn],
      },
      {
        name: "Amount Out",
        data: [amountOut],
      },
      {
        name: "Profit/loss",
        data: [profitLoss],
      },
    ],
  };



  return (
    <div className="w-full mx-auto md:w-[80%]">
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={250}
        
        
      />
    </div>
  );
};

export default FinChart;
