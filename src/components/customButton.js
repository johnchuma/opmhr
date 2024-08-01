import Spinner from "./spinner";

const CustomButton = ({ loading = false, title }) => {
  return (
    <div>
      <button className="py-3 w-40 flex justify-center rounded-full hover:scale-105 transition-all bg-primary  text-white">
        {loading ? <Spinner /> : title ?? ""}
      </button>
    </div>
  );
};

export default CustomButton;
