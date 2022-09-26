import Home from "./pages/user/home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/admin";
import JobsList from "./pages/admin/jobsList";
import JobDetails from "./pages/admin/jobDetails";
import ApplicantDetails from "./pages/admin/applicantDetails";
import { Profile } from "./pages/user/profile";
import { Experience } from "./pages/user/profile";
import { Skills } from "./pages/user/profile";
import Application from "./pages/user/application";
import JobDetail from "./pages/user/jobDetail";
import JobForm from "./pages/admin/jobForm";
// import LayoutAdmin from "./components/parent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route
            exact
            path="/admin/jobs"
            element={
              // <LayoutAdmin>
              <JobsList />
              // </LayoutAdmin>
            }
          />
          <Route
            path="/admin/jobs/jobId"
            element={
              // <LayoutAdmin>
              <JobDetails />
              // </LayoutAdmin>
            }
          />
          <Route
            path="/admin/jobs/form"
            element={
              // <LayoutAdmin>
              <JobForm />
              // </LayoutAdmin>
            }
          />
          <Route
            path="/admin/applicant/applicantId"
            element={
              // <LayoutAdmin>
              <ApplicantDetails />
              // </LayoutAdmin>
            }
          />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/profile/skills" element={<Skills />} />
          <Route path="/user/profile/experience" element={<Experience />} />
          <Route path="/user/applications" element={<Application />} />
          <Route path="/user/jobs/jobId" element={<JobDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
