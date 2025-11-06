import Index from "../pages/Index.jsx";
import Booking from "../pages/Booking.jsx";
import Gallery from "../pages/Gallery.jsx";
import Order from "../pages/Order.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Profile from "../pages/Profile.jsx";
import Admin from "../pages/Admin.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import Users from "./components/Users.jsx";
import AdminOrders from "./components/AdminOrders.jsx";
import AdminBookings from "./components/AdminBookings.jsx";
import AdminComplaints from "./components/AdminComplaints.jsx";
import Roles from "./components/Roles.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {/* Public routes */}
        <Route path="/" element={<Index />} />
        <Route path="profile" element={<Profile />} />
        <Route path="booking" element={<Booking />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="order" element={<Order />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        {/* ADMIN routes (nested) */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/roles" element={<Roles />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="complaints" element={<AdminComplaints />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
