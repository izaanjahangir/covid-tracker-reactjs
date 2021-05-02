function Background(props) {
  return (
    <div className="h-full flex flex-col">
      <div className="h-full w-full flex flex-col fixed top-0 left-0">
        <div className="h-16 bg-purple-700"></div>
        <div className="bg-gray-100 flex-1"></div>
      </div>
      <div className="z-10">{props.children}</div>
    </div>
  );
}

export default Background;
