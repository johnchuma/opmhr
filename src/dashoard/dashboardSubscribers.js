import { useEffect, useState } from "react";
import { timeAgo } from "../utils/time_ago";
import NoData from "../components/noData";
import { getSubscribers } from "../controllers/subscriberController";
import { formatDate } from "../utils/format_date";
import { exportToExcel } from "../utils/printExel";

const DashboardSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [keyword, setkeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setselectedItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    getSubscribers().then((data) => {
      setSubscribers(data);
      setLoading(false);
    });
  }, [refresh]);
  return loading ? (
    <div className="flex   ms-auto w-full  justify-center items-center h-96">
      <div className="border-4 rounded-full border-textColor h-8 w-8 animate-spin border-t-transparent "></div>
    </div>
  ) : (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg">Subscribers</h1>
        <button
          className="py-2 px-4 bg-primary text-white rounded-lg"
          onClick={() => {
            exportToExcel(subscribers);
          }}
        >
          Download Excel
        </button>
      </div>
      <div className="bg-white p-5 border border-borderColor py-5 rounded-md mt-5">
        {subscribers.length < 1 ? (
          <NoData />
        ) : (
          <table className=" w-full">
            <thead className="px-5">
              <tr className="border-b border-borderColor border-opacity-70">
                <th className="text-start text-sm pb-2 font-normal text-muted">
                  Subscribed
                </th>
                <th className="text-start text-sm pb-2 font-normal text-muted">
                  Phone
                </th>
                <th className="text-start text-sm pb-2 font-normal text-muted">
                  Email
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="mt-3">
              {subscribers.map((item) => (
                <tr className={`cursor-pointer hover:opacity-100`}>
                  <td className="py-2 text-sm font-normal">
                    {formatDate(item.createdAt.toDate())}
                  </td>
                  <td className="py-2 text-sm font-normal">{item.phone}</td>
                  <td className="py-2 text-sm font-normal">{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardSubscribers;
