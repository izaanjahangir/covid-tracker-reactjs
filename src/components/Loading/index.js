function Loading(props) {
  const loadingText = props.children || "Loading...";

  const getContainerStyles = () => {
    return { ...props.style };
  };

  const getTextStyles = () => {
    return { ...props.textStyle };
  };

  const getContainerClasses = () => {
    const baseClasses = "w-full flex justify-center items-center";

    if (props.className) {
      return baseClasses + " " + props.className;
    }

    return baseClasses;
  };

  const getTextClasses = () => {
    const baseClasses = "animate-bounce text-2xl";

    if (props.labelClassName) {
      return baseClasses + " " + props.labelClassName;
    }

    return baseClasses;
  };

  return (
    <div className={getContainerClasses()} style={getContainerStyles()}>
      <p className={getTextClasses()} style={getTextStyles()}>
        {loadingText}
      </p>
    </div>
  );
}

Loading.defaultProps = {
  style: {},
  textStyle: {},
};

export default Loading;
