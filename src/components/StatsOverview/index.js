import StatsItem from "./StatsItem";
import VirusRedIcon from "../../assets/icons/virus-red.svg";
import VirusGreenIcon from "../../assets/icons/virus-green.svg";
import VirusGreyIcon from "../../assets/icons/virus-grey.svg";
import GlobeGreyIcon from "../../assets/icons/globe-grey.svg";
import "./style.css";

function StatsOverview() {
  return (
    <div className="stats-overview-container">
      <StatsItem icon={GlobeGreyIcon} label="Stats Overview" value="Global" />
      <StatsItem
        icon={VirusRedIcon}
        label="Total coronavirus cases"
        value="10000"
      />
      <StatsItem icon={VirusGreenIcon} label="Total recovered" value="1000" />
      <StatsItem icon={VirusGreyIcon} label="Total Death" value="1000" />
    </div>
  );
}

export default StatsOverview;
