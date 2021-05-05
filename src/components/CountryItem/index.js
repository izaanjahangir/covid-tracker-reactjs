import pakistanFlag from "../../assets/icons/pakistan.svg";
import "./style.css";

function CountryItem(props) {
  return (
    <div
      className={
        "my-3 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg w-full py-2 px-2 flex items-center " +
        props.className
      }
    >
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
};

export default CountryItem;
