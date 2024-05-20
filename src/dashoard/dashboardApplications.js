import { useContext, useEffect, useState } from "react";

import { formatDate } from "../utils/format_date";
import ExperienceItem from "../components/experience";
import RefreeItem from "../components/refreeItem";
import {
  getApplicantApplications,
  getApplications,
  getCompanyApplications
} from "../controllers/applicationsController";
import { timeAgo } from "../utils/time_ago";
import UserProfile from "../components/userProfile";
import Application from "../components/application";
import { UserContext } from "../auth/privateRoute";
import NoData from "../components/noData";

const DashboardApplications = () => {
  const [applications, setApplications] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [keyword, setkeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setselectedItem] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    switch (user.role) {
      case "User":
        getApplicantApplications().then((data) => {
          setApplications(data);
          setLoading(false);
        });
        break;
      case "Company":
        getCompanyApplications().then((data) => {
          setApplications(data);
          setLoading(false);
        });
        break;
      case "Admin":
        getApplications().then((data) => {
          setApplications(data);
          setLoading(false);
        });
        break;
      default:
        break;
    }
  }, [refresh]);
  return loading ? (
    <div className="flex   ms-auto w-full  justify-center items-center h-96">
      <div className="border-4 rounded-full border-textColor h-8 w-8 animate-spin border-t-transparent "></div>
    </div>
  ) : (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg">
          {user.role == "User" ? "My Applications" : "Applications"}{" "}
        </h1>
        <input
          onChange={(e) => {
            setkeyword(e.target.value);
          }}
          placeholder="Search here"
          className="border-borderColor rounded-md focus:ring-primary focus:border-primary"
        />
      </div>
      <div className="bg-white p-5 border border-borderColor py-5 rounded-md mt-5">
        {applications.length < 1 ? (
          <NoData />
        ) : (
          <table className=" w-full">
            <thead className="px-5">
              <tr className="border-b border-borderColor border-opacity-70">
                <th className="text-start text-sm font-normal text-muted pb-2">
                  Sent
                </th>
                <th className="text-start text-sm font-normal text-muted pb-2">
                  Applicant
                </th>
                <th className="text-start text-sm font-normal text-muted pb-2">
                  Job Position
                </th>
                <th className="text-start text-sm font-normal text-muted pb-2">
                  Phone number
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="mt-3">
              {applications
                .filter((item) =>
                  item.name.toLowerCase().includes(keyword.toLowerCase())
                )
                .map((item) => (
                  <tr
                    className={`${
                      item.isRead ? "opacity-50" : ""
                    } cursor-pointer hover:opacity-100`}
                  >
                    <td className="py-2 text-sm">
                      {formatDate(item.createdAt.toDate())}
                    </td>
                    <td className="py-2 text-sm">{item.name}</td>
                    <td className="py-2 text-sm">{item.jobTitle}</td>
                    <td className="py-2 text-sm">{item.phone}</td>
                    {/* <td className="py-2">{item.service}</td> */}

                    <td>
                      <button
                        onClick={() => {
                          setselectedItem(item);
                          setShowModal(true);
                        }}
                        className="py-1 px-3 bg-orange-100 text-sm rounded-full"
                      >
                        View application
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        {showModal == true && (
          <Application setShowModal={setShowModal} item={selectedItem} />
        )}
      </div>
    </div>
  );
};

export default DashboardApplications;
