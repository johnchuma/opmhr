import { useEffect, useState } from "react";

import { formatDate } from "../utils/format_date";
import ExperienceItem from "../components/experience";
import RefreeItem from "../components/refreeItem";
import {
  getInquiries,
  updateInquiry
} from "../controllers/inquiriesController";
import { timeAgo } from "../utils/time_ago";
import NoData from "../components/noData";

const DashboardInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [keyword, setkeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setselectedItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    getInquiries().then((data) => {
      setInquiries(data);
      setLoading(false);
    });
  }, [refresh]);
  return loading ? (
    <div className="flex   ms-auto w-full  justify-center items-center h-96">
      <div className="border-4 rounded-full border-primary h-8 w-8 animate-spin border-t-transparent "></div>
    </div>
  ) : (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Inquiries</h1>
        <input
          onChange={(e) => {
            setkeyword(e.target.value);
          }}
          placeholder="Search here"
          className="bg-transparent"
        />
      </div>
      <div className="bg-white p-5 shadow mt-5">
        {inquiries.length < 1 ? (
          <NoData />
        ) : (
          <table className=" w-full">
            <thead className="px-5">
              <tr>
                <th className="text-start">Sent</th>
                <th className="text-start">Full name</th>
                <th className="text-start">Email</th>
                <th className="text-start">Phone</th>
                {/* <th className="text-start">Service</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody className="mt-3">
              {inquiries
                .filter((item) =>
                  item.name.toLowerCase().includes(keyword.toLowerCase())
                )
                .map((item) => (
                  <tr className={`cursor-pointer hover:opacity-100`}>
                    <td className="py-2">{timeAgo(item.createdAt.toDate())}</td>
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.email}</td>
                    <td className="py-2">{item.phone}</td>
                    {/* <td className="py-2">{item.service}</td> */}
                    <td>
                      <button
                        onClick={() => {
                          setselectedItem(item);
                          setShowModal(true);
                        }}
                        className="py-1 px-3 bg-green-100 text-sm font-bold rounded-full"
                      >
                        Read message
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>

            {showModal == true && (
              <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-center items-center">
                <div className="w-4/12 bg-white   shadow-xl px-8 py-10">
                  <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">Message</h1>
                    <svg
                      onClick={() => {
                        if (selectedItem.isRead == false) {
                          updateInquiry(selectedItem.id, { isRead: true }).then(
                            (item) => {
                              setRefresh(refresh + 1);
                            }
                          );
                        }
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
                  <div className="mt-4">
                    <button className="text-sm rounded-full mb-2 bg-orange-100 py-2 px-3">
                      {selectedItem.service}
                    </button>
                    <div>{selectedItem.message}</div>
                  </div>
                </div>
              </div>
            )}
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardInquiries;
