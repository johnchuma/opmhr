import Chart from "react-apexcharts";
import {
  getAnalytics,
  getVisitorsOverAYear
} from "../controllers/dashboardController";
import PageLoader from "../components/pageLoader";
import { useEffect, useState } from "react";
import moment from "moment";
import DashboardUsers from "./dashboardUsers";

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [graphData, setGraphData] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  const [currentYear, setcurrentYear] = useState(
    moment(new Date()).format("YYYY")
  );
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    setLoading(true);
    getAnalytics().then((data) => {
      setDashboardData(data);
      setLoading(false);
    });
  }, [refresh]);
  useEffect(() => {
    getVisitorsOverAYear(parseInt(currentYear)).then((response) => {
      setGraphData(response);
    });
  }, [currentYear]);
  return loading ? (
    <PageLoader />
  ) : (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <div className=" border border-borderColor  w-full p-3 rounded-lg bg-white flex items-center space-x-2">
          <div className="bg-orange-50 h-14 w-14 rounded-2xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-textColor"
            >
              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-base text-textColor">
              {dashboardData.totalApplicants} Users
            </h1>
            <p className="text-muted text-sm">Total Applicants</p>
          </div>
        </div>
        <div className="border border-borderColor  w-full p-3 rounded-lg bg-white flex items-center space-x-2">
          <div className="bg-blue-50 h-14 w-14 rounded-2xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-textColor"
            >
              <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
              <path
                fillRule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-textColor text-base">
              {dashboardData.totalCompanies} Companies
            </h1>
            <p className="text-muted text-sm">Total companies</p>
          </div>
        </div>
        <div className="border border-borderColor  w-full  p-3 rounded-lg bg-white flex items-center space-x-2">
          <div className="bg-purple-50 h-14 w-14 rounded-2xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-base">
              {dashboardData.totalVisitors} visitors
            </h1>
            <p className="text-sm text-muted">Total website visitors</p>
          </div>
        </div>
        <div className="border border-borderColor  w-full p-3 rounded-lg bg-white flex items-center space-x-2">
          <div className="bg-red-50 h-14 w-14 rounded-2xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-base ">
              {dashboardData.totalInquiries} Inquiries
            </h1>
            <p className=" text-sm text-muted line-clamp-1">Unread inquiries</p>
          </div>
        </div>
        <div className="border border-borderColor  w-full p-3 rounded-lg bg-white flex items-center space-x-2">
          <div className="bg-yellow-50 h-14 w-14 rounded-2xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                clipRule="evenodd"
              />
              <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-base">{dashboardData.totalBlogs} Posts</h1>
            <p className=" line-clamp-1 text-muted text-sm">Total blog posts</p>
          </div>
        </div>
        <div className="border border-borderColor  w-full p-3 rounded-lg bg-white flex items-center space-x-2">
          <div className="bg-gray-50 h-14 w-14 rounded-2xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-base">{dashboardData.totalJobs} Jobs</h1>
            <p className=" text-sm text-muted line-clamp-1">Total job posts</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mb-8">
        <div className=" col-span-12">
          <h1 className="mt-8  text-lg">New registered users</h1>
          <DashboardUsers hideHeader={true} />
        </div>
        <div className=" col-span-4"></div>
      </div>
    </div>
  );
};

export default DashboardPage;
