// import VirusRedIcon from "../../../assets/icons/virus-red.svg";

import "./style.css";

function StatsItem(props) {
  return (
    <div className="my-2 sm:my-0 items-center flex flex-col sm:flex-row stats-item-container flex-1 justify-center align-center">
      <img className="w-8 sm:mr-3" alt="stats-item" src={props.icon} />
      <div className="mt-2 sm:mt-0 stats-item-text-container flex flex-col justify-center align-center">
        <p className="stats-item-text-label text-center sm:text-left">{props.label}</p>
        <p className="stats-item-text-value text-center sm:text-left">{props.value}</p>
      </div>
    </div>
  );
}

StatsItem.defaultProps = {
  label: "",
  value: "",
};

export default StatsItem;
