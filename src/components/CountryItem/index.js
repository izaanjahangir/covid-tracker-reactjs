import numeral from "numeral";
import "./style.css";

function CountryItem(props) {
  const getContainerClasses = () => {
    let BASE_CLASSES =
      "hover:text-white transition duration-500 ease-in-out transform hover:scale-110 my-3 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg w-full py-2 px-2 flex items-center hover:bg-green-400";

    if (props.className) {
      BASE_CLASSES += " " + props.className;
    }

    if (props.active) {
      BASE_CLASSES += " border-green-500 border-2";
    }

    return BASE_CLASSES;
  };

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.data);
    }
  };

  return (
    <div onClick={handleClick} className={getContainerClasses()}>
      <div className="flex flex-1">
        <img
          className="shadow-lg country-item-icon"
          alt="flag"
          src={props.data.flag}
        />
        <p className="ml-3 text-sm">{props.data.countryName}</p>
      </div>
      <p className="text-sm text-purple-700">
        {numeral(props.data.confirmed).format("0,")}
      </p>
    </div>
  );
}

CountryItem.defaultProps = {
  className: "",
  active: false,
  data: {},
};

export default CountryItem;
