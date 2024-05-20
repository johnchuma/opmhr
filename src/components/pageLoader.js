const PageLoader = ({ height }) => {
  return (
    <div
      className={`flex   ms-auto w-full  justify-center items-center ${
        height ?? "h-96"
      }`}
    >
      <div className="border-4 rounded-full border-textColor h-8 w-8 animate-spin border-t-transparent "></div>
    </div>
  );
};

export default PageLoader;
