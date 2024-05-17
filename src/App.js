import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homePage";
import MainLayout from "./layouts/mainLayout";
import DashboardPage from "./dashoard/dashboardPage";
import DashboardCv from "./dashoard/dashboardCv";
import DashboardUsers from "./dashoard/dashboardUsers";
import DashboardInquiries from "./dashoard/dashboardInquiries";
import DashboardCompanies from "./dashoard/dashboardCompanies";
import DashboardApplications from "./dashoard/dashboardApplications";
import CompanyProfile from "./dashoard/dashboardCompanyProfile";
import DashboardBlog from "./dashoard/dahboardBlog";
import DashboardJobPosts from "./dashoard/dashboardJobPosts";
import DashboardPublishedJobs from "./dashoard/dashboardPublishedJobs";
import DashboardUnpublishedJobs from "./dashoard/dashboardUnpublishedJobs";
import PrivateRoute from "./auth/privateRoute";
import DashboardLayout from "./layouts/dashboardLayout";
import DashboardSubscribers from "./dashoard/dashboardSubscribers";
import LoginPage from "./auth/loginPage";
import RegisterPage from "./auth/registerPage";

function App() {
  return (
    <div className=" font-aeonik text-textColor">
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<LoginPage />} />
          <Route path="/register" index element={<RegisterPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route index path="/" element={<HomePage />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" index element={<DashboardPage />} />
            <Route path="/dashboard/cv" element={<DashboardCv />} />
            <Route path="/dashboard/users" element={<DashboardUsers />} />
            <Route
              path="/dashboard/inquiries"
              element={<DashboardInquiries />}
            />
            <Route
              path="/dashboard/subscribers"
              element={<DashboardSubscribers />}
            />
            <Route
              path="/dashboard/companies"
              element={<DashboardCompanies />}
            />
            <Route
              path="/dashboard/applications"
              element={<DashboardApplications />}
            />
            <Route
              path="/dashboard/companyProfile"
              element={<CompanyProfile />}
            />
            <Route path="/dashboard/blog" element={<DashboardBlog />} />
            <Route path="/dashboard/jobPosts" element={<DashboardJobPosts />} />
            <Route
              path="/dashboard/publishedJobs"
              element={<DashboardPublishedJobs />}
            />
            <Route
              path="/dashboard/unpublishedJobs"
              element={<DashboardUnpublishedJobs />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
