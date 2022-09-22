import Home from "./pages/user/home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/admin";
import JobsList from "./pages/admin/jobsList";
import JobDetails from "./pages/admin/jobDetails";
import ApplicantDetails from "./pages/admin/applicantDetails";
import Profile from "./pages/user/profile";
import Application from "./pages/user/application";
import JobDetail from "./pages/user/jobDetail";
import JobForm from "./pages/admin/jobForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/jobs" element={<JobsList/>} />
          <Route path="/admin/jobs/jobId" element={<JobDetails/>} />
          <Route path="/admin/jobs/form" element={<JobForm/>} />
          <Route path="/admin/applicant/applicantId" element={<ApplicantDetails/>} />
          <Route path="/user/profile" element={<Profile/>} />
          <Route path="/user/applications" element={<Application/>} />
          <Route path="/user/jobs/jobId" element={<JobDetail/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
