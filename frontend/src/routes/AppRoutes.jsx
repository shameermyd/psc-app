import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CourseDetails from "../pages/CourseDetails";

const AppRoutes = () => {
    return (
        // <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/login"  element={<Login />}/>
            <Route path="/dashboard"  element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}/>
            <Route path="/course/:id"  element={<CourseDetails />}/>
        </Routes>
        // </BrowserRouter>
    )
}
export default AppRoutes;