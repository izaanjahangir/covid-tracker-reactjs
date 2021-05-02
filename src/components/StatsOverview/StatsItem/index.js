// import VirusRedIcon from "../../../assets/icons/virus-red.svg";

import "./style.css";

function StatsItem(props) {
  return (
    <div className="flex stats-item-container flex-1 justify-center align-center">
      <img className="w-8 mr-3" alt="stats-item" src={props.icon} />
      <div className="stats-item-text-container flex flex-col justify-center align-center">
        <p className="stats-item-text-label">{props.label}</p>
        <p className="stats-item-text-value">{props.value}</p>
      </div>
    </div>
  );
}

StatsItem.defaultProps = {
  label: "",
  value: "",
};

export default StatsItem;
