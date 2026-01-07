import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Jobs from "./pages/user/Jobs";
import JobDetails from "./pages/user/JobDetails";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Register from "./pages/auth/Register";
import Profile from "./pages/profile/Profile";
import Footer from "./components/Footer";


function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />



        <Route
          path="/recruiter"
          element={
            <ProtectedRoute role="recruiter">
              <RecruiterDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* ✅ Footer goes here */}
      <Footer />
    </>
  );
}

export default App;
