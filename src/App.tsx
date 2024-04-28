import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./Pages/AdminDashboard";
import Home from "./Pages/Home";
import Signup from "./Pages/SignUp";
import UserDashboard from "./Pages/UserDashboard";
import Login from "./Pages/login";
import RootLayout from "./components/Layouts/RootLayout";
import AdminProtected from "./components/Layouts/AdminProtected";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<RootLayout />}>
        <Route element={<AdminProtected />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
