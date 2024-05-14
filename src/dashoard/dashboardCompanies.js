import { useEffect, useState } from "react";

import { getCompanies } from "../controllers/authController";
import { formatDate } from "../utils/format_date";
import ExperienceItem from "../components/experience";
import RefreeItem from "../components/refreeItem";
import NoData from "../components/noData";

const DashboardCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [keyword, setkeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCompanies().then((data) => {
      setCompanies(data);
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
        <h1 className="text-2xl font-bold">Registered companies</h1>
        <input
          onChange={(e) => {
            setkeyword(e.target.value);
          }}
          placeholder="Search here"
          className="bg-transparent border-slate-300 rounded"
        />
      </div>
      <div className="bg-white p-5 shadow mt-5">
        {companies.length < 1 ? (
          <NoData />
        ) : (
          <table className=" w-full">
            <thead className="px-5">
              <tr>
                <th className="text-start">Full name</th>
                <th className="text-start">Email</th>
                <th className="text-start">Phone</th>
                <th className="text-start">Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="mt-3">
              {companies
                .filter((item) =>
                  item.name.toLowerCase().includes(keyword.toLowerCase())
                )
                .map((item) => (
                  <tr>
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.email}</td>
                    <td className="py-2">{item.phone}</td>
                    <td className="py-2">{item.address}</td>
                    <td className="py-2">
                      <button
                        onClick={() => {
                          setShowModal(true);
                        }}
                        className="bg-orange-100 text-sm px-3 py-2 rounded-full font-bold"
                      >
                        View Logo
                      </button>
                    </td>
                    {showModal == true && (
                      <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-center items-center">
                        <div className="w-4/12 bg-white   shadow-xl px-8 py-10">
                          <div className="flex justify-between">
                            <h1 className="text-2xl font-bold">Logo</h1>
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
                              className="aspect-squire  h-48 my-5  object-cover"
                              src={item.profileURL}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardCompanies;
