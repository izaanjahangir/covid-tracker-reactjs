import Chart from "react-apexcharts";

import Loading from "../Loading";

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
      categories: [],
    },
  },
};

function LineGraph(props) {
  const render = () => {
    if (props.data.loading) {
      return <Loading style={{ height: "480px" }}>Loading graph...</Loading>;
    }

    if (props.data.countryCode) {
      const options = {
        ...GRAPH_OPTIONS.options,
        xaxis: {
          categories: props.data.data.dates,
        },
      };
      const series = [
        {
          name: "COVID cases",
          data: props.data.data.cases,
        },
      ];

      return (
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height="480px"
        />
      );
    } else {
      return (
        <div
          style={{ height: "480px" }}
          className="flex justify-center items-center"
        >
          <p className="text-sm">Please select a country to see its data</p>
        </div>
      );
    }
  };

  return <div>{render()}</div>;
}

LineGraph.defaultProps = {
  loading: false,
};

export default LineGraph;
