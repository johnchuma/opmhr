import { useNavigate, useParams } from "react-router-dom";
import { products, services } from "../utils/arrays";
import { useEffect, useState } from "react";

const ServicesPage = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    var no = products.map((item)=>item.title).indexOf(uuid);
    setIndex(no);
  }, [uuid]);
  return (
    <div>
      <div className="py-12" />
      <div className="grid grid-cols-12 w-11/12 mx-auto gap-8 mt-6 bg-white p-3  ">
        <div className="col-span-12 space-y-4  ">
          <h1 className="font-medium text-2xl">{uuid}</h1>
          <div className="text-textColor">
            {index == 0 && (
              <div className=" space-y-4">
                <p>
                  Performance Management Software is designed to help
                  organizations streamline and optimize their performance
                  appraisal processes, align employee goals with organizational
                  objectives, track progress, provide feedback, and facilitate
                  continuous improvement. Here's how performance management
                  software typically accomplishes these objectives through its
                  features:
                </p>

                <ul className="list list-outside list-decimal ms-4">
                  <li>
                    <p>
                      <>Goal Setting and Alignment</>: The software allows
                      managers and employees to set individual goals that align
                      with the organization's overall objectives. These goals
                      can be specific, measurable, achievable, relevant, and
                      time-bound (SMART), and they serve as benchmarks for
                      evaluating performance.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Continuous Feedback and Communication</>: Performance
                      management software facilitates ongoing communication
                      between managers and employees by providing tools for
                      feedback exchange throughout the performance cycle.
                      Managers can offer praise, constructive criticism, and
                      guidance to help employees improve performance in
                      real-time.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Performance Reviews and Appraisals</>: The software
                      automates the performance review process, allowing
                      managers to conduct formal evaluations based on predefined
                      criteria and competencies. It provides a structured
                      framework for assessing employee performance, identifying
                      strengths and areas for development, and documenting
                      feedback.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>360-Degree Feedback</>: Some performance management
                      software offers 360-degree feedback functionality,
                      enabling employees to receive feedback from multiple
                      sources, including managers, peers, subordinates, and
                      external stakeholders. This comprehensive feedback helps
                      individuals gain a holistic view of their performance and
                      identify areas for growth.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Skill and Competency Management</>: Performance
                      management software often includes features for tracking
                      employee skills, competencies, and development needs. It
                      allows managers to identify skill gaps, recommend training
                      programs, and create personalized development plans to
                      enhance employee performance and career progression.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Performance Analytics and Reporting</>: The software
                      provides robust analytics and reporting capabilities,
                      allowing managers and HR professionals to analyze
                      performance data, identify trends, and gain insights into
                      workforce performance. It enables data-driven
                      decision-making and helps organizations identify
                      high-performing employees, top performers, and areas for
                      improvement.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Recognition and Rewards</>: Some performance management
                      software includes features for employee recognition and
                      rewards, allowing managers to acknowledge and reward
                      employees for outstanding performance, achievements, and
                      contributions. This promotes a culture of appreciation and
                      motivates employees to excel.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Integration with Other HR Systems</>: Performance
                      management software often integrates seamlessly with other
                      HR systems, such as HRIS (Human Resources Information
                      System), payroll, and learning management systems. This
                      integration ensures data consistency, eliminates manual
                      data entry, and enhances overall efficiency.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Mobile Accessibility</>: Many performance management
                      software solutions offer mobile apps or responsive web
                      interfaces, enabling employees and managers to access
                      performance-related information, provide feedback, and
                      complete evaluations anytime, anywhere, using their mobile
                      devices.
                    </p>
                  </li>
                </ul>

                <p>
                  By leveraging these features, performance management software
                  helps organizations foster a culture of accountability,
                  transparency, and continuous improvement, ultimately driving
                  employee engagement, productivity, and organizational success.
                </p>
              </div>
            )}
            {index == 1 && (
              <div className="space-y-3">
                <p>
                  HRIS (Human Resources Information System) software is a
                  comprehensive solution designed to streamline HR processes,
                  centralize HR data, automate administrative tasks, and improve
                  overall efficiency within an organization. Here's how HRIS
                  software, with its key features, can positively influence
                  clients:
                </p>
                <ul className="list list-outside list-decimal ms-4">
                  <li>
                    <p>
                      <>Centralized Employee Database</>: HRIS software provides
                      a centralized database to store all employee information,
                      including personal details, employment history,
                      performance evaluations, training records, and more. This
                      centralized repository ensures data integrity, eliminates
                      duplicate records, and provides easy access to accurate
                      employee information.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Employee Self-Service Portal</>: HRIS software typically
                      includes an employee self-service portal where employees
                      can view and update their personal information, submit
                      time-off requests, access company policies and documents,
                      and participate in training programs. This empowers
                      employees to take control of their HR-related tasks,
                      reduces administrative burden on HR staff, and enhances
                      employee satisfaction.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Recruitment and Applicant Tracking</>: HRIS software
                      often includes recruitment and applicant tracking features
                      that streamline the hiring process from job posting to
                      candidate onboarding. Clients can efficiently manage job
                      postings, track applicants, schedule interviews, conduct
                      assessments, and make data-driven hiring decisions using
                      intuitive dashboards and analytics.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Performance Management</>: Many HRIS software solutions
                      offer performance management features to help clients
                      effectively manage employee performance, set goals,
                      conduct performance reviews, and provide feedback. Clients
                      can track employee performance over time, identify top
                      performers, and develop personalized development plans to
                      support career growth and organizational objectives.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Benefits Administration</>: HRIS software simplifies
                      benefits administration by providing tools to manage
                      employee benefits, enrollments, eligibility, and
                      compliance. Clients can configure benefit plans,
                      communicate benefits information to employees, track
                      benefit costs, and generate reports to ensure regulatory
                      compliance and optimize benefits offerings.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Payroll Processing</>: HRIS software often includes
                      payroll processing functionality to automate payroll
                      calculations, tax deductions, and direct deposits. Clients
                      can streamline payroll administration, ensure accuracy and
                      compliance, and generate payroll reports with ease.
                      Integration with time and attendance systems further
                      enhances payroll accuracy and efficiency.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Training and Development</>: HRIS software helps clients
                      manage employee training and development initiatives by
                      tracking training requirements, scheduling training
                      sessions, and monitoring employee progress. Clients can
                      identify skill gaps, deliver targeted training programs,
                      and measure the effectiveness of training investments to
                      drive employee development and performance improvement.
                    </p>
                  </li>
                  <li>
                    <p>
                      <>Analytics and Reporting</>: HRIS software provides
                      robust analytics and reporting capabilities, allowing
                      clients to generate custom reports, visualize HR data
                      trends, and gain actionable insights into workforce
                      metrics. Clients can track key HR metrics, identify areas
                      for improvement, and make data-driven decisions to
                      optimize HR strategies and initiatives.
                    </p>
                  </li>
                </ul>
                <p>
                  By leveraging these features, HRIS software empowers clients
                  to streamline HR processes, improve decision-making, enhance
                  employee engagement, and drive organizational success. It
                  serves as a strategic tool for optimizing HR operations,
                  mitigating compliance risks, and supporting the overall growth
                  and competitiveness of clients' businesses.
                </p>
              </div>
            )}
            {index == 2 && (
              <div>
                <p>
                  Payroll software plays a crucial role in managing one of the
                  most critical aspects of any business—employee compensation.
                  Here's how the key features of payroll software can positively
                  influence clients:
                </p>

                <ul className="list list-outside list-decimal ms-4">
                  <li>
                    <strong>Automated Payroll Processing:</strong> Payroll
                    software automates the entire payroll process, from
                    calculating wages and deductions to generating paychecks or
                    facilitating direct deposits. By automating repetitive
                    tasks, clients can save time, minimize errors, and ensure
                    accurate and timely payroll processing.
                  </li>

                  <li>
                    <strong>Tax Compliance and Reporting:</strong> Payroll
                    software helps clients stay compliant with tax regulations
                    by automatically calculating payroll taxes, including
                    federal, state, and local taxes, and deducting them from
                    employees' paychecks. The software also generates tax forms,
                    such as W-2s and 1099s, and facilitates electronic filing,
                    reducing the risk of errors and penalties.
                  </li>

                  <li>
                    <strong>Employee Self-Service:</strong> Many payroll
                    software solutions offer employee self-service portals where
                    employees can access their pay stubs, view their tax
                    information, update their personal details, and manage their
                    direct deposit preferences. This empowers employees to take
                    control of their payroll-related tasks, reducing
                    administrative burden on HR and payroll staff.
                  </li>

                  <li>
                    <strong>Time and Attendance Integration:</strong> Payroll
                    software often integrates with time and attendance systems
                    to automatically import employee hours worked and calculate
                    accurate pay based on time records. This integration ensures
                    that payroll calculations are based on actual hours worked,
                    reducing payroll errors and discrepancies.
                  </li>

                  <li>
                    <strong>Benefit Deductions and Administration:</strong>{" "}
                    Payroll software allows clients to manage employee benefits
                    deductions, such as health insurance premiums, retirement
                    contributions, and flexible spending accounts. The software
                    calculates benefit deductions accurately and ensures that
                    employees receive the correct compensation after deductions.
                  </li>

                  <li>
                    <strong>Customizable Payroll Reports:</strong> Payroll
                    software provides clients with customizable payroll reports
                    that offer insights into payroll expenses, tax liabilities,
                    employee earnings, and deductions. Clients can generate
                    reports tailored to their specific needs, track key payroll
                    metrics, and analyze trends to inform decision-making.
                  </li>

                  <li>
                    <strong>Multi-State and Multi-Currency Support:</strong> For
                    clients operating in multiple states or countries, payroll
                    software offers support for multi-state and multi-currency
                    payroll processing. This capability ensures compliance with
                    varying tax laws and regulations across different
                    jurisdictions, simplifying payroll administration for
                    clients with diverse workforce locations.
                  </li>

                  <li>
                    <strong>Security and Data Protection:</strong> Payroll
                    software prioritizes data security and protection by
                    implementing robust security measures, such as encryption,
                    access controls, and regular data backups. Clients can trust
                    that sensitive payroll information, including employee
                    salaries and tax data, is safeguarded against unauthorized
                    access or breaches.
                  </li>

                  <li>
                    <strong>Scalability and Flexibility:</strong> Payroll
                    software is scalable and flexible, capable of accommodating
                    the evolving needs of growing businesses. Whether clients
                    are adding new employees, expanding into new markets, or
                    implementing changes to payroll policies, the software can
                    adapt to accommodate these changes without disruption.
                  </li>
                </ul>

                <p>
                  By leveraging these features, payroll software empowers
                  clients to streamline payroll processes, ensure compliance,
                  improve accuracy, and enhance employee satisfaction. It serves
                  as a strategic tool for managing payroll efficiently, reducing
                  administrative burden, and supporting the overall success and
                  growth of clients' businesses.
                </p>
              </div>
            )}
          </div>
          <button className="bg-primary text-white py-3 px-4 mt-4 rounded-xl">
            Order Software
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
