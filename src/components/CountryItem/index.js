import pakistanFlag from "../../assets/icons/pakistan.svg";
import "./style.css";

function CountryItem(props) {
  const getContainerClasses = () => {
    let BASE_CLASSES =
      "my-3 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg w-full py-2 px-2 flex items-center";

    if (props.className) {
      BASE_CLASSES += " " + props.className;
    }

    if (props.active) {
      BASE_CLASSES += " border-green-500 border-2";
    }

    return BASE_CLASSES;
  };

  return (
    <div className={getContainerClasses()}>
      <img
        className="shadow-lg country-item-icon"
        alt="flag"
        src={pakistanFlag}
      />
      <p className="ml-3 text-sm">Pakistan</p>
    </div>
  );
}

CountryItem.defaultProps = {
  className: "",
  active: false,
};

export default CountryItem;
