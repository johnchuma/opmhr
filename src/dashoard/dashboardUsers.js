import { useEffect, useState } from "react";

import { getUsers } from "../controllers/authController";
import { formatDate } from "../utils/format_date";
import ExperienceItem from "../components/experience";
import RefreeItem from "../components/refreeItem";
import UserProfile from "../components/userProfile";
import NoData from "../components/noData";
import { timeAgo } from "../utils/time_ago";

const DashboardUsers = () => {
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
      <div className="border-4 rounded-full border-primary h-8 w-8 animate-spin border-t-transparent "></div>
    </div>
  ) : (
    <div className="text-textColor">
      <div className="flex justify-between">
        <h1 className="text-lg">Users/Applicants</h1>
        <input
          onChange={(e) => {
            setkeyword(e.target.value);
          }}
          placeholder="Search here"
          className="bg-transparent border-borderColor rounded-lg"
        />
      </div>
      {users.length < 1 ? (
        <NoData />
      ) : (
        <div className="grid grid-cols-4 gap-8 px-8 py-8 bg-white  border border-borderColor rounded-lg mt-5 w-full">
          {users
            .filter((item) =>
              item.name.toLowerCase().includes(keyword.toLowerCase())
            )
            .map((item) => (
              <div className="items-center border border-borderColor py-3 rounded-2xl flex flex-col">
                <img
                  onClick={() => {
                    setSelectedUser(item);
                    setShowModal(true);
                  }}
                  className="aspect-squire rounded-full h-24 w-24 object-cover"
                  src={item.profileURL}
                />
                <h1 className="">{item.name}</h1>
                <p className="text-muted text-sm">
                  Joined {timeAgo(item.createdAt.toDate())}
                </p>
              </div>
            ))}
          {showModal == true && (
            <UserProfile setShowModal={setShowModal} item={selectedUser} />
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardUsers;
