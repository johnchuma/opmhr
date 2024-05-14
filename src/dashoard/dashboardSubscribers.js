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
      <div className="border-4 rounded-full border-slate-900 h-8 w-8 animate-spin border-t-transparent "></div>
    </div>
  ) : (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Subscribers</h1>
        <button
          className="py-2 px-4 bg-orange-500 text-white font-bold"
          onClick={() => {
            exportToExcel(subscribers);
          }}
        >
          Download Excel
        </button>
      </div>
      <div className="bg-white p-5 shadow mt-5">
        {subscribers.length < 1 ? (
          <NoData />
        ) : (
          <table className=" w-full">
            <thead className="px-5">
              <tr>
                <th className="text-start">Subscribed</th>
                <th className="text-start">Phone</th>
                <th className="text-start">Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="mt-3">
              {subscribers.map((item) => (
                <tr className={`cursor-pointer hover:opacity-100`}>
                  <td className="py-2">
                    {formatDate(item.createdAt.toDate())}
                  </td>
                  <td className="py-2">{item.phone}</td>
                  <td className="py-2">{item.email}</td>
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
