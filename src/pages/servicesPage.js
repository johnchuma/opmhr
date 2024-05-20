import { useNavigate, useParams } from "react-router-dom";

const ServicesPage = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-12" />
      <h1 className="text-2xl text-center mb-2">Our services</h1>
      <p className="text-muted text-center">
        We strive to provide top-notch HR service in practise with High
        Technology.
      </p>
      <div className="grid grid-cols-12 w-11/12 mx-auto gap-8 mt-12 bg-white p-3  ">
        <div className="col-span-4">
          <div className="bg-white p-3 border border-borderColor py-5 rounded-md">
            <div className=" space-y-2 ">
              {[
                "Performance management services",
                "HR advisory and consultancy",
                "International and Local HR Data Analytics & Reporting",
                "AI & Machine learning in global HR",
                "Global Staff outsourcing solutions",
                "Change management & trainings services",
                "Global HR Process Automation",
                "Global HR Transformation Strategy",
                "HR Data analytics & reporting"
              ].map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      navigate(`/services/${index}`);
                    }}
                    className={`border-2 transition-all px-3 rounded-md duration-300 cursor-pointer py-2 hover:scale-105 border-gray-200   ${
                      uuid == index
                        ? "  flex justify-between bg-primary text-white group hover:px-2"
                        : " text-muted bg-white"
                    }`}
                  >
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-8 space-y-4  ">
          {uuid == 0 && (
            <div className=" space-y-4">
              <p>
                Our Performance Management services are designed to elevate your
                organization's human capital to new heights. With a meticulous
                approach tailored to meet your unique needs, our services
                encompass a wide range of offerings including:
              </p>
              <ul className="list list-outside list-decimal ms-3">
                {[
                  "Performance Appraisal Systems: We develop customized performance appraisal systems that align with your organization's goals and values, providing a clear framework for assessing and rewarding employee performance.",
                  "Goal Setting and Alignment: Our goal-setting services help streamline objectives across all levels of your organization, ensuring that individual goals are in sync with the broader organizational goals.",
                  "Feedback and Coaching: Our expert team offers personalized feedback and coaching to employees, fostering a culture of continuous improvement and growth within your organization.",
                  "Training and Development: We provide tailored training programs aimed at enhancing employee skills and competencies, driving performance and productivity.",
                  "Performance Improvement Plans: In cases where performance falls below expectations, we assist in developing performance improvement plans that support employees in reaching their full potential.",
                  "Data-Driven Insights: Leveraging advanced analytics, we provide data-driven insights to help identify trends, monitor performance metrics, and make informed decisions to optimize performance management processes."
                ].map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <p>
                With OPM International HR Consultants, you can expect a
                comprehensive and effective Performance Management service th
                aligns your workforce with your strategic objectives, drives
                employee engagement, and ultimately contributes to your
                organization's success.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
