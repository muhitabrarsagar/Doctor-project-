import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import DoctorApoint from "./pages/DoctorApoint";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import SignUP from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NavBar from "./component/form/Navbar";
import AllDoctors from "./pages/AllDoctors";
import ScrollToTop from "./component/ScrollTop";
import AdminPanel from "./pages/AdminPanel";
import AdminApoint from "./pages/Allapnoint";
import AddDoctor from "./pages/AddDoctor";
import DoctorList from "./pages/DoctorList";
import MainDashBo from "./pages/MainDashBo";
import PayDoctors from "./component/form/PayDoctors";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-docters" element={<AllDoctors />} />
        <Route path="/Doctor-Apoint" element={<DoctorApoint />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUP />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-apoint" element={<AdminApoint />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/doctor-list" element={<DoctorList />} />
        <Route path="/main-dash" element={<MainDashBo />} />
        <Route path="/pay-doctors" element={<PayDoctors />} />
      </Routes>
    </Router>
  );
}

export default App;
