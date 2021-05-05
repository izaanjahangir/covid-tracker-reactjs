import numeral from "numeral";

import StatsItem from "./StatsItem";
import VirusRedIcon from "../../assets/icons/virus-red.svg";
import VirusGreenIcon from "../../assets/icons/virus-green.svg";
import VirusGreyIcon from "../../assets/icons/virus-grey.svg";
import GlobeGreyIcon from "../../assets/icons/globe-grey.svg";
import "./style.css";

function StatsOverview(props) {
  return (
    <div className="stats-overview-container">
      <StatsItem icon={GlobeGreyIcon} label="Stats Overview" value="Global" />
      <StatsItem
        icon={VirusRedIcon}
        label="Total coronavirus cases"
        value={numeral(props.data.confirmed).format("0.00 a")}
      />
      <StatsItem
        icon={VirusGreenIcon}
        label="Total recovered"
        value={numeral(props.data.recovered).format("0.00 a")}
      />
      <StatsItem
        icon={VirusGreyIcon}
        label="Total Death"
        value={numeral(props.data.deaths).format("0.00 a")}
      />
    </div>
  );
}

StatsOverview.defaultProps = {
  data: {},
};

export default StatsOverview;
