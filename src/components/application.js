import ExperienceItem from "./experience";
import RefreeItem from "./refreeItem";

const Application = ({ item, setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-center items-center">
      <div className="w-8/12 bg-white   shadow-xl h-3/4 overflow-y-scroll px-8 py-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Application</h1>
          <svg
            onClick={() => {
              setShowModal(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex justify-center">
          <img
            className="aspect-squire rounded-full  my-5 h-24 w-24 object-cover"
            src={item.image}
          />
        </div>
        <h1 className="text-xl font-bold text-green-600 my-6">Cover letter</h1>
        <p dangerouslySetInnerHTML={{ __html: item.coverLetter }}></p>

        <h1 className="text-xl font-bold text-green-600 mb-6">
          Personal Informations
        </h1>
        <div className="space-y-3">
          {[
            { key: "Name", value: item.name },
            { key: "Email", value: item.email },
            { key: "Phone", value: item.phone },
            { key: "Address", value: item.address },
            { key: "Gender", value: item.gender },
            { key: "Age", value: item.age }
          ].map((item, index) => {
            return (
              <div
                className={`grid grid-cols-12  bg-opacity-50 ${
                  index % 2 == 0 ? "bg-green-50" : "bg-transparent"
                }`}
              >
                <h1 className="col-span-3 text-sm border-r-2">{item.key}</h1>
                <h1 className="col-span-9  px-4">{item.value}</h1>
              </div>
            );
          })}
        </div>

        <h1 className="text-xl font-bold text-green-600 my-6">
          Professional Informations
        </h1>
        <div className="space-y-3">
          {[
            { key: "Bio", value: item.bio },
            { key: "Education level", value: item.education },
            { key: "Salary expectations", value: item.salary + "TSH" }
          ].map((item, index) => {
            return (
              <div
                className={`grid grid-cols-12  bg-opacity-50 ${
                  index % 2 == 0 ? "bg-green-50" : "bg-transparent"
                }`}
              >
                <h1 className="col-span-3 text-sm border-r-2">{item.key}</h1>
                <h1 className="col-span-9  px-4">{item.value}</h1>
              </div>
            );
          })}
        </div>
        <h1 className="text-xl font-bold text-green-600 my-6">Skills</h1>
        <div className="flex flex-wrap">
          {item.skills.map((item) => {
            return (
              <div className="py-3 px-4 rounded-full bg-orange-50 font-bold me-2 mb-2 text-sm">
                {item}
              </div>
            );
          })}
        </div>

        <h1 className="text-xl font-bold text-green-600 my-6">Experience</h1>
        <div className="space-y-2">
          {item.experiences.map((item) => {
            return <ExperienceItem item={item} />;
          })}
        </div>
        <h1 className="text-xl font-bold text-green-600 my-6">Referees</h1>
        <div className="space-y-2">
          {item.refrees.map((item) => {
            return <RefreeItem item={item} />;
          })}
        </div>

        <h1 className="text-xl font-bold text-green-600 my-6">CV/Resume</h1>
        <a
          href={item.cv}
          target="__blank"
          className="flex flex-col text-center justify-center border-2 border-dotted px-5 border-borderColor rounded-md focus:ring-primary focus:border-primary items-center py-10"
        >
          <img className="w-24" src="/pdf.png" />
          <div className="font-bold mt-3">{item.fileName}</div>
        </a>
      </div>
    </div>
  );
};

export default Application;
