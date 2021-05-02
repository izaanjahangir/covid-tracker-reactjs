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
      width: 2,
      dashArray: 0,
    },

    markers: {
      size: 2,
      colors: ["#008369"],
      strokeColors: ["#008369"],
      shape: "circle",
    },
    plotOptions: {
      area: {
        fillTo: "origin",
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
        "04-jan-2020",
        "05-jan-2020",
        "06-jan-2020",
        "07-jan-2020",
        "08-jan-2020",
        "09-jan-2020",
        "10-jan-2020",
        "11-jan-2020",
        "12-jan-2020",
        "13-jan-2020",
        "14-jan-2020",
        "15-jan-2020",
        "16-jan-2020",
        "17-jan-2020",
        "18-jan-2020",
        "19-jan-2020",
        "20-jan-2020",
        "21-jan-2020",
        "22-jan-2020",
        "23-jan-2020",
        "24-jan-2020",
        "25-jan-2020",
        "26-jan-2020",
        "27-jan-2020",
        "28-jan-2020",
        "29-jan-2020",
        "30-jan-2020",
        "01-feb-2020",
        "02-feb-2020",
        "03-feb-2020",
        "04-feb-2020",
        "05-feb-2020",
        "06-feb-2020",
        "07-feb-2020",
        "08-feb-2020",
        "09-feb-2020",
        "10-feb-2020",
        "11-feb-2020",
        "12-feb-2020",
        "13-feb-2020",
        "14-feb-2020",
        "15-feb-2020",
        "16-feb-2020",
        "17-feb-2020",
        "18-feb-2020",
        "19-feb-2020",
        "20-feb-2020",
        "21-feb-2020",
        "22-feb-2020",
        "23-feb-2020",
        "24-feb-2020",
        "25-feb-2020",
        "26-feb-2020",
        "27-feb-2020",
        "28-feb-2020",
        "29-feb-2020",
        "30-feb-2020",
        "01-mar-2020",
        "02-mar-2020",
        "03-mar-2020",
        "04-mar-2020",
        "05-mar-2020",
        "06-mar-2020",
        "07-mar-2020",
        "08-mar-2020",
        "09-mar-2020",
        "10-mar-2020",
        "11-mar-2020",
        "12-mar-2020",
        "13-mar-2020",
        "14-mar-2020",
        "15-mar-2020",
        "16-mar-2020",
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
      data: new Array(80).fill(0).map((_) => randonNumber(-100, 100)),
    },
  ],
};

function LineGraph() {
  return (
    <div>
      <Chart
        options={GRAPH_OPTIONS.options}
        series={GRAPH_OPTIONS.series}
        type="line"
        width="100%"
        height="480px"
      />
    </div>
  );
}

export default LineGraph;
