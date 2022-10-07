import Home from "./pages/user/home";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/admin";
import JobsList from "./pages/admin/jobsList";
import JobDetails from "./pages/admin/jobDetails";
import ApplicantDetails from "./pages/admin/applicantDetails";
import { EditProfile, Profile } from "./pages/user/profile";
import { Experience } from "./pages/user/profile";
import { Skills } from "./pages/user/profile";
import Application from "./pages/user/application";
import JobDetail from "./pages/user/jobDetail";
import JobForm from "./pages/admin/jobForm";
// import LayoutAdmin from "./components/parent";
import Sidebar from "./components/Sidebar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cookies from "js-cookie";

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
            path="/admin/jobs"
            element={
              // <LayoutAdmin>
              <JobsList />
              // </LayoutAdmin>
            }
          />
          <Route
            path="/admin/jobs/:jobId"
            element={
              // <LayoutAdmin>
              <JobDetails />
              // </LayoutAdmin>
            }
          />
          <Route
            path="/admin/jobs/form/create"
            element={
              // <LayoutAdmin>
              <JobForm />
              // </LayoutAdmin>
            }
          />
          <Route
            path="/admin/jobs/form/edit/:Id"
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
          <Route path="/user/jobs/:jobId" element={<JobDetail />} />
          {Cookies.get('token') &&
          <>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/profile/edit" element={<EditProfile />} />
            <Route path="/user/profile/skills" element={<Skills />} />
            <Route path="/user/profile/experience" element={<Experience />} />
            <Route path="/user/applications" element={<Application />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/register" element={<Navigate to="/" replace />} />
          </>
          }

          {!Cookies.get('token') && 
          <>
            <Route path="/user/profile" element={<Navigate to="/login" replace />} />
            <Route path="/user/profile/edit" element={<Navigate to="/login" replace />} />
            <Route path="/user/profile/skills" element={<Navigate to="/login" replace />} />
            <Route path="/user/profile/experience" element={<Navigate to="/login" replace />} />
            <Route path="/user/applications" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />}  />
            <Route path="/register" element={<Register />} />
          </>
          }
            
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
