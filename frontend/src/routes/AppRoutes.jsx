import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CourseDetails from "../pages/CourseDetails";
import Quiz from "../pages/Quiz";

const AppRoutes = () => {
    return (
        // <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/login"  element={<Login />}/>
            <Route path="/dashboard"  element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}/>
            <Route path="/course/:id"  element={<CourseDetails />}/>
            <Route path="/quiz" element={<Quiz />} />
        </Routes>
        // </BrowserRouter>
    )
}
export default AppRoutes;