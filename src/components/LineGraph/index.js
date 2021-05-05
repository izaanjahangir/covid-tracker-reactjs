import Chart from "react-apexcharts";

function randonNumber(maximum, minimum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

const GRAPH_OPTIONS = {
  options: {
    colors: ["#00b894"],
    stroke: {
      curve: "smooth",
      lineCap: "round",
      width: 4,
      dashArray: 0,
    },
    fill: {
      type: "gradient",
    },
    markers: {
      size: 4,
      colors: ["#ffffff"],
      strokeColor: "#00b894",
      strokeWidth: 2,
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillTo: "end",
      },
    },
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "01-jan-2020",
        "02-jan-2020",
        "03-jan-2020",
        "17-mar-2020",
        "18-mar-2020",
        "19-mar-2020",
        "20-mar-2020",
        "01-jan-2020",
        "02-jan-2020",
        "03-jan-2020",
        "17-mar-2020",
        "18-mar-2020",
        "19-mar-2020",
        "20-mar-2020",
        "01-jan-2020",
        "02-jan-2020",
        "03-jan-2020",
        "17-mar-2020",
        "18-mar-2020",
        "19-mar-2020",
        "20-mar-2020",
        "01-jan-2020",
        "02-jan-2020",
        "03-jan-2020",
        "17-mar-2020",
        "18-mar-2020",
        "19-mar-2020",
        "20-mar-2020",
        "01-jan-2020",
        "02-jan-2020",
        "03-jan-2020",
        "17-mar-2020",
        "18-mar-2020",
        "19-mar-2020",
        "20-mar-2020",
      ],
    },
  },
  series: [
    {
      name: "series-1",
      data: [],
    },
  ],
};

function LineGraph() {
  return (
    <div>
      <Chart
        options={GRAPH_OPTIONS.options}
        series={GRAPH_OPTIONS.series}
        type="area"
        width="100%"
        height="480px"
      />
    </div>
  );
}

export default LineGraph;
