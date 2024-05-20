import { useEffect, useState } from "react";

import { getUsers } from "../controllers/authController";
import { formatDate } from "../utils/format_date";
import ExperienceItem from "../components/experience";
import RefreeItem from "../components/refreeItem";
import UserProfile from "../components/userProfile";
import NoData from "../components/noData";
import { timeAgo } from "../utils/time_ago";

const DashboardUsers = ({ hideHeader }) => {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [keyword, setkeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, [refresh]);
  return loading ? (
    <div className="flex   ms-auto w-full  justify-center items-center h-96">
      <div className="border-4 rounded-full border-textColor h-8 w-8 animate-spin border-t-transparent "></div>
    </div>
  ) : (
    <div className="text-textColor">
      {hideHeader ?? (
        <div className="flex justify-between">
          <h1 className="text-lg">Users/Applicants</h1>
          <input
            onChange={(e) => {
              setkeyword(e.target.value);
            }}
            placeholder="Search here"
            className="border-borderColor rounded-md focus:ring-primary focus:border-primary"
          />
        </div>
      )}
      <div className="bg-white p-5 border border-borderColor py-5 rounded-md mt-5">
        {users.length < 1 ? (
          <NoData />
        ) : (
          <table className=" w-full">
            <thead className="px-5 font-normal">
              <tr className="border-b border-borderColor border-opacity-70">
                <th className="text-start text-sm font-normal text-muted pb-2"></th>
                <th className="text-start text-sm font-normal text-muted pb-2">
                  Full name
                </th>
                <th className="text-start text-sm font-normal text-muted pb-2">
                  Email
                </th>
                <th className="text-start text-sm font-normal text-muted pb-2">
                  Phone
                </th>
                <th className="text-start text-sm font-normal text-muted pb-2">
                  Address
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="mt-3">
              {users
                .filter((item) =>
                  item.name.toLowerCase().includes(keyword.toLowerCase())
                )
                .map((item) => (
                  <tr className="">
                    <td className="py-2 text-sm">
                      <img
                        src={item.profileURL}
                        className="h-6 w-6 rounded-full"
                      />
                    </td>
                    <td className="py-2 text-sm">{item.name}</td>
                    <td className="py-2 text-sm">{item.email}</td>
                    <td className="py-2 text-sm">{item.phone}</td>
                    <td className="py-2 text-sm">{item.address}</td>
                    <td className="py-2 text-sm">
                      <button
                        onClick={() => {
                          setSelectedUser(item);
                          setShowModal(true);
                        }}
                        className="bg-orange-100 text-sm px-3 py-1 rounded-full "
                      >
                        View profile
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        {showModal == true && (
          <UserProfile setShowModal={setShowModal} item={selectedUser} />
        )}
      </div>
    </div>
  );
};

export default DashboardUsers;
