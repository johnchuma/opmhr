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
import BlogPage from "./pages/blogPage";
import JobsPage from "./pages/jobsPage";
import BlogPostDetails from "./pages/blogPostDetails";
import JobDetails from "./pages/jobDetails";
import ApplyForAJob from "./pages/applyForAJob";
import ContactPage from "./pages/contactpage";
// import ServicesPage from "./pages/servicesPage";
import CompanyPage from "./pages/companyPage";
import ProductPage from "./pages/productsPage";
import InvestmentPage from "./pages/investmentPage";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import PerformanceManagementServices from "./pages/services/performanceManagementServices";
import PerformanceManagementSoftware from "./pages/softwares/performanceManagementSoftware";
import Appraisal from "./pages/softwares/appraisal";
import HRIS from "./pages/softwares/hris";
import Leave from "./pages/softwares/leave";
import Attendance from "./pages/softwares/attendance";
import ESSPortal from "./pages/softwares/essPortal";
// import FullAndFinal from "./pages/softwares/fullAndfinal";
import PayrollSoftware from "./pages/softwares/payrollSoftware";
import Timesheet from "./pages/softwares/timesheet";
import FullAndFinal from "./pages/softwares/fullAndfinal";
import Expenses from "./pages/softwares/expenses";
import Recruitment from "./pages/softwares/recruitment";
function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<LoginPage />} />
          <Route path="/register" index element={<RegisterPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route
              path="/services/performance-management-services"
              element={<PerformanceManagementServices />}
            />
            <Route
              path="/products/performance-management-software"
              element={<PerformanceManagementSoftware />}
            />
            <Route path="/products/appraisal" element={<Appraisal />} />
            <Route path="/products/hris" element={<HRIS />} />
            <Route path="/products/leave" element={<Leave />} />
            <Route path="/products/attendance" element={<Attendance />} />
            <Route path="/products/ess-portal" element={<ESSPortal />} />
            <Route path="/products/full-&-final" element={<FullAndFinal />} />
            <Route
              path="/products/payroll-software"
              element={<PayrollSoftware />}
            />
            <Route path="/products/timesheet" element={<Timesheet />} />
            <Route path="/products/recruitment" element={<Recruitment />} />
            <Route path="/products/expenses" element={<Expenses />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/products/:uuid" element={<ProductPage />} />
            <Route path="/investment" element={<InvestmentPage />} />

            <Route path="/blog" element={<BlogPage />} />
            <Route
              path="/blogPostDetails/:uuid"
              element={<BlogPostDetails />}
            />
            <Route path="/jobDetails/:uuid" element={<JobDetails />} />
            <Route path="/applyForAJob/:uuid" element={<ApplyForAJob />} />
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
