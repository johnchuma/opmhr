import { useNavigate, useParams } from "react-router-dom";
import { services } from "../utils/arrays";
import { useEffect, useState } from "react";

const ServicesPage = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    var no = 0;
    setIndex(no);
  }, [uuid]);
  return (
    <div>
      <div className="py-12" />

      <div className="grid grid-cols-12 w-11/12 mx-auto gap-8 mt-6 bg-white p-3  ">
        <div className="col-span-12 space-y-4  ">
          <h1 className="font-medium text-2xl">{uuid}</h1>
          {index == 0 && (
            <div className=" space-y-4">
              <p>
                Our Performance Management services are designed to elevate your
                organization's human capital to new heights. With a meticulous
                approach tailored to meet your unique needs, our services
                encompass a wide range of offerings including:
              </p>
              <ul className="list list-outside list-decimal ms-4">
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
          {index == 1 && (
            <div className="space-y-3">
              <p>
                We're pioneering the integration of AI and machine learning
                technologies into global HR operations, revolutionizing the way
                businesses manage their human capital.
              </p>

              <p>
                Our AI & Machine Learning in Global HR service offers a
                comprehensive suite of products and solutions designed to
                enhance decision-making, streamline processes, and drive
                organizational success. Leveraging the power of advanced
                algorithms and predictive analytics, we empower businesses to
                unlock valuable insights from their HR data and optimize every
                aspect of their talent management strategy.
              </p>

              <h2>How Our Service Can Benefit Your Business:</h2>

              <ul className="list list-outside list-decimal ms-4">
                <li>
                  Data-driven insights: Harness the power of AI and machine
                  learning to analyze vast amounts of HR data, uncovering hidden
                  patterns and trends that enable more informed decision-making.
                </li>
                <li>
                  Predictive analytics: Anticipate future workforce needs,
                  identify high-potential employees, and predict attrition risks
                  with advanced predictive analytics models, allowing you to
                  proactively address talent challenges.
                </li>
                <li>
                  Personalized employee experiences: Leverage AI-driven
                  personalization to deliver tailored learning and development
                  opportunities, career paths, and benefits packages that
                  resonate with each individual employee, driving engagement and
                  retention.
                </li>
                <li>
                  Automation of routine tasks: Automate repetitive HR tasks such
                  as resume screening, scheduling interviews, and candidate
                  sourcing, freeing up valuable time for your HR team to focus
                  on strategic initiatives.
                </li>
                <li>
                  Continuous improvement: Utilize AI-powered feedback mechanisms
                  to gather employee feedback in real-time, identify areas for
                  improvement, and drive continuous enhancements to your HR
                  processes and policies.
                </li>
              </ul>

              <p>
                As AI and machine learning technologies continue to evolve, so
                too will the capabilities of our service. By partnering with OPM
                International HR Consultants, you'll not only gain access to
                cutting-edge AI solutions but also benefit from our commitment
                to innovation and excellence.
              </p>

              <p>
                Experience the transformative power of AI & Machine Learning in
                Global HR with OPM International HR Consultants - let us help
                you unlock the full potential of your workforce and drive
                sustainable business growth.
              </p>
            </div>
          )}
          {index == 2 && (
            <div className="space-y-3">
              <p>
                We understand the unique challenges and opportunities of
                building a workforce that spans across borders. Our Global
                Staffing Outsourcing service is designed to empower your
                business by seamlessly integrating top talent from around the
                world. We offer comprehensive solutions tailored to meet the
                dynamic needs of your organization, ensuring you stay
                competitive and efficient in an evolving global market.
              </p>

              <h2>Our Strength:</h2>

              <ul className="list list-outside list-decimal ms-4">
                <li>
                  Expertise in Diverse Markets: With extensive knowledge of
                  various international labor markets, we are adept at
                  navigating the complexities of recruiting and managing global
                  talent pools.
                </li>
                <li>
                  Tailored Recruitment Strategies: We customize our recruitment
                  strategies based on your specific business goals, industry
                  specifics, and the unique aspects of each geographic location.
                </li>
                <li>
                  Seamless Integration: Our end-to-end staffing services ensure
                  a smooth integration of new global employees into your
                  existing teams, fostering synergy and enhancing productivity.
                </li>
                <li>
                  Compliance and Risk Management: We handle all aspects of
                  compliance and labor laws in each country, minimizing risks
                  and protecting your business against potential legal and
                  financial liabilities.
                </li>
                <li>
                  Dedicated Support: Our team provides continuous support and
                  consultancy, from the initial recruitment process to ongoing
                  HR management, ensuring your global team remains robust and
                  effective.
                </li>
              </ul>
              <h2>Our Services Include:</h2>

              <ul className="list list-outside list-decimal ms-4">
                <li>
                  Both Local and International Recruitment: Sourcing, vetting,
                  and hiring the best talent from across the globe.
                </li>
                <li>
                  Employee Onboarding: Structuring onboarding programs that
                  align with your corporate culture and compliance requirements.
                </li>
                <li>
                  HR Management: Offering full-range HR services including
                  payroll, benefits administration, and performance management.
                </li>
                <li>
                  Mobility Solutions: Assisting with employee relocations,
                  including visa application and housing.
                </li>
                <li>
                  Strategic Staffing Consultation: Working closely with you to
                  forecast and meet your future staffing needs.
                </li>
              </ul>

              <p>
                At OPM International HR consultants, we are committed to
                providing you with exceptional service that aligns with your
                strategic goals. Connect with us to discover how our Global
                Staffing Outsourcing solutions can enhance your operational
                capabilities and help you harness the power of a diverse global
                workforce.
              </p>
            </div>
          )}

          {index == 3 && (
            <div className="space-y-3">
              <p>
                We, the OPM Team, are proud to offer comprehensive HR Advisory &
                Consultancy services, tailored to meet the unique needs of your
                organization. Our team of experienced professionals provides
                strategic guidance and practical solutions to help you navigate
                the ever-changing landscape of human resources.
              </p>

              <h2>Our HR Advisory & Consultancy Services Include:</h2>

              <ul className="list list-outside list-decimal ms-4">
                <li>
                  Strategic HR Planning: We work with you to develop a
                  comprehensive HR strategy that aligns with your business
                  objectives. This includes identifying your talent needs,
                  developing talent management programs, and creating a culture
                  of engagement and performance.
                </li>
                <li>
                  Training & Development: We offer a wide range of training and
                  development programs to help your employees reach their full
                  potential.
                </li>
                <li>
                  Talent Acquisition & Management: We help you attract, hire,
                  and retain top talent. Our services include job descriptions,
                  candidate sourcing, interview coaching, and onboarding
                  programs.
                </li>
                <li>
                  HR Technology: We can help you select and implement the right
                  HR technology solutions to streamline your HR processes and
                  improve efficiency.
                </li>
                <li>
                  Compensation & Benefits: We ensure your compensation and
                  benefits programs are competitive and compliant with all
                  applicable laws and regulations.
                </li>
                <li>
                  Employee Relations: We provide guidance on employee relations
                  issues, including performance management, disciplinary action,
                  and conflict resolution.
                </li>
                <li>
                  HR Compliance: We help you ensure your HR practices are
                  compliant with all applicable laws and regulations.
                </li>
                <li>
                  HR Audits: We conduct comprehensive HR audits to identify
                  areas of risk and compliance.
                </li>
                <li>
                  Project Management: We can manage your HR projects from start
                  to finish, ensuring they are completed on time and within
                  budget.
                </li>
              </ul>
              <p>
                Our team of HR experts has a deep understanding of the latest HR
                trends and best practices globally. We are committed to
                providing you with the highest quality of service and advice.
              </p>

              <h2>
                Benefits of Using OPM International HR Consultants for HR
                Advisory & Consultancy:
              </h2>

              <ul className="list list-outside list-decimal ms-4">
                <li>
                  Expertise: We have a proven track record of success in helping
                  organizations achieve their HR goals.
                </li>
                <li>
                  Customization: We tailor our services to meet your specific
                  needs and budget.
                </li>
                <li>
                  Objectivity: We provide unbiased advice and recommendations.
                </li>
                <li>
                  Confidentiality: We maintain the confidentiality of all client
                  information.
                </li>
                <li>
                  Cost-effectiveness: We offer competitive rates and flexible
                  engagement options.
                </li>
              </ul>
            </div>
          )}

          {index == 4 && (
            <div className="space-y-3">
              <p>
                We recognize that successful implementation of HR initiatives
                hinges on effective change management and comprehensive training
                programs. That's why we're proud to offer our Global Change
                Management & Training service, designed to equip your
                organization with the tools and knowledge needed to navigate
                change with confidence and drive lasting success.
              </p>

              <h2>Here's How Our Service Can Benefit Your Organization:</h2>

              <ul className="list list-outside list-decimal ms-4">
                <li>
                  Change readiness assessment: Evaluate your organization's
                  readiness for change, identifying potential barriers and
                  opportunities for success, and develop tailored strategies to
                  drive adoption and buy-in.
                </li>
                <li>
                  Communication strategies: Develop clear and consistent
                  communication strategies to keep employees informed and
                  engaged throughout the change process, minimizing uncertainty
                  and resistance.
                </li>
                <li>
                  Stakeholder engagement: Engage key stakeholders at all levels
                  of your organization, fostering alignment, building support,
                  and ensuring that everyone is on board with the change
                  initiative.
                </li>
                <li>
                  Customized training programs: Develop customized training
                  programs that address the specific needs of your workforce,
                  providing them with the skills, knowledge, and resources they
                  need to thrive in the new environment.
                </li>
                <li>
                  Ongoing support: Provide ongoing support and guidance to your
                  team, ensuring that they have the resources and assistance
                  they need to successfully navigate the challenges of change
                  and drive sustainable results.
                </li>
              </ul>

              <p>
                Our service encompasses a range of products and solutions
                tailored to meet the unique needs of global businesses
                undergoing transformational change. From change readiness
                assessments and stakeholder engagement strategies to customized
                training programs and ongoing support, we provide a holistic
                approach to change management that empowers your team at every
                stage of the journey.
              </p>
            </div>
          )}

          {index == 5 && (
            <div className="space-y-3">
              <p>
                We understand that staying competitive in today's fast-paced
                business landscape requires more than just keeping up with the
                latest HR trends - it requires a comprehensive transformation
                strategy that aligns your people, processes, and technology with
                your overarching business goals.
              </p>

              <h2>Our Global HR Transformation Strategy Service Offers:</h2>

              <ul className="list list-outside list-decimal ms-4">
                <li>
                  Strategic alignment: Align your HR strategy with your
                  organization's overall business objectives, ensuring that your
                  HR initiatives support and contribute to your long-term
                  success.
                </li>
                <li>
                  Process optimization: Streamline and optimize your HR
                  processes to improve efficiency, reduce costs, and enhance the
                  overall employee experience.
                </li>
                <li>
                  Technology integration: Leverage cutting-edge HR technology
                  solutions to automate manual tasks, enable data-driven
                  decision-making, and provide greater visibility into your
                  workforce metrics.
                </li>
                <li>
                  Change management: Implement effective change management
                  strategies to minimize resistance and maximize adoption,
                  ensuring a smooth transition to your new HR operating model.
                </li>
                <li>
                  Continuous improvement: Foster a culture of continuous
                  improvement within your organization, empowering your HR team
                  to adapt to evolving business needs and drive ongoing
                  enhancements to your HR strategy and processes.
                </li>
              </ul>

              <p>
                As technology and business environments continue to evolve, so
                too will the capabilities of our Global HR Transformation
                Strategy service. By partnering with OPM International HR
                Consultants, you'll not only gain access to industry-leading
                expertise and best practices but also benefit from our
                commitment to innovation and excellence.
              </p>
            </div>
          )}
          {index == 6 && (
            <div className="space-y-3">
              <p>
                In the digital age, data is king, and at OPM International HR
                Consultants, we're dedicated to helping businesses harness the
                full potential of their HR data. Our International and Local HR
                Data Analytics & Reporting service is designed to provide
                actionable insights that drive strategic decision-making and
                fuel organizational success.
              </p>

              <h2>Our Suite of Products Empowers You To:</h2>

              <ul className="list list-outside list-decimal ms-4">
                <li>
                  Gain actionable insights: Transform raw HR data into
                  actionable insights that drive informed decision-making at
                  every level of your organization.
                </li>
                <li>
                  Ensure compliance: Stay ahead of regulatory requirements and
                  mitigate risks by leveraging comprehensive reporting tools
                  that provide visibility into compliance metrics.
                </li>
                <li>
                  Enhance operational efficiency: Identify inefficiencies and
                  bottlenecks in your HR processes, allowing you to streamline
                  operations and improve productivity.
                </li>
                <li>
                  Drive business growth: By making data-driven decisions, you
                  can align your HR strategies with your overall business
                  objectives, driving growth and profitability.
                </li>
                <li>
                  Improve talent management: Identify top performers, track key
                  performance indicators, and develop data-driven strategies for
                  talent acquisition, retention, and development.
                </li>
              </ul>

              <p>
                As technology continues to evolve, so too does the field of HR
                data analytics. By partnering with OPM International HR
                Consultants, you'll not only gain access to cutting-edge
                analytics tools and reporting solutions but also benefit from
                our ongoing commitment to innovation and excellence.
              </p>

              <p>
                Experience the power of HR data analytics with OPM International
                HR Consultants - let us help you unlock the insights that drive
                success for your business.
              </p>
            </div>
          )}
          {index == 7 && (
            <div className="space-y-3">
              <p>
                We understand the challenges that businesses face in managing
                complex HR processes efficiently. That's why we're proud to
                offer our Global HR Process Automation service, designed to
                streamline your HR operations and drive productivity like never
                before.
              </p>

              <p>
                Our comprehensive suite of products encompasses cutting-edge
                automation tools tailored to meet the diverse needs of global
                enterprises. From automating routine tasks like payroll
                processing and employee onboarding to orchestrating complex
                workflows and approvals, our solutions empower you to automate
                your HR processes from end to end.
              </p>

              <p>
                But our service is about more than just automation - it's about
                transforming the way you do business. By automating repetitive
                tasks and manual processes, you can free up valuable time and
                resources, allowing your HR team to focus on more strategic
                initiatives that drive business growth. With our Global HR
                Process Automation service, you can:
              </p>

              <ul className="list list-outside list-decimal ms-4">
                <li>
                  <strong>Boost efficiency:</strong> Automate time-consuming
                  tasks and workflows, reducing manual errors and increasing
                  operational efficiency across your organization.
                </li>
                <li>
                  <strong>Enhance employee experience:</strong> Streamline the
                  employee onboarding process, improve communication channels,
                  and provide self-service options, resulting in a seamless and
                  engaging employee experience.
                </li>
                <li>
                  <strong>Drive cost savings:</strong> By eliminating manual
                  processes and reducing the need for paper-based documentation,
                  you can significantly reduce administrative costs and improve
                  your bottom line.
                </li>
                <li>
                  <strong>Scale your operations:</strong> As your business
                  grows, our scalable automation solutions grow with you,
                  ensuring that your HR processes remain efficient and
                  effective, no matter the size of your organization.
                </li>
                <li>
                  <strong>Ensure compliance:</strong> Stay ahead of changing
                  regulations and compliance requirements by automating
                  compliance checks and documentation processes, reducing the
                  risk of errors and penalties.
                </li>
              </ul>

              <p>
                As technology continues to evolve, the future of HR process
                automation is brighter than ever. By partnering with OPM
                International HR Consultants, you'll not only gain access to
                cutting-edge automation tools but also benefit from our ongoing
                commitment to innovation and excellence.
              </p>
            </div>
          )}
          <button
            onClick={() => {
              navigate("/contactus");
            }}
            className="bg-primary text-white py-3 px-4 rounded-xl"
          >
            Request Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
